import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Search from "./screens/Search";
import MyPokemon from "./screens/MyPokemon";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Search") {
              iconName = focused ? "search" : "search";
            } else if (route.name === "My Pokémon") {
              iconName = focused ? "pets" : "pets";
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: "lightcoral",
          inactiveTintColor: "gray"
        }}
      >
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="My Pokémon" component={MyPokemon} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
