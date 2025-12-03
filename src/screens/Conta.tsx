import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Conta: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Conta">;

export default function Conta({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela da Conta</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 20 },
});
