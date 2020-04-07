import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Text, View, ActivityIndicator } from "react-native";
//
import { capitalize, percent } from "../utils";
import ProgressBar from "../components/ProgressBar"

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

const PokemonImage = styled.Image`
  margin-top: 15px;
  width: 150px;
  height: 150px;
`;

const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: rgb(72, 72, 74);
  margin-bottom: 10px;
`;

const Types = styled.View`
  height: 50px;
  width: 60%;
  /* background-color: red; */
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Type = styled.View`
  height: 30px;
  padding: 5px 10px;
  border: 2px solid ${(props) => props.color};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  /* background-color: blue; */
`;

const TypeLabel = styled.Text`
  text-transform: uppercase;
  color: ${(props) => props.color};
`;

const Description = styled.Text`
  font-size: 14px;
  text-align: justify;
  line-height: 22px;
  margin: 10px 20px;
  color: rgb(72, 72, 74);
`;

const Stats = styled.View`
  margin-top: 15px;
  width: 90%;
`;

export default PokemonDetail = ({ route }) => {
  const [details, setDetails] = useState({})
  const [error, setError] = useState(false)

  const { id, evolution_chain, name, sprite, desc, types, color } = route.params.item;
  
  const fetchDetails = (id, evolution_chain) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(async (data) => await data.json())
      .then(({ stats, weight, height }) => {
        return {
          stats,
          height,
          weight,
        };
      })
      .then((pokemon) => {
        fetch(`https://pokeapi.co/api/v2/evolution-chain/${evolution_chain}`)
          .then(async (data) => await data.json())
          .then((data) => {
            if (data) {
              let { chain } = data;
              setDetails({
                ...pokemon,
                chain,
              });
            }
          })
          .catch((e) => {
            setError(true)
          });
      });
  };

  useEffect(() => {
    fetchDetails(id, evolution_chain)
  }, [])

  return (
    <Container>
      <Card>
        <PokemonImage
          source={{
            uri: sprite,
            cache: "only-if-cached",
          }}
        />
        <Name>{capitalize(name)}</Name>
        <Types>
          {types.map((t) => (
            <Type key={t.slot} color="rgb(72, 72, 74)">
              <TypeLabel color="rgb(72, 72, 74)">{t.type.name}</TypeLabel>
            </Type>
          ))}
        </Types>
        <Description>{desc}</Description>
        {
          details.stats ?
          <Stats>
          {
            details.stats.map((item, index) => (
              <View key={index} style={{ paddingVertical: 5 }}>
                <Text style={{ marginBottom: 5, fontSize: 14 }}>{capitalize(item.stat.name)}</Text>
                <ProgressBar width={percent(item.base_stat)} color="lightcoral"/>
              </View>
            ))
          }
          </Stats>
          :
          <ActivityIndicator size="large"/>
        }
      </Card>
    </Container>
  );
};
