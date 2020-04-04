import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styled from "styled-components";
//
import PokemonName from "./PokemonName"

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

export default function PokemonList({ items, navigation, searchChars }) {
  return (
    <FlatList
      data={items} // 50 temp pokemon
      numColumns={3}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      renderItem={({ item }) => (
        <TouchableWrapper onPress={() => navigation.navigate("PokemonDetail")}>
          <ImageWrapper>
            <Image
              fadeDuration={300}
              source={{
                uri: item.sprite,
                // TODO
                // Choose cache mode
                cache: "force-cache"
              }}
              style={{ width: "100%", height: "100%" }}
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
      keyExtractor={(item) => item.id}
    />
  );
}
