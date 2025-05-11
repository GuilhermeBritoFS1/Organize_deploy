"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

//Services
import { api } from "../../../Services/page";

export default function TeamRegistration() {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [tokenCod, setTokenCod] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await api.post(
        "/task-groups",
        {
          name: teamName,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        alert("Equipe cadastrada com sucesso!");
        setTeamName("");
        setDescription("");
        console.log(response);
      }
    } catch (error) {
      console.log("Erro ao cadastrar o usuário", error);
      alert(error.response.data.msg);
    }
  };

  const myStyle = {
    backgroundImage: `url("/postit2.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "65px",
  };

  return (
    <main className="text-white h-screen flex justify-center">
      {/* Lado direito: Formulário */}
      <div className="flex flex-col justify-center">
        {/* Formulário de Cadastro de Equipe */}
        <div style={myStyle}>
          <fieldset className="md:text-5xl sm:text-3xl text-3xl font-bold mb-4 text-center text-yellow-800">
            Cadastre sua Equipe
          </fieldset>
          <hr />
          <Input
            type="text"
            placeholder="Nome da Equipe"
            id="teamName"
            name="teamName"
            className="border p-2 rounded-md text-sm/5 bg-white text-black"
            onChange={(e) => setTeamName(e.target.value)}
          />

          <Textarea
            placeholder="Descrição da equipe"
            className="bg-white text-black"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex flex-row justify-center items-center mt-3">
            <button
              onClick={handleSubmit}
              className="bg-[#ffbf00] hover:bg-[#ffd191] transition py-2 px-4 rounded-md text-yellow-800 font-bold"
            >
              CADASTRAR EQUIPE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
