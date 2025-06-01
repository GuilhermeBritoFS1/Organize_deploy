import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// Import padrão das imagens
import Logo from "../../assets/images/Logo.png";
import PostitBg from "../../assets/images/postit2.png";
import { Stack } from "expo-router";

export default function StatisticsScreen() {
  const totalTarefas = 20;
  const tarefasConcluidas = 8;
  const tarefasAndamento = 5;
  const tarefasNaoIniciadas = 7;

  return (
    <>
      <Stack.Screen options={{ title: "Relatório" }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Estatísticas</Text>
        <Text style={styles.subtitle}>
          Visualize o status geral das suas tarefas
        </Text>

        <ImageBackground
          source={PostitBg}
          style={styles.card}
          imageStyle={styles.cardImage}
        >
          <View style={styles.cardContent}>
            <StatBox
              icon="clipboard-list"
              label="Tarefas Criadas"
              value={totalTarefas}
              color="#4B5563"
            />
            <StatBox
              icon="check-circle"
              label="Concluídas"
              value={tarefasConcluidas}
              color="#10B981"
            />
            <StatBox
              icon="spinner"
              label="Em Andamento"
              value={tarefasAndamento}
              color="#F59E0B"
            />
            <StatBox
              icon="pause-circle"
              label="Não Iniciadas"
              value={tarefasNaoIniciadas}
              color="#EF4444"
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
}

function StatBox({ icon, label, value, color }) {
  return (
    <View style={[styles.box, { borderColor: color }]}>
      <FontAwesome5 name={icon} size={20} color={color} />
      <Text style={[styles.boxLabel, { color }]}>{label}</Text>
      <Text style={styles.boxValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff8dc",
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#64748b",
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    maxWidth: 380,
    aspectRatio: 360 / 400,
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    resizeMode: "stretch",
    borderRadius: 16,
  },
  cardContent: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 28,
    justifyContent: "flex-start",
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  boxLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 6,
  },
  boxValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 4,
  },
});
