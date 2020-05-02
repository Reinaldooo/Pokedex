import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
} from "react-native";
//
import { PokemonCard } from "./PokemonCard";
import NoItemsOnList from "./NoItemsOnList";

export default function PokemonList({
  items,
  searchChars,
  flatRef,
  handleLoadMore,
  searching
}) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatRef}
        data={items}
        onEndReached={handleLoadMore}
        numColumns={3}
        contentContainerStyle={{ paddingBottom: 100 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <PokemonCard
            item={item}
            searchChars={searchChars}
          />
        )}
        ListEmptyComponent={<NoItemsOnList searching={searching}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}