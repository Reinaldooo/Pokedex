import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
//
import { capitalize, percent, generateEvolutionChain } from "../utils";
import ProgressBar from "../components/ProgressBar";
import Loading from "../components/Loading";
import ChainView from "../components/ChainView";
import PokemonImage from "../components/PokemonImage";

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

const Stats = styled.View`
  width: 90%;
  margin-bottom: 15px;
`;

const Evolutions = styled.View`
  width: 90%;
  margin-bottom: 15px;
  align-items: center;
`;

const EvolutionsLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: rgb(72, 72, 74);
  margin: 10px 0;
`;

export default PokemonDetail = ({ route, navigation }) => {
  const [details, setDetails] = useState({});
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
      .catch((e) => {
        setError(true);
      })
      .then((pokemon) => {
        fetch(`https://pokeapi.co/api/v2/evolution-chain/${evolution_chain}`)
          .then(async (data) => await data.json())
          .then((data) => {
            if (data) {
              let { chain } = data;
              chain = generateEvolutionChain(chain);
              setDetails({
                ...pokemon,
                chain,
              });
            }
          })
          .catch((e) => {
            setError(true);
          });
      });
  };

  useEffect(() => {
    fetchDetails(id, evolution_chain);
  }, [id]);

  const scrollRef = useRef()

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
        {details.stats ? (
          <>
            <Stats>
              {details.stats.map((item, index) => (
                <View key={index} style={{ paddingVertical: 5 }}>
                  <Text style={{ marginBottom: 5, fontSize: 14 }}>
                    {capitalize(item.stat.name)}
                  </Text>
                  <ProgressBar
                    width={percent(item.base_stat)}
                    color={color === "white" ? "gray" : color}
                  />
                </View>
              ))}
            </Stats>
            <EvolutionsLabel>Evolutions</EvolutionsLabel>
            <Evolutions>
              {details.chain ? (
                details.chain.map((chain, index) => (
                  <ChainView
                    navigation={navigation}
                    key={index}
                    data={chain}
                    sprite={sprite}
                    color={color}
                    scrollRef={scrollRef}
                  />
                ))
              ) : (
                <Description>This pokémon has no evolutions.</Description>
              )}
            </Evolutions>
          </>
        ) : (
          <Loading />
        )}
      </Card>
    </Container>
  );
};
