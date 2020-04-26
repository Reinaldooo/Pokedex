import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import AllPokemon from "./tabs/AllPokemon";
import MyPokemons from "./tabs/MyPokemons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            route.name === "Search"
              ? (iconName = "search")
              : (iconName = "pets");
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "lightcoral",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Search" component={AllPokemon} />
        <Tab.Screen name="My Pokémons" component={MyPokemons} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
