import React, { useState } from "react";
import styled from "styled-components";
//
import { allPokemon } from "../utils";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";

const PokemonListWrapper = styled.View`
  background-color: "rgb(229,229,234)";
  padding: 0 30px;
`;

export default function Main({ navigation }) {
  const [db, setDb] = useState(allPokemon);
  const [searchChars, setSearchChars] = useState("");
  const [searching, setSearching] = useState(false);

  const search = (query) => {
    let matches = allPokemon.filter((p) => {
      const regex = new RegExp(query, "gi");
      return p.name.match(regex);
    });
    setSearchChars(query)
    setSearching(true)
    setDb(matches)
    ;
  };
  const reset = () => {
    setSearching(false)
    setDb(allPokemon.slice(0, 51));
    setSearchChars("")
  };

  return (
    <PokemonListWrapper>
      <SearchBar search={search} reset={reset} searching={searching}/>
      <PokemonList
        items={db}
        navigation={navigation}
        searchChars={searchChars}
      />
    </PokemonListWrapper>
  );
}
