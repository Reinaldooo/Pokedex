import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyPokemon from "../screens/MyPokemon";
import PokemonDetail from "../screens/PokemonDetail";

const Stack = createStackNavigator();

export default function MyPokemons({ navigation }) {
  React.useEffect(() => {
    // This makes sure that everytime the tab button is pressed,
    // navigation goes to the main stack component
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      e.preventDefault();
      navigation.navigate("My-Pokémons", { screen: "My Pokémon" });
    });
    return unsubscribe;
  }, [navigation]);
  //
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
