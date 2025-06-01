import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Text as RNText,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg"; // <-- CORRETO para rótulos SVG

// Imagens
import Logo from "../../assets/images/Logo.png";
import PostitBg from "../../assets/images/postit2.png";

export default function StatisticsScreen() {
  const totalTarefas = 20;
  const tarefasConcluidas = 8;
  const tarefasAndamento = 5;
  const tarefasNaoIniciadas = 7;

  const data = [
    totalTarefas,
    tarefasConcluidas,
    tarefasAndamento,
    tarefasNaoIniciadas,
  ];
  const labels = ["Criadas", "Concluídas", "Em Andamento", "Não Iniciadas"];
  const colors = ["#4B5563", "#10B981", "#F59E0B", "#EF4444"];

  const pieData = data.map((value, index) => ({
    value,
    key: `pie-${index}`,
    svg: {
      fill: colors[index],
    },
    arc: { outerRadius: "100%", cornerRadius: 5 },
    label: labels[index],
  }));

  const Label = ({ slices }) =>
    slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <Text
          key={`label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={14}
          fontWeight="bold"
        >
          {data.value}
        </Text>
      );
    });

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <RNText style={styles.title}>Estatísticas</RNText>
        <RNText style={styles.subtitle}>
          Visualize o status geral das suas tarefas
        </RNText>

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
        <View style={styles.chartContainer}>
          <PieChart style={{ height: 200, width: 200 }} data={pieData}>
            <Label />
          </PieChart>
        </View>
      </ScrollView>
    </>
  );
}

function StatBox({ icon, label, value, color }) {
  return (
    <View style={[styles.box, { borderColor: color }]}>
      <FontAwesome5 name={icon} size={20} color={color} />
      <RNText style={[styles.boxLabel, { color }]}>{label}</RNText>
      <RNText style={styles.boxValue}>{value}</RNText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff8dc",
    padding: 20,
    alignItems: "center",
    height: "100%",
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
    aspectRatio: 360 / 500,
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
  chartContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
