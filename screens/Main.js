import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { executeSql } from "../dbUtils";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";

const PokemonListWrapper = styled.View`
  background-color: rgb(229, 229, 234);
  padding: 0 30px;
  height: 103%;
`;

export default function Main({ navigation }) {
  const pokeDb = useSelector(state => state.pokemons.slice(0, 102))
  const [dbOffset, setDbOffset] = useState(102);
  const [preventScrollToIndex, setPreventScrollToIndex] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [searchChars, setSearchChars] = useState("");
  const [searching, setSearching] = useState(false);
  const flatRef = useRef(null);

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
    // if (dbOffset > 750 || searching) return;
    // setPreventScrollToIndex(true);
    // setDbOffset((old) => old + 54);
    // if (dbOffset > 200) {
    //   setShowBackToTop(true);
    // }
    // Dispatch action LOAD_MORE
    
  };

  const backToTop = () => {
    flatRef.current.scrollToIndex({ index: 0 });
    setShowBackToTop(false);
  };

  return (
    <SafeAreaView>
      <PokemonListWrapper>
        <SearchBar search={search} reset={reset} searching={searching} />
        <PokemonList
          items={pokeDb}
          flatRef={flatRef}
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
