import React from "react";
import { FlatList } from "react-native";
//
import { PokemonCard } from './PokemonCard'

export default function PokemonList({ items, navigation, searchChars, flatRef }) {
  return (
    <FlatList
      ref={flatRef}
      data={items}
      numColumns={3}
      contentContainerStyle={{ paddingBottom: 150 }}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      renderItem={({ item }) => (
        <PokemonCard item={item} navigation={navigation} searchChars={searchChars}/>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
