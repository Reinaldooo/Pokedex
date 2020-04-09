import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const SearchWrapper = styled.View`
  /* background-color: red; */
  padding: 15px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  flex: 2;
  height: 30px;
  color: lightcoral;
  background-color: rgb(242, 242, 247);
  padding: 5px 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  /* background-color: blue; */
`;

const SearchButton = styled.TouchableOpacity`
  background-color: ${(props) => (props.reset ? "white" : "lightcoral")};
  height: 30px;
  padding: 5px 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResetButton = styled.TouchableOpacity`
  background-color: white;
  height: 30px;
  padding: 5px 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

export default function SearchBar ({ search, reset, searching }) {
  const [query, setQuery] = useState("");

  return (
    <SearchWrapper>
      <SearchInput
        value={query}
        onChangeText={(query) => setQuery(query)}
        placeholder="Search Pokémon..."
        autoCorrect={false}
        autoCapitalize="none"
        onSubmitEditing={() => {
          search(query);
        }}
      />
      <SearchButton
        onPress={() => {
          search(query);
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>GO</Text>
      </SearchButton>
      {searching && (
        <ResetButton
          onPress={() => {
            setQuery("")
            reset();
          }}
        >
          <Text style={{ color: "lightcoral", fontWeight: "bold" }}>Reset</Text>
        </ResetButton>
      )}
    </SearchWrapper>
  );
};
