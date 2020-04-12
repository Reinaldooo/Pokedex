import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/native";
import * as SQLite from "expo-sqlite";
//
import { capitalize, generateEvolutionChain } from "../utils";
import PokemonImage from "../components/PokemonImage";
import Stats from "../components/Stats";
import EvolutionChain from "../components/EvolutionChain";

const db = SQLite.openDatabase("pokemon.db");

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

export default function PokemonDetail ({ route, navigation }) {
  const [localDetails, setLocalDetails] = useState({});
  const [apiDetails, setApiDetails] = useState({});
  const [fetchOk, setFetchOk] = useState(false);
  const [error, setError] = useState(false);
  
  const { id, evolution_chain } = route.params

  useEffect(() => {
    setFetchOk(false);
    db.transaction((tx) => {
      tx.executeSql(
        `select * from pokemon where id = ?;`,
        [id],
        (_, { rows: { _array } }) => {
          _array[0].types = JSON.parse(_array[0].types)
          setLocalDetails(_array[0])
        }
      );
    });
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
                setApiDetails({
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

  const { name, types, sprite, desc, color } = localDetails && localDetails

  return (
    <Container ref={scrollRef}>
      {localDetails.name &&
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
        <Stats apiDetails={apiDetails} color={color} fetchOk={fetchOk} />
        <EvolutionChain
          apiDetails={apiDetails}
          navigation={navigation}
          sprite={sprite}
          color={color}
          scrollRef={scrollRef}
        />
      </Card>
      }
    </Container>
  );
};
