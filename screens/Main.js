import React, { useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native"
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
  const [db, setDb] = useState(allPokemon.slice(0, 151));
  const [searchChars, setSearchChars] = useState("");
  const [searching, setSearching] = useState(false);

  const search = (query) => {
    let matches = allPokemon.filter((p) => {
      const regex = new RegExp(query, "gi");
      return p.name.match(regex);
    });
    setSearchChars(query);
    setSearching(true);
    setDb(matches);
  };
  const reset = () => {
    setSearching(false);
    setDb(allPokemon.slice(0, 151));
    setSearchChars("");
  };

  return (
    <SafeAreaView>
      <PokemonListWrapper>
        <SearchBar search={search} reset={reset} searching={searching} />
        <PokemonList
          items={db}
          navigation={navigation}
          searchChars={searchChars}
        />
      </PokemonListWrapper>
    </SafeAreaView>
  );
}
