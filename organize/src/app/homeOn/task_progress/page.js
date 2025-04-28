import { Plus } from "lucide-react";

export const metadata = {
  title: "Tarefas em Andamento",
  description: "OrgaNize - Veja todas suas tarefas em execução!",
};

// Mock de tarefas (no futuro pode vir de uma API)
const tasks = [
  {
    id: 1,
    name: "Criar página de login",
    description: "Desenvolver o front-end da página de login.",
    responsible: "Maria Silva",
    dueDate: "2025-05-01",
    status: "Em andamento",
  },
  {
    id: 2,
    name: "Modelar banco de dados",
    description: "Estruturar tabelas e relacionamentos.",
    responsible: "João Souza",
    dueDate: "2025-05-03",
    status: "Em andamento",
  },
  {
    id: 3,
    name: "Criar integração com API",
    description: "Conectar o front-end com a API de usuários.",
    responsible: "Ana Pereira",
    dueDate: "2025-05-05",
    status: "Em andamento",
  },
];

export default function TaskList() {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col p-10">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Tarefas em Execução</h1>
        <Plus color="white" size={60} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gradient-to-r from-white to-gray-300 text-black rounded-xl shadow-lg p-6 flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold">{task.name}</h2>
            <p className="text-gray-700">{task.description}</p>
            <div className="flex flex-col gap-1 text-sm text-gray-600">
              <span><strong>Responsável:</strong> {task.responsible}</span>
              <span><strong>Data de Entrega:</strong> {task.dueDate}</span>
              <span><strong>Status:</strong> {task.status}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
