import React from "react";
import styled from "styled-components/native";
//
import ChainView from "./ChainView";

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

const Description = styled.Text`
  font-size: 14px;
  text-align: justify;
  line-height: 22px;
  margin: 10px 20px;
  color: rgb(72, 72, 74);
`;

const EvolutionChain = ({ apiDetails, navigation, sprite, color, scrollRef }) => {
  // Only show up if there is a chain
  return apiDetails.stats ? (
    <>
      <EvolutionsLabel>Evolutions</EvolutionsLabel>
      <Evolutions>
        {apiDetails.chain ? (
          apiDetails.chain.map((chain, index) => (
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
  ) : null;
};

export default EvolutionChain;
