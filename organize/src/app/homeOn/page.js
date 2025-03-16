export const metadata = {
  title: "Página Inicial",
  description: "OrgaNize - Organize seu dia do jeito mais nice!",
};

export default function HomeOn() {
  const apps = [
    { name: "CRIAR TAREFA", icon: "📝", link: "homeOn/task_create" },
    { name: "TAREFAS EM ANDAMENTO", icon: "⏳", link: "homeOn/task_progress" },
    { name: "TAREFAS CONCLUÍDAS", icon: "✅", link: "homeOn/task_completed" },
    {
      name: "CADASTRO DE EQUIPES",
      icon: "👥",
      link: "homeOn/team_registration",
    },
    {
      name: "ATRIBUIÇÃO DE TAREFAS",
      icon: "📋",
      link: "homeOn/task_assignment",
    },
    { name: "RELATÓRIOS", icon: "📊", link: "homeOn/reports" },
    { name: "MEU PERFIL", icon: "👤", link: "homeOn/profile" },
    {
      name: "AJUSTE DE PRIORIDADES",
      icon: "⚖️",
      link: "homeOn/priority_adjustment",
    },
    { name: "CONFIGURAÇÕES", icon: "⚙️", link: "homeOn/settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center">
      <img src="/logo.png" alt="Logo" className="mb-4 w-50 h-auto" />
      <h1 className="text-6xl font-bold mb-4">OrgaNize</h1>
      <p className="text-3xl font-bold mb-4">
        Organize seu dia do jeito mais nice!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl justify-center">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.link}
            className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <img
                src="postit2.png"
                alt="Post-it"
                className="w-full h-full object-cover shadow-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl mb-3 drop-shadow-lg">{app.icon}</span>
                <span className="text-xl font-semibold text-gray-900 drop-shadow-lg">
                  {app.name}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
