import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
//
import { PokemonCard } from "./PokemonCard";
import NoItemsOnList from "./NoItemsOnList";

export default function PokemonList({
  items,
  navigation,
  searchChars,
  flatRef,
  loadMore,
  backToTop,
  showBackToTop,
  searching
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
        ListEmptyComponent={<NoItemsOnList searching={searching}/>}
        keyExtractor={(item) => item.id}
      />
      {Platform.OS === "android" && showBackToTop && (
        <TouchableOpacity onPress={() => backToTop()} style={styles.button}>
          <FontAwesome5 name="arrow-circle-up" size={30} color="white" />
        </TouchableOpacity>
      )}
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
