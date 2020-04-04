import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
//
import { capitalize } from "../utils"

const Container = styled.View`
  background-color: "rgb(229,229,234)";
  height: 100%;
`;

const Card = styled.View`
  background-color: white;
  margin: 30px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Description = styled.Text`
  font-size: 14px;
  text-align: justify;
  line-height: 22px;
  margin: 10px 20px;
`;

const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const PokemonImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export default PokemonDetail = ({ route }) => {
  const { id, name, sprite, desc } = route.params.item
  return (
    <Container>
      <Card>
        <PokemonImage
          source={{
            uri: sprite,
            cache: "only-if-cached",
          }}
        />
        <Name>
          {capitalize(name)}
        </Name>
        <Description>
          {desc}
        </Description>
      </Card>
    </Container>
  );
};
