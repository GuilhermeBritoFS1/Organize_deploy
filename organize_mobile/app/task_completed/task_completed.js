import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function Task_completedScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Tarefas Concluídas" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Tarefas Concluídas</Text>
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
