import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
//
import PokemonName from "./PokemonName";
import PokemonImage from "./PokemonImage";

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
  opacity: ${(props) => (props.invisible ? 0 : 1)};
`;

const ImageWrapper = styled.View`
  overflow: hidden;
  width: 70%;
  margin-top: 10px;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Pokemon({ item, searchChars }) {
  const { sprite, color, name, id, evolution_chain } = item;
  const navigation = useNavigation();
  return (
    <TouchableWrapper
      disabled={name === "hidden"}
      invisible={name === "hidden"}
      onPress={() =>
        navigation.navigate("PokemonDetail", {
          id,
          evolution_chain
        })
      }
    >
      <ImageWrapper>
        <PokemonImage uri={sprite} size="100%" />
      </ImageWrapper>
      <PokemonName name={name} searchChars={searchChars} />
      <View
        style={{
          backgroundColor: color,
          height: 12,
          width: 100,
        }}
      ></View>
    </TouchableWrapper>
  );
}

export const PokemonCard = React.memo(Pokemon);
