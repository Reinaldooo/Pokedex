import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/native";
//
import { capitalize, generateEvolutionChain } from "../utils";
import PokemonImage from "../components/PokemonImage";
import Stats from "../components/Stats";
import EvolutionChain from "../components/EvolutionChain";

const Container = styled.ScrollView`
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

export default PokemonDetail = ({ route, navigation }) => {
  const [details, setDetails] = useState({});
  const [fetchOk, setFetchOk] = useState(false);
  const [error, setError] = useState(false);

  const {
    id,
    evolution_chain,
    name,
    sprite,
    desc,
    types,
    color,
  } = route.params.item;

  useEffect(() => {
    setFetchOk(false);
    let isMounted = true;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((data) => data.json())
      .then(({ stats, weight, height }) => {
        return {
          stats,
          height,
          weight,
        };
      })
      .catch(() => {
        return "Error";
      })
      .then((pokemon) => {
        fetch(`https://pokeapi.co/api/v2/evolution-chain/${evolution_chain}`)
          .then((data) => data.json())
          .then((data) => {
            if (data) {
              let { chain } = data;
              chain = generateEvolutionChain(chain);
              if (isMounted) {
                setDetails({
                  ...pokemon,
                  chain,
                });
                setFetchOk(true);
              }
            }
          })
          .catch((e) => {
            return "Error";
          });
      });
      return () => (isMounted = false)
  }, [id]);

  const scrollRef = useRef();

  return (
    <Container ref={scrollRef}>
      <Card>
        <PokemonImage size={"150px"} uri={sprite} />
        <Name>{capitalize(name)}</Name>
        <Types>
          {types.map((type) => (
            <Type key={type.slot} color="rgb(72, 72, 74)">
              <TypeLabel color="rgb(72, 72, 74)">{type.type.name}</TypeLabel>
            </Type>
          ))}
        </Types>
        <Description>{desc}</Description>
        <Stats details={details} color={color} fetchOk={fetchOk} />
        <EvolutionChain
          details={details}
          navigation={navigation}
          sprite={sprite}
          color={color}
          scrollRef={scrollRef}
        />
      </Card>
    </Container>
  );
};
