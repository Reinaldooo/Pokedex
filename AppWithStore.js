import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
//
import { showPokemons } from "./store/actions"
import dbSetupHelper from "./utils";
import { executeSql } from "./dbUtils";
import AllPokemon from "./tabs/AllPokemon";
import MyPokemons from "./tabs/MyPokemons";

const Tab = createBottomTabNavigator();

export default function AppWithStore() {
  // This separate App had to be used, because App.js 
  // don't have access to the redux props since himself
  // are creating the store

  const dispatch = useDispatch()

  React.useEffect(() => {
    executeSql(
      "create table if not exists pokemon (id integer not null, " +
        "name text, types text, sprite text, color text, desc text, " +
        "evolution_chain text, owned int);"
    ).then(() => {
      executeSql(`select * from pokemon;`).then((res) => {
        if (res.length === 0) {
          dbSetupHelper.forEach((item) => {
            executeSql(
              "insert into pokemon (id, name, types, sprite, color, desc, " +
                "evolution_chain, owned) values (?, ?, ?, ?, ?, ?, ?, ?)",
              [
                item.id,
                item.name,
                JSON.stringify(item.types),
                item.sprite,
                item.color,
                item.desc,
                item.evolution_chain,
                item.owned,
              ]
            );
          });
        }
      });
    }).then(() => {
      executeSql(`select * from pokemon limit 102;`).then((response) =>
        dispatch(showPokemons(response))
      );
    })
  }, []);

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                route.name === "Main"
                  ? (iconName = "search")
                  : (iconName = "pets");
                return (
                  <MaterialIcons name={iconName} size={size} color={color} />
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: "lightcoral",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Main" component={AllPokemon} />
            <Tab.Screen name="My-Pokémons" component={MyPokemons} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}
