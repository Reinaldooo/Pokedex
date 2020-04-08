import React from "react";
import styled from "styled-components/native";

const Image = styled.Image`
  margin-top: ${props => props.marginTop ? props.marginTop : 0};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export default function PokemonImage(props) {
  return (
    <Image
      source={{
        uri: props.uri,
        cache: "force-cache",
      }}
      {...props}
    />
  );
}
