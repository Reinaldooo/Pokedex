import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../screens/Main";
import PokemonDetail from "../screens/PokemonDetail";

const Stack = createStackNavigator();

export default function AllPokemon({ navigation }) {
  return (
    <Stack.Navigator>
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
