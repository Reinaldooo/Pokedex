import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
//
import { executeSql } from "../dbUtils";
import MyPokemonList from "../components/MyPokemonList";

const PokemonListWrapper = styled.View`
  background-color: rgb(229, 229, 234);
  padding: 15px 30px 0;
  height: 103%;
`;

export default function Pokemon({ navigation }) {
  const [pokeDb, setPokeDb] = useState([]);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const flatRef = useRef(null);

  useFocusEffect(
    // Get owned pokemon on screen focus.
    // useEffect wasn't used here because if a pokemon is saved on "Search" tab,
    // it would not update in here. 
    React.useCallback(() => {
      executeSql(
        `select * from pokemon where owned = true;`
      ).then((res) => {
        if (res.length % 3 !== 0) {
          // Insert a empty item to fix last column layout if the cards number is
          // not multiple of 3
          res.push({
            name: "hidden",
            sprite: "hidden",
            color: "hidden",
          });
        }
        setPokeDb(res);
      });
    }, [])
  );

  return (
    <SafeAreaView>
      <PokemonListWrapper>
        <MyPokemonList items={pokeDb} />
      </PokemonListWrapper>
    </SafeAreaView>
  );
}
