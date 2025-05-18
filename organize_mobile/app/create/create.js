import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function CreateScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Cadastro" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Cadastro</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
