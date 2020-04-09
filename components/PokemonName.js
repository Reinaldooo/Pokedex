import React from "react";
import { Text } from "react-native";
import Highlighter from 'react-native-highlight-words';
//
import { capitalize } from "../utils";

export default function PokemonName ({ name, searchChars }) {
  name = capitalize(name)
  if (name.length > 10) {
    name = name.substring(0,10) + "..."
  }
  return searchChars ? (
    <Text style={{ color: "rgb(142,142,147)", marginBottom: 10 }}>      
    <Highlighter
      highlightStyle={{
      textDecorationLine: "underline",
      textDecorationColor: "red",
      textDecorationStyle: "double"
    }}
      searchWords={[searchChars]}
      textToHighlight={name}
    />
    </Text>
  ) : (
    <Text style={{ color: "rgb(142,142,147)", marginBottom: 10 }}>
      {name}
    </Text>
  );
};
