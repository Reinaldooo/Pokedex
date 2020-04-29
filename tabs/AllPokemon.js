import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../screens/Main";
import PokemonDetail from "../screens/PokemonDetail";

const Stack = createStackNavigator();

export default function AllPokemon({ navigation }) {
  React.useEffect(() => {
    // This makes sure that everytime the tab button is pressed,
    // navigation goes to the main stack component
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      e.preventDefault();
      navigation.navigate("Main", { screen: "Main" });
    });
    return unsubscribe;
  }, [navigation]);
  //
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
