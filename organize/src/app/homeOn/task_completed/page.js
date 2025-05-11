"use client";

import { useState } from "react";

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

  const openModal = (tarefa) => setModalData(tarefa);
  const closeModal = () => setModalData(null);

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <div className="bg-yellow-400 text-gray-900 font-bold text-center py-4 rounded-lg mb-6 text-xl">
          ✅ Tarefas Concluídas
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {tarefasConcluidas.map((tarefa, index) => (
            <div
              key={index}
              onClick={() => openModal(tarefa)}
              className="bg-gray-700 p-4 rounded-lg shadow cursor-pointer hover:bg-gray-600 w-72 transition"
            >
              <div className="font-bold text-lg">{tarefa.titulo}</div>
              <div className="text-sm text-gray-300">{tarefa.descricao}</div>
              <div className="text-xs text-gray-400 mt-2">
                Concluído em: {tarefa.data}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-full max-w-lg relative">
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
              Responsável: <span className="font-medium">{modalData.pessoa}</span>
            </div>
            <div className="text-md mb-2">
              Descrição: {modalData.descricaoCompleta}
            </div>
            <div className="text-md">Data de conclusão: {modalData.data}</div>
          </div>
        </div>
      )}
    </main>
  );
}
