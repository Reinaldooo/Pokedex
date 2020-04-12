import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";
//
import { dbSetupHelper } from "../utils";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";

const db = SQLite.openDatabase("pokemon.db");

const PokemonListWrapper = styled.View`
  background-color: "rgb(229,229,234)";
  padding: 0 30px;
  height: 110%;
`;

export default function Main({ navigation }) {
  const [pokeDb, setPokeDb] = useState([]);
  const [searchChars, setSearchChars] = useState("");
  const [searching, setSearching] = useState(false);
  const flatRef = useRef(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "drop table pokemon;"
      );
      tx.executeSql(
        "create table if not exists pokemon (id integer not null, name text, types text, sprite text, color text, desc text, evolution_chain text, owned int);"
      );
    });
    db.transaction((tx) => {
      dbSetupHelper.forEach((item) => {
        tx.executeSql("insert into pokemon (id, name, types, sprite, color, desc, evolution_chain, owned) values (?, ?, ?, ?, ?, ?, ?, ?)", [
          item.id,
          item.name,
          JSON.stringify(item.types),
          item.sprite,
          item.color,
          item.desc,
          item.evolution_chain,
          item.owned
        ]);
      })
    });
    db.transaction((tx) => {
      tx.executeSql(
        `select * from pokemon limit 102 offset 102;`,
        [],
        (_, { rows: { _array } }) => setPokeDb(_array)
      );
    });
  }, []);

  useEffect(() => {
    // Scroll to top if db is changed
    if (pokeDb.length !== 0) {
      flatRef.current.scrollToIndex({ index: 0 })
    }
  }, [pokeDb])

  const search = (query) => {
    if (!query) return;
    let matches;
    db.transaction((tx) => {
      tx.executeSql(
        "select * from pokemon where name like ?;",
        [`%${query}%`],
        (_, { rows: { _array } }) => {
          matches = _array
          setSearchChars(query);
          setSearching(true);
          if (matches.length % 3 !== 0) {
            // Insert a empty item to fix last column layout if the cards number is
            // not multiple of 3
            matches.push({
              name: "hidden",
              sprite: "hidden",
              color: "hidden",
            });
          }
          setPokeDb(matches);
        },
      );
    });
  };
  const reset = () => {
    setSearching(false);
    db.transaction((tx) => {
      tx.executeSql(
        `select * from pokemon limit 102;`,
        [],
        (_, { rows: { _array } }) => setPokeDb(_array)
      );
    });
    setSearchChars("");
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
        />
      </PokemonListWrapper>
    </SafeAreaView>
  );
}
