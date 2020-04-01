import React, { useEffect, useState } from "react";
import { Button, View, Text, AsyncStorage, Image, FlatList, StyleSheet } from "react-native";
import bulbasaur from "../assets/1.png";
import styled from "styled-components";
import { TouchableHighlight } from "react-native-gesture-handler";

const helperArray = Array(21).fill(false);

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
  margin-top: 20px;
  height: 110px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Main({ navigation }) {
  const [pokemon, setPokemon] = useState({});
  const getPokemon = async () => {
    let bulbasaur = JSON.parse(await AsyncStorage.getItem("bulbasaur"));
    setPokemon(bulbasaur);
  };
  useEffect(() => {
    getPokemon();
  }, []);

  {
    /* <Image
  fadeDuration={0}
  source={{
    uri: pokemon.sprites.front_default,
  }}
  style={{ height:"30%", width:"30%" }}/> */
  }

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: "rgb(229,229,234)",
        height: "100%"
      }}
    >
      {/* {console.log(pokemon.sprites.front_default)} */}
      <FlatList
        data={helperArray}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        renderItem={({ item, index }) => (
          <TouchableWrapper
            onPress={() => navigation.navigate("PokemonDetail")}
          >
            <ImageWrapper>
              <Image
              fadeDuration={300}
              source={bulbasaur}
              style={{ width: "230%", height: "230%" }}
              />
            </ImageWrapper>
            <Text style={{ color: "rgb(142,142,147)" , marginBottom: 10 }}>
              Bulbasaur
            </Text>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ backgroundColor: "lightcoral", height: 12, width: 50 }}>                
              </View>
              <View style={{ backgroundColor: "lightblue", height: 12, width: 50 }}>                
              </View>
            </View>
          </TouchableWrapper>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
