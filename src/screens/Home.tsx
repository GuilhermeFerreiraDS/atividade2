import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  cardLogo: {
    width: 200,
    height: 180,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 130,
    height: 130,
  },
  button: {
    backgroundColor: "#3d3534",
    width: 220,
    paddingVertical: 12,
    borderRadius: 6,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  link: {
    marginTop: 10,
    color: "#333",
  },
});
