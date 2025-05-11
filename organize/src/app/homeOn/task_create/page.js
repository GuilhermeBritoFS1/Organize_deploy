"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectMulti, { StylesConfig } from "react-select";
import chroma from "chroma-js";

import { useTheme } from "next-themes"; // Importando o hook useTheme
import styles from "@/app/homeOn/task_create/taskCreate.module.css";

export default function Task_create() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (options) => {
    setSelectedOptions(options);
  };

  const options = [
    { value: "option1", label: "Opção 1" },
    { value: "option2", label: "Opção 2" },
    { value: "option3", label: "Opção 3" },
  ];

  // Usando o hook useTheme para obter o tema
  const { theme } = useTheme();

  // Definindo as cores com base no tema
  const inputStyle =
    theme === "dark" ? "bg-gray-700 text-white" : "bg-[#ffbf00] text-black";
  const selectStyle =
    theme === "dark" ? "bg-gray-700 text-white" : "bg-[#ffbf00] text-black";

  return (
    <main className="sm:ml-14 p-4 h-screen">
      <form
        className={`flex flex-col justify-center items-center rounded-xl lg:w-1/2 md:w-3/4 mx-auto my-auto md:h-2/3 sm:h-2/3 h-2/3 bg-[url('/postit2.png')] bg-center bg-cover relative`}
      >
        <fieldset className="md:text-4xl sm:text-[25px] text-[25px] font-bold md:mb-2 text-start">
          Criar tarefa
        </fieldset>
        <hr className="w-1/2" />
        <Input
          placeholder="Título"
          type="text"
          className={`my-5 lg:w-2/3 md:w-1/2 sm:w-1/2 w-1/2 md:text-base ${inputStyle}`}
          style={styles}
        />
        <Textarea
          placeholder="Descrição"
          type="text"
          className={`mb-5 lg:w-2/3 md:w-1/2 sm:w-1/2 w-1/2 md:text-base ${inputStyle}`}
          style={styles}
        />
        <div className="flex md:flex-row gap-5 sm:flex-col flex-col">
          <Select>
            <SelectTrigger
              placeholder="Selecione uma opção"
              style={{
                color: theme === "dark" ? "white" : "black",
                backgroundColor: theme === "dark" ? "#444" : "#ffbf00",
              }}
              className="lg:w-1/2 md:w-1/2 sm:w-full w-full"
            >
              Equipe responsável
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="option1">Opção 1</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectItem value="option3">Opção 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger
              placeholder="Selecione uma opção"
              style={{
                color: theme === "dark" ? "white" : "black",
                backgroundColor: theme === "dark" ? "#444" : "#ffbf00",
              }}
              className="lg:w-1/2 md:w-1/2 sm:w-full w-full"
            >
              Prioridade da tarefa
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="option1">Baixa</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectItem value="option2">Média</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectItem value="option3">Alta</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Data de vencimento"
            className={`"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-[#ffbf00] px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"`}
          />
        </div>
      </form>
    </main>
  );
}
