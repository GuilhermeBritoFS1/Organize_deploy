import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function Task_createScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Criar Tarefa" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Criar Tarefa</Text>
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
