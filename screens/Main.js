import React, { useState, useRef, useEffect } from "react";
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
    if(matches.length % 3 !== 0) {
      // Insert a empty item to fix last column if the cards number is
      // not multiple of 3      
      matches.push({
        name: "hidden",
        sprite: "hidden",
        color: "hidden"
      })
    }
    setDb(matches);
  };
  const reset = () => {
    setSearching(false);
    setDb(allPokemon.slice(0, 102));
    setSearchChars("");
  };

  useEffect(() => {
    // Scroll to top if db is changed
    if (db.length !== 0) {
      flatRef.current.scrollToIndex({ index: 0 })
    }
  }, [db])

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
