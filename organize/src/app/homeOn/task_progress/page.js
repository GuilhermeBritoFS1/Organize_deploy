export const metadata = {
  title: "Tarefas em Andamento",
  description: "OrgaNize - Veja todas suas tarefas em execução!",
};

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

  {
    id: 4,
    name: "Implementar autenticação",
    description: "Adicionar login e logout com validação JWT.",
    responsible: "Carlos Souza",
    dueDate: "2025-05-12",
    status: "Pendente",
  },
  {
    id: 5,
    name: "Criar layout da dashboard",
    description:
      "Desenvolver o layout inicial da dashboard com dados mockados.",
    responsible: "Marina Lima",
    dueDate: "2025-05-15",
    status: "Em andamento",
  },
  {
    id: 6,
    name: "Testar fluxo de cadastro",
    description:
      "Garantir que o processo de registro de novos usuários esteja funcional.",
    responsible: "João Mendes",
    dueDate: "2025-05-13",
    status: "Concluído",
  },
  {
    id: 7,
    name: "Ajustar responsividade do site",
    description: "Corrigir problemas de layout em telas menores.",
    responsible: "Luciana Alves",
    dueDate: "2025-05-14",
    status: "Pendente",
  },
  {
    id: 8,
    name: "Integrar sistema de notificações",
    description: "Adicionar suporte a alertas no sistema usando toasts.",
    responsible: "Rafael Costa",
    dueDate: "2025-05-16",
    status: "Em andamento",
  },
];

export default function TaskList() {
  return (
    <main className="sm:ml-14 p-4 flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center text-center w-full max-w-6xl p-4">
        <img src="/logo.png" alt="Logo" className="mb-4 w-32 sm:w-40 h-auto" />
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">
          Tarefas em Execução
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="relative w-full aspect-square flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <img
                  src="/postit2.png"
                  alt="Post-it"
                  className="w-full h-full object-cover shadow-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-gray-900">
                  <h2 className="text-lg font-bold text-center">{task.name}</h2>
                  <p className="text-sm mt-1">{task.description}</p>
                  <div className="text-xs mt-2 space-y-1">
                    <p>
                      <strong>Responsável:</strong> {task.responsible}
                    </p>
                    <p>
                      <strong>Entrega:</strong> {task.dueDate}
                    </p>
                    <p>
                      <strong>Status:</strong> {task.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
