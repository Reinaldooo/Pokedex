import React from "react";
import styled from "styled-components/native";

const Description = styled.Text`
  font-size: 14px;
  align-self: center;
  line-height: 22px;
  margin: 10px 20px;
  color: rgb(72, 72, 74);
  text-align: center;
`;

const NoItemsOnList = ({ searching }) => {
  return searching ? (
    <Description>Sorry, no Pokémon found!</Description>
  ) : (
    <Description>You don't have any Pokémon yet, why don't you add one?</Description>
  );
};

export default NoItemsOnList;
