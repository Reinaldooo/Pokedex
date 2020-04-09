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

const EvolutionChain = ({ details, navigation, sprite, color, scrollRef }) => {
  // Only show up if there is a chain
  return details.chain ? (
    <>
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
  ) : null;
};

export default EvolutionChain;
