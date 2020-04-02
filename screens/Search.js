import React from "react";
import { Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

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

export default function Search() {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
    </Stack.Navigator>
  );
}
