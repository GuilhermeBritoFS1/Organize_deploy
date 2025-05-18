import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function Team_registrationScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Cadastro de Equipe" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Cadastro de Equipe</Text>
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
