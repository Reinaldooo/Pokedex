import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styled from "styled-components";
//
// import bulbasaur from "../assets/1.png";
import { db } from "../utils";

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

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
  return (
    <View
      style={{
        // width: "100%",
        // flexDirection: "row",
        // flexWrap: "wrap",
        // justifyContent: "space-between",
        backgroundColor: "rgb(229,229,234)"
        // height: "100%"
      }}
    >
      <FlatList
        data={db.slice(0, 51)} // 50 temp pokemon
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        renderItem={({ item, index }) => (
          <TouchableWrapper
            onPress={() => navigation.navigate("PokemonDetail")}
          >
            <ImageWrapper>
              <Image
                fadeDuration={300}
                source={{
                  uri: item.sprite,
                  // TODO
                  // Choose cache mode
                  cache: "only-if-cached"
                }}
                style={{ width: "100%", height: "100%" }}
              />
            </ImageWrapper>
            <Text style={{ color: "rgb(142,142,147)", marginBottom: 10 }}>
              {capitalize(item.name)}
            </Text>
            <View
              style={{
                backgroundColor: item.color.name,
                height: 12,
                width: 100
              }}
            ></View>
          </TouchableWrapper>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
