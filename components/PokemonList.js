import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//
import { PokemonCard } from "./PokemonCard";
import NoItemsOnList from "./NoItemsOnList";
import { reset } from "expo/build/AR";

export default function PokemonList({
  items,
  navigation,
  searchChars,
  flatRef,
  loadMore,
  reset,
  dbOffset
}) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatRef}
        data={items}
        onEndReached={loadMore}
        numColumns={3}
        contentContainerStyle={{ paddingBottom: 100 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <PokemonCard
            item={item}
            navigation={navigation}
            searchChars={searchChars}
          />
        )}
        ListEmptyComponent={NoItemsOnList}
        keyExtractor={(item) => item.id}
      />
      {dbOffset > 300 &&
      <TouchableOpacity onPress={() => reset()} style={styles.fab}>
        <MaterialCommunityIcons
          name="restart"
          size={40}
          color="white"
          style={{ marginTop: 5 }}
        />
      </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "lightcoral",
    borderRadius: 35,
    bottom: "8%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: .25,
    shadowRadius: 10,
    
    elevation: 5,
  },
});
