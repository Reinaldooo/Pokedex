import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
//
import { dbSetupHelper } from "../utils";
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
        // dbSetupHelper its used here because the values below are immutable,
        // so there is no need to query the db, and this will save time
        let { id, evolution_chain, sprite } = dbSetupHelper.find((p) => p.name === name);
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
