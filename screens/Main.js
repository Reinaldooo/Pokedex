import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { dbSetupHelper } from "../utils";
import { executeSql } from "../dbUtils";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";

const PokemonListWrapper = styled.View`
  background-color: rgb(229, 229, 234);
  padding: 0 30px;
  height: 103%;
`;

export default function Main({ navigation }) {
  const [pokeDb, setPokeDb] = useState([]);
  const [dbOffset, setDbOffset] = useState(102);
  const [preventScrollToIndex, setPreventScrollToIndex] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [searchChars, setSearchChars] = useState("");
  const [searching, setSearching] = useState(false);
  const flatRef = useRef(null);

  useEffect(() => {
    executeSql(
      "create table if not exists pokemon (id integer not null, " +
        "name text, types text, sprite text, color text, desc text, " +
        "evolution_chain text, owned int);"
    );
    executeSql(`select * from pokemon;`).then((res) => {
      console.log(res[10])
      if (res.length === 0) {
        dbSetupHelper.forEach((item) => {
          executeSql(
            "insert into pokemon (id, name, types, sprite, color, desc, " +
              "evolution_chain, owned) values (?, ?, ?, ?, ?, ?, ?, ?)",
            [
              item.id,
              item.name,
              JSON.stringify(item.types),
              item.sprite,
              item.color,
              item.desc,
              item.evolution_chain,
              item.owned,
            ]
          );
        });
      }
    });
    executeSql(`select * from pokemon limit 102;`).then((res) =>
      setPokeDb(res)
    );
  }, []);

  useEffect(() => {
    // Scroll to top if db is changed
    if (pokeDb.length !== 0 && !preventScrollToIndex) {
      flatRef.current.scrollToIndex({ index: 0 });
    }
  }, [pokeDb]);

  const search = (query) => {
    if (!query) return;
    executeSql("select * from pokemon where name like ?;", [`%${query}%`]).then(
      (matches) => {
        if (matches.length % 3 !== 0) {
          // Insert a empty item to fix last column layout if the cards number is
          // not multiple of 3
          matches.push({
            name: "hidden",
            sprite: "hidden",
            color: "hidden",
          });
        }
        console.log(matches)
        setSearching(true);
        setSearchChars(query);
        setPokeDb(matches);
      }
    );
  };

  const reset = () => {
    executeSql(`select * from pokemon limit 102;`).then((res) => {
      setPokeDb(res);
      setSearching(false);
      setSearchChars("");
      setDbOffset(102);
    });
  };

  const loadMore = () => {
    if (dbOffset > 750 || searching) return;
    executeSql(`select * from pokemon limit 54 offset ?;`, [dbOffset])
    .then((res) => {
      setPreventScrollToIndex(true);
      setPokeDb((old) => old.concat(res));
      setDbOffset((old) => old + 54);
      if (dbOffset > 200) {
        setShowBackToTop(true);
      }
    })
  };

  const backToTop = () => {
    flatRef.current.scrollToIndex({ index: 0 });
    setShowBackToTop(false);
    // After 300ms reset the state for performance optimization
    setTimeout(() => {
      executeSql(`select * from pokemon limit 102;`)
      .then((reset) => {
        setPokeDb(res);
        setDbOffset(102);
      })
    }, 300);
  };

  return (
    <SafeAreaView>
      <PokemonListWrapper>
        <SearchBar search={search} reset={reset} searching={searching} />
        <PokemonList
          items={pokeDb}
          flatRef={flatRef}
          navigation={navigation}
          searchChars={searchChars}
          loadMore={loadMore}
          reset={reset}
          backToTop={backToTop}
          showBackToTop={showBackToTop}
          searching={searching}
        />
      </PokemonListWrapper>
    </SafeAreaView>
  );
}
