import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
} from "react-native";
//
import { PokemonCard } from "./PokemonCard";
import NoItemsOnList from "./NoItemsOnList";

export default function MyPokemonList({
  items,
  flatRef
}) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatRef}
        data={items}
        numColumns={3}
        contentContainerStyle={{ paddingBottom: 100 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <PokemonCard
            item={item}
          />
        )}
        ListEmptyComponent={NoItemsOnList}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    alignItems: "center",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "lightcoral",
    borderRadius: 25,
    bottom: "15%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 5,
  },
});
