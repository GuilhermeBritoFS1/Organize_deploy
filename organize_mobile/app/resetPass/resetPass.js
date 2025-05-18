import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import axios from "axios";

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const accessLogin = async () => {
    router.push("/login/login");
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        "https://seu-backend.com/user/reset-password",
        { email }
      );

      if (response.status === 200) {
        Alert.alert("Sucesso", "Instruções enviadas para seu email.");
        router.push("/login");
      } else {
        Alert.alert("Erro", "Não foi possível enviar o email.");
      }
    } catch (error) {
      console.error("Erro:", error);
      Alert.alert("Erro", "Falha ao solicitar redefinição de senha.");
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: "Redefinir Senha" }} />
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Redefinir Senha</Text>
        <Text style={styles.subtitle}>
          Insira seu e-mail para receber instruções
        </Text>

        <ImageBackground
          source={require("../../assets/images/postit2.png")}
          style={styles.card}
          imageStyle={styles.cardImage}
        >
          <View style={styles.cardContent}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              placeholderTextColor="#ddd"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleResetPassword}
            >
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={accessLogin}>
              <Text style={styles.link}>Voltar para o login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8dc",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#64748b",
  },
  subtitle: {
    fontSize: 18,
    color: "#64748b",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    width: "100%",
    maxWidth: 380,
    aspectRatio: 360 / 360,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  cardImage: {
    resizeMode: "stretch",
    borderRadius: 16,
  },
  cardContent: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 34,
    justifyContent: "flex-start",
  },
  label: {
    color: "#000",
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#2d2d2d",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#ffbf00",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#1d4ed8",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 12,
    textAlign: "center",
  },
});
