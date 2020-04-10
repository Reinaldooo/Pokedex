import React from "react";
import { FlatList } from "react-native";
//
import { PokemonCard } from './PokemonCard'
import NoItemsOnList from "./NoItemsOnList"

export default function PokemonList({ items, navigation, searchChars, flatRef, layoutFix }) {
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
      ListEmptyComponent={NoItemsOnList}
      keyExtractor={(item) => item.id}
    />
  );
}
