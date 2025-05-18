import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function TeamsScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Equipes" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Equipes</Text>
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
