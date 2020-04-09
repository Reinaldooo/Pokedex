import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./Main";
import PokemonDetail from "./PokemonDetail";

const Stack = createStackNavigator();

export default function Search() {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{
          headerTitle: "Details",
        }}
      />
    </Stack.Navigator>
  );
}
