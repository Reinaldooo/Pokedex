import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyPokemon from "../screens/MyPokemon";
import PokemonDetail from "../screens/PokemonDetail";

const Stack = createStackNavigator();

export default function MyPokemons() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Pokémon"
        component={MyPokemon}
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
