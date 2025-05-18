import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function Task_assignmentScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Atribuir Tarefas" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Atribuição de Tarefas</Text>
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
