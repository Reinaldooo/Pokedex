import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
//
import { dbHelper } from "../utils";
import PokemonImage from "./PokemonImage";

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function ChainView ({
  data,
  color,
  navigation,
  scrollRef,
}) {
  let size = data.length === 3 ? "100px" : "120px";
  return (
    <Container>
      {data.map((name, i) => {
        // dbHelper its just an array containing id, name and evolution_chain to
        // speed up the process of finding the pokemons
        let { id, evolution_chain } = dbHelper.find((p) => p.name === name);
        let sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return (
          <React.Fragment key={i}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PokemonDetail", {
                  id,
                  evolution_chain
                });
                scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
              }}
            >
              <PokemonImage border size={size} uri={sprite} />
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
