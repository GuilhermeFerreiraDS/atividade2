import React from "react";
import styles from "./HomeStyle";
import { View, Text, TouchableOpacity, Image, StyleSheet} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Servicos: undefined;
  Conta: undefined;
  Cadastro: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.cardLogo}>
        <Image
          source={require("../../assets/bank.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Servicos")}
      >
        <Text style={styles.buttonText}>Serviços</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Conta")}
      >
        <Text style={styles.buttonText}>Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.link}>Ainda não tem conta?</Text>
      </TouchableOpacity>
    </View>
  );
}


