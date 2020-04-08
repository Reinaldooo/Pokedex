import React from 'react';
import styled from "styled-components/native";
import { Image, View } from "react-native"
//
import PokemonName from "./PokemonName"
import PokemonImage from "./PokemonImage"

const ImageWrapper = styled.View`
  overflow: hidden;
  /* background-color: green; */
  width: 70%;
  margin-top: 10px;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TouchableWrapper = styled.TouchableOpacity`
  background-color: white;
  width: 100px;
  margin-bottom: 20px;
  height: 110px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Pokemon({ item, searchChars, navigation }) {
  return (
  <TouchableWrapper onPress={() => navigation.navigate("PokemonDetail", {
    item
  })}>
    <ImageWrapper>
      <PokemonImage
        uri={item.sprite}
        size="100%"
      />
    </ImageWrapper>
    <PokemonName name={item.name} searchChars={searchChars}/>
    <View
      style={{
        backgroundColor: item.color,
        height: 12,
        width: 100
      }}
    ></View>
  </TouchableWrapper>
)}

export const PokemonCard = React.memo(Pokemon)