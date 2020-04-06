import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
//
import { capitalize } from "../utils";

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

const Types = styled.View`
  height: 50px;
  width: 60%;
  margin-bottom: 10px;
  /* background-color: red; */
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Type = styled.View`
  height: 30px;
  padding: 5px 10px;
  border: 2px solid ${props => props.color};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  /* background-color: blue; */
`;

const TypeLabel = styled.Text`
  text-transform: uppercase;
  color: ${props => props.color};
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
  const { id, name, sprite, desc, types } = route.params.item;
  return (
    <Container>
      <Card>
        <PokemonImage
          source={{
            uri: sprite,
            cache: "only-if-cached",
          }}
        />
        <Types>
          {types.map((t) => (
            <Type key={t.slot} color="gray">
              <TypeLabel color="gray">{t.type.name}</TypeLabel>
            </Type>
          ))}
        </Types>
        <Name>{capitalize(name)}</Name>
        <Description>{desc}</Description>
      </Card>
    </Container>
  );
};
