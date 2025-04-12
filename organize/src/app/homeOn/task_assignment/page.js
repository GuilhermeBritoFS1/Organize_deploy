"use client";

import { useState } from "react";
import SelectMulti, { StylesConfig } from "react-select";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Task_assignment() {
  const tasks = [
    {
      id: 1,
      Título: "Tarefa 1",
      task_Group: "Equipe 1",
      dateDue: "24/06/2025",
      members: ["Guilherme", "Pedro", "Jefferson"],
    },
    {
      id: 2,
      Título: "Tarefa 2",
      task_Group: "Equipe 2",
      dateDue: "30/06/2025",
      members: ["Guilherme", "Pedro", "Jefferson"],
    },
    {
      id: 3,
      Título: "Tarefa 3",
      task_Group: "Equipe 3",
      dateDue: "22/06/2025",
      members: ["Guilherme", "Pedro", "Jefferson"],
    },
    {
      id: 4,
      Título: "Tarefa 4",
      task_Group: "Equipe 4",
      dateDue: "20/06/2025",
      members: ["Guilherme", "Pedro", "Jefferson"],
    },
  ];

  // Alterando para armazenar as seleções de cada tarefa individualmente
  const [selectedOptions, setSelectedOptions] = useState(
    tasks.map(() => []) // Inicializando o estado com uma lista vazia para cada tarefa
  );

  // Função para atualizar as seleções de cada tarefa
  const handleSelectChange = (index, options) => {
    const updatedSelections = [...selectedOptions];
    updatedSelections[index] = options;
    setSelectedOptions(updatedSelections);
  };

  // Estilos personalizados para o react-select
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#ffbf00" : "black", // Altera a cor do texto para 'blue' quando não selecionado, e 'white' quando selecionado
      backgroundColor: state.isSelected ? "#ffbf00" : "transparent", // Altera o fundo das opções selecionadas
      padding: "10px",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent", // Torna o fundo do seletor transparente
      border: "1px solid #ffbf00", // Altere a borda do controle
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#ffbf00", // Cor de fundo para os itens selecionados
      color: "black", // Cor do texto para os itens selecionados
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "black", // Cor do texto dentro do item selecionado
      fontWeight: "bold",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "black", // Cor do ícone de remoção dos itens selecionados
      ":hover": {
        backgroundColor: "red",
        color: "white",
      },
    }),
  };

  /*  const options = [
    { value: "option1", label: "Opção 1" },
    { value: "option2", label: "Opção 2" },
    { value: "option3", label: "Opção 3" },
  ];*/

  return (
    <main className="sm:ml-14 p-4 bg-gray-900 h-screen">
      <div>
        <h1 className="text-white font-bold lg:text-4xl">
          Atribuição de Tarefas
        </h1>
        <p className="text-white italic lg:text-base">
          Distribua tarefas por integrantes
        </p>
      </div>
      <hr />
      <ul className="flex flex-col gap-5 my-5">
        {tasks.map((task) => {
          // Convertendo os membros em objetos no formato { value: "nome", label: "nome" }
          const membersOptions = task.members.map((member) => ({
            value: member,
            label: member,
          }));

          return (
            <li
              className="bg-linear-to-t from-sky-500 to-indigo-500 border-2 rounded-lg text-white p-3 flex flex-row gap-5 items-center"
              key={task.id}
            >
              <span>{task.Título}</span>
              <span>{task.task_Group}</span>
              <span>{task.dateDue}</span>
              <div className="flex flex-col rounded-md border bg-[#ffbf00] p-2 lg:w-[400px]">
                <SelectMulti
                  isMulti
                  options={membersOptions} // Passando as opções dos membros
                  value={selectedOptions[task.id]} // Vinculando a seleção à tarefa específica
                  onChange={(membersOptions) =>
                    handleSelectChange(task.id, membersOptions)
                  } // Passando o índice da tarefa
                  classNamePrefix="custom-select"
                  styles={customStyles} // Aplica os estilos personalizados
                />
              </div>
              <Button variant="secondary" size="sm">
                Atribuir
              </Button>
              <Link href="./task_Edit">
                <Button variant="secondary" size="sm">
                  Editar
                </Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
