import { View, StyleSheet } from "react-native";
import { Text, Stack } from "expo-router";

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Login" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Login</Text>
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

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
