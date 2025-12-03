import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Servicos from "./src/screens/Servicos";
import Conta from "./src/screens/Conta";
import Cadastro from "./src/screens/Cadastro";

export type RootStackParamList = {
  Home: undefined;
  Servicos: undefined;
  Conta: undefined;
  Cadastro: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Servicos" component={Servicos} />
        <Stack.Screen name="Conta" component={Conta} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
