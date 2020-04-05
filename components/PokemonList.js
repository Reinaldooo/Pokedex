import React from "react";
import { FlatList } from "react-native";
//
import { PokemonCard } from './PokemonCard'

export default function PokemonList({ items, navigation, searchChars }) {
  return (
    <FlatList
      data={items} // 50 temp pokemon
      numColumns={3}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      renderItem={({ item }) => (
        <PokemonCard item={item} navigation={navigation} searchChars={searchChars}/>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
