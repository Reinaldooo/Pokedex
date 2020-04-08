import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
//
import { allPokemon } from "../utils";
import PokemonImage from "./PokemonImage";

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default ChainView = ({
  data,
  color,
  navigation,
  scrollRef,
}) => {
  let size = data.length === 3 ? "100px" : "120px";
  return (
    <Container>
      {data.map((name, i) => {
        let item = allPokemon.find((p) => p.name === name);
        return (
          <React.Fragment key={i}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PokemonDetail", {
                  item,
                });
                scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
              }}
            >
              <PokemonImage border size={size} uri={item.sprite} />
            </TouchableOpacity>
            {i !== data.length - 1 && (
              <AntDesign
                name="rightcircleo"
                size={18}
                color={color === "white" ? "gray" : color}
              />
            )}
          </React.Fragment>
        );
      })}
    </Container>
  );
};
