"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { api } from "../../../Services/page";
import { Formik, FieldArray } from "formik";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup } from "@/components/ui/select";

export default function Teams() {
  const [members, setMembers] = useState([{}]);
  const [teams, setTeams] = useState([]);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem("token");
    const getAllTeams = async () => {
      try {
        const response = await api.get("/task-groups?created=true", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTeams(response.data);
      } catch (error) {
        console.error("Erro ao buscar equipes", error);
        alert(error.response?.data?.msg || "Erro ao buscar equipes");
      }
    };
    getAllTeams();
  }, []);

  if (!mounted) return null;

  return (
    <main
      className={`sm:ml-14 p-4 flex flex-col items-center min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-gray-600" : "bg-amber-100 text-black"
      }`}
    >
      <div className="flex flex-col items-center text-center w-full max-w-6xl p-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-500">Equipes</h1>
        <p className="text-lg text-slate-500 mb-6">Adicione integrantes à sua equipe</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {teams.map((team, teamIndex) => (
            <div key={team.id} className="relative w-full aspect-square flex items-center justify-center">
              <div className="relative w-full h-full">
                <img
                  src="/postit2.png"
                  alt="Post-it"
                  className="w-full h-full object-cover shadow-lg rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col p-3 overflow-y-auto">
                  <h2 className="text-lg font-bold text-center mb-2">{team.name}</h2>

                  <Formik
                    initialValues={{ friends: [] }}
                    onSubmit={(values) => {
                      alert(JSON.stringify(values, null, 2));
                    }}
                  >
                    {({ values }) => (
                      <form onSubmit={(e) => e.preventDefault()}>
                        <FieldArray
                          name="friends"
                          render={(arrayHelpers) => (
                            <div className="flex flex-col gap-2">
                              {values.friends.length > 0 ? (
                                values.friends.map((friend, index) => (
                                  <div key={index} className="flex flex-col gap-1">
                                    <Input
                                      name={`friends.${index}`}
                                      placeholder={`Integrante ${index + 1}`}
                                      className="bg-white px-2 py-1 rounded border border-gray-300 text-black"
                                      onChange={(e) => {
                                        const newMembers = [...members];
                                        newMembers[index] = {
                                          ...newMembers[index],
                                          name: e.target.value,
                                        };
                                        setMembers(newMembers);
                                      }}
                                    />
                                    <Select
                                      onValueChange={(value) => {
                                        const newMembers = [...members];
                                        newMembers[index] = {
                                          ...newMembers[index],
                                          role: value,
                                        };
                                        setMembers(newMembers);
                                      }}
                                    >
                                      <SelectTrigger className="bg-yellow-300 text-black rounded px-2 py-1">
                                        Perfil
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectGroup>
                                          <SelectItem value="viewer">Observador</SelectItem>
                                          <SelectItem value="editor">Editor</SelectItem>
                                          <SelectItem value="admin">Admin</SelectItem>
                                        </SelectGroup>
                                      </SelectContent>
                                    </Select>
                                    <div className="flex gap-2 justify-end">
                                      <button
                                        type="button"
                                        onClick={() => arrayHelpers.remove(index)}
                                        className="text-xs text-red-600 hover:underline"
                                      >
                                        Remover
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => arrayHelpers.insert(index + 1, "")}
                                        className="text-xs text-blue-600 hover:underline"
                                      >
                                        Adicionar
                                      </button>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.push("")}
                                  className="bg-yellow-300 text-black font-bold py-1 px-3 rounded hover:bg-yellow-400"
                                >
                                  Adicionar integrante
                                </button>
                              )}
                              {values.friends.length > 0 && (
                                <button
                                  type="submit"
                                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded mt-2"
                                >
                                  ADICIONAR
                                </button>
                              )}
                            </div>
                          )}
                        />
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
