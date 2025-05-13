"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const tarefasConcluidas = [
  {
    titulo: "Erro ao gerar relatório",
    descricao: "Criar filtros",
    pessoa: "João Vitor",
    area: "Desenvolvimento",
    descricaoCompleta:
      "Erro ocorrendo a não realização dos filtros para exportar o relatório de faturamento.",
    data: "07/05/2025",
  },
  {
    titulo: "Finalizar relatório",
    descricao: "Enviado para o gerente",
    pessoa: "Julia",
    area: "Relatórios",
    descricaoCompleta:
      "Relatório finalizado e enviado ao gerente, com todas as métricas atualizadas e gráficas.",
    data: "28/02/2025",
  },
  {
    titulo: "Atualizar documentação",
    descricao: "Cliente Heinz",
    pessoa: "Carlos Eduardo",
    area: "Documentação",
    descricaoCompleta:
      "A documentação foi atualizada para refletir os novos endpoints da API, com exemplos e descrições detalhadas.",
    data: "01/04/2025",
  },
  {
    titulo: "Treinamento Presencial",
    descricao: "Cliente IFOOD- Unidade São Caetano",
    pessoa: "Lucas",
    area: "Backend",
    descricaoCompleta:
      "Agendar treinamento para o dia 02/02 na unidade São Caetano para 200 pessoas.",
    data: "07/05/2025",
  },
];

export default function TaskCompleted() {
  const [modalData, setModalData] = useState(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const openModal = (tarefa) => setModalData(tarefa);
  const closeModal = () => setModalData(null);

  // UseEffect to ensure that the theme has been mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main
      className={`sm:ml-14 p-4 flex items-center justify-center min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-600"
          : "bg-amber-100 text-black"
      }`}
    >
      <div className="flex flex-col items-center text-center w-full max-w-6xl p-4">
        <img src="/logo.png" alt="Logo" className="mb-4 w-32 sm:w-40 h-auto" />
        <h1 className="text-3xl sm:text-5xl font-bold mb-6  text-slate-500">
          Tarefas Concluídas
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {tarefasConcluidas.map((tarefa, index) => (
            <div
              key={index}
              onClick={() => openModal(tarefa)}
              className="relative w-full aspect-square flex items-center justify-center cursor-pointer"
            >
              <div className="relative w-full h-full">
                <img
                  src="/postit2.png"
                  alt="Post-it"
                  className="w-full h-full object-cover shadow-lg rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                  <h2 className="text-lg font-bold text-center">
                    {tarefa.titulo}
                  </h2>
                  <p className="text-sm mt-1">{tarefa.descricao}</p>
                  <div className="text-xs mt-2 space-y-1">
                    <p>
                      <strong>Responsável:</strong> {tarefa.pessoa}
                    </p>
                    <p>
                      <strong>Área:</strong> {tarefa.area}
                    </p>
                    <p>
                      <strong>Data:</strong> {tarefa.data}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-full max-w-lg max-h-screen overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-400 hover:text-white"
            >
              &times;
            </button>
            <div className="text-2xl text-yellow-400 font-bold mb-2">
              {modalData.titulo}
            </div>
            <div className="text-md mb-2">{modalData.descricao}</div>
            <div className="text-md mb-2">
              <strong>Responsável:</strong> {modalData.pessoa}
            </div>
            <div className="text-md mb-2">
              <strong>Área:</strong> {modalData.area}
            </div>
            <div className="text-md mb-2">
              <strong>Descrição:</strong> {modalData.descricaoCompleta}
            </div>
            <div className="text-md">
              <strong>Data de conclusão:</strong> {modalData.data}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
