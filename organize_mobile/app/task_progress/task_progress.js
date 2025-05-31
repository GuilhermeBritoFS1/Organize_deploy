import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Picker,
} from "react-native";
import { Stack } from "expo-router";
import axios from "axios";

export default function TaskListScreen() {
  const [tasks, setTasks] = useState([]);
  const [filterDate, setFilterDate] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    const token = await localStorage.getItem("token"); // Troque por SecureStore se necessário
    try {
      const response = await axios.get("https://seu_backend_url/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    } catch (error) {
      Alert.alert("Erro", error.response?.data?.msg || "Erro ao buscar tarefas");
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    const token = await localStorage.getItem("token");
    try {
      await axios.put(
        `https://seu_backend_url/tasks/${taskId}`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks((prev) =>
        prev.map((task) =>
          task._id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch {
      Alert.alert("Erro", "Erro ao atualizar status da tarefa.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja deletar esta tarefa?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Deletar",
          style: "destructive",
          onPress: async () => {
            const token = await localStorage.getItem("token");
            try {
              await axios.delete(`https://seu_backend_url/tasks/${taskId}`, {
                headers: { Authorization: `Bearer ${token}` },
              });
              setTasks((prev) => prev.filter((task) => task._id !== taskId));
            } catch {
              Alert.alert("Erro", "Erro ao deletar tarefa.");
            }
          },
        },
      ]
    );
  };

  const filteredTasks = tasks
    .filter((task) => task.status !== "concluido")
    .filter((task) => {
      if (!filterDate) return true;
      const taskDate = task.dueDate?.slice(0, 10);
      return taskDate >= filterDate;
    })
    .filter((task) => {
      if (!filterPriority) return true;
      return task.priority?.toLowerCase() === filterPriority.toLowerCase();
    });

  return (
    <>
      <Stack.Screen options={{ title: "Tarefas em Execução" }} />
      <View style={styles.container}>
        <Image source={require("../../assets/images/Logo.png")} style={styles.logo} />
        <Text style={styles.title}>Tarefas em Execução</Text>

        {/* Filtros */}
        <View style={styles.filters}>
          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Data de Entrega</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={filterDate}
              onChangeText={setFilterDate}
            />
            {filterDate ? (
              <TouchableOpacity onPress={() => setFilterDate("")}>
                <Text style={styles.clear}>Limpar</Text>
              </TouchableOpacity>
            ) : null}
          </View>

          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Prioridade</Text>
            <TextInput
              style={styles.input}
              placeholder="baixa, media, alta"
              value={filterPriority}
              onChangeText={setFilterPriority}
            />
            {filterPriority ? (
              <TouchableOpacity onPress={() => setFilterPriority("")}>
                <Text style={styles.clear}>Limpar</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>

        {/* Lista de tarefas */}
        {filteredTasks.length === 0 ? (
          <Text style={styles.noTask}>Nenhuma tarefa encontrada.</Text>
        ) : (
          <FlatList
            data={filteredTasks}
            keyExtractor={(item) => item._id}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <View style={styles.taskCard}>
                <Image
                  source={require("../../assets/images/postit2.png")}
                  style={styles.postit}
                />
                <View style={styles.taskContent}>
                  <Text style={styles.taskTitle}>{item.title}</Text>
                  <Text style={styles.taskDescription}>
                    {item.description}
                  </Text>
                  <Text style={styles.taskInfo}>
                    Responsável: {item.taskGroupId}
                  </Text>
                  <Text style={styles.taskInfo}>
                    Entrega:{" "}
                    {item.dueDate
                      ? new Date(item.dueDate).toLocaleDateString("pt-BR")
                      : "-"}
                  </Text>
                  <Text style={styles.taskInfo}>
                    Prioridade: {item.priority || "Não definida"}
                  </Text>

                  <View style={styles.statusRow}>
                    <Text>Status: </Text>
                    <Picker
                      selectedValue={item.status}
                      style={styles.picker}
                      onValueChange={(value) =>
                        handleStatusChange(item._id, value)
                      }
                    >
                      <Picker.Item label="Pendente" value="pendente" />
                      <Picker.Item label="Andamento" value="andamento" />
                      <Picker.Item label="Concluído" value="concluido" />
                    </Picker>
                  </View>

                  <TouchableOpacity
                    onPress={() => handleDeleteTask(item._id)}
                    style={styles.deleteButton}
                  >
                    <Text style={styles.deleteText}>Deletar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef3c7", // cor semelhante ao bg-amber-100
    alignItems: "center",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#475569",
    marginVertical: 10,
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  filterItem: {
    alignItems: "center",
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f59e0b",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 6,
    minWidth: 100,
    textAlign: "center",
  },
  clear: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
  },
  noTask: {
    marginTop: 50,
    color: "#9ca3af",
    fontSize: 16,
  },
  taskCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 8,
    overflow: "hidden",
    width: "45%",
    elevation: 3,
  },
  postit: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  taskContent: {
    padding: 8,
    alignItems: "center",
  },
  taskTitle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 4,
  },
  taskDescription: {
    fontSize: 12,
    color: "#4b5563",
    textAlign: "center",
    marginBottom: 4,
  },
  taskInfo: {
    fontSize: 10,
    color: "#334155",
    textAlign: "center",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  picker: {
    height: 30,
    width: 120,
  },
  deleteButton: {
    backgroundColor: "#ef4444",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 6,
  },
  deleteText: {
    color: "white",
    fontSize: 12,
  },
});
