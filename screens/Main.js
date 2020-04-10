import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { allPokemon } from "../utils";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";

const PokemonListWrapper = styled.View`
  background-color: "rgb(229,229,234)";
  padding: 0 30px;
  height: 110%;
`;

export default function Main({ navigation }) {
  const [db, setDb] = useState(allPokemon.slice(0, 102));
  const [searchChars, setSearchChars] = useState("");
  const [searching, setSearching] = useState(false);
  
  const flatRef = useRef(null);

  const search = (query) => {
    let matches = allPokemon.filter((p) => {
      const regex = new RegExp(query, "gi");
      return p.name.match(regex);
    });
    setSearchChars(query);
    setSearching(true);
    setDb(matches);
    flatRef.current.scrollToIndex({ index: 0 })
  };
  const reset = () => {
    setSearching(false);
    setDb(allPokemon.slice(0, 102));
    setSearchChars("");
    flatRef.current.scrollToIndex({ index: 0 })
  };

  return (
    <SafeAreaView>
      <PokemonListWrapper>
        <SearchBar
          search={search}
          reset={reset}
          searching={searching}
        />
        <PokemonList
          items={db}
          flatRef={flatRef}
          navigation={navigation}
          searchChars={searchChars}
        />
      </PokemonListWrapper>
    </SafeAreaView>
  );
}
