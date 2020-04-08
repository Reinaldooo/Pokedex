import React from "react";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'
//
import { allPokemon } from "../utils"
import PokemonImage from "./PokemonImage"

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default ChainView = ({ data, color, current, navigation }) => {
  let size = data.length === 3 ? "100px" : "120px";
  return ( 
    <Container>
      {data.map((item, i) => (
        <React.Fragment key={i}>
        <PokemonImage
        border
        size={size}
        uri={allPokemon.find((p) => p.name === item).sprite}
      />
      { (i !== data.length - 1) && 
        <AntDesign name="rightcircleo" size={18} color={color === "white" ? "gray" : color} />
      }
      </React.Fragment>
      ))}
    </Container>
  );
};
