import React, { useEffect } from "react";
import { Button, View, AsyncStorage } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";

import Main from "./Main";

function PokemonDetail({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

// const saveExample = async () => {
//   axios.get("https://pokeapi.co/api/v2/pokemon/1")
//     .then(async ({ data }) => {
//       await AsyncStorage.setItem("bulbasaur", JSON.stringify(data));
//     })
// }

// saveExample()

export default function Search() {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
    </Stack.Navigator>
  );
}
