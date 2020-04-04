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
  const [db, setDb] = useState(allPokemon.slice(0, 51));

  const search = (query) => {
      let matches =  allPokemon.filter(p => {
        const regex = new RegExp(query, 'gi');
        return p.name.match(regex)
      });
      setDb(matches)
  };
  const reset = () => {
    setDb(allPokemon.slice(0, 5));
  };

  return (
    <PokemonListWrapper>
      <SearchBar search={search} reset={reset} />
      <PokemonList items={db} navigation={navigation} />
    </PokemonListWrapper>
  );
}
