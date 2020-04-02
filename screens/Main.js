import React from "react";
import styled from "styled-components";
//
import { db } from "../utils";
import PokemonList from "../components/PokemonList"
import SearchBar from "../components/SearchBar"

const PokemonListWrapper = styled.View`
  background-color: "rgb(229,229,234)";
  padding: 0 30px;
`;

export default function Main({ navigation }) {
  return (
    <PokemonListWrapper>
      <SearchBar/>
      <PokemonList items={db.slice(0, 51)} navigation={navigation}/>
    </PokemonListWrapper>
  );
}
