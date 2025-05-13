"use client";

import { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Plus } from "lucide-react";
import { Formik, Field, FieldArray } from "formik";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Services
import { api } from "../../../Services/page";

// Theme hook
import { useTheme } from "next-themes";

export default function Task_assignment() {
  const [members, setMembers] = useState([{}]);
  const [teams, setTeams] = useState([{}]);

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
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
        console.log("Erro ao cadastrar o usuário", error);
        alert(error.response.data.msg);
      }
    };

    getAllTeams();
  }, []);

  // Estilos personalizados para o react-select
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected
        ? "#ffbf00"
        : theme === "dark"
        ? "white"
        : "black",
      backgroundColor: state.isSelected ? "#ffbf00" : "transparent",
      padding: "10px",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#ffbf00",
      color: "black",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "black",
      fontWeight: "bold",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "black",
      ":hover": {
        backgroundColor: "red",
        color: "white",
      },
    }),
  };

  if (!mounted) return null;

  return (
    <main
      className={`sm:ml-14 p-4 h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-600"
          : "bg-amber-100 text-black"
      }`}
    >
      <div>
        <h1 className=" text-slate-500 text-center font-bold lg:text-4xl">
          Equipes
        </h1>
        <p className=" text-slate-500 text-center lg:text-base">
          Aqui você pode adicionar integrantes a sua equipe
        </p>
      </div>
      <hr />
      <div className="flex md:flex-row flex-wrap sm:flex-col flex-col gap-5 justify-center my-5">
        {teams &&
          teams.map((team) => {
            return (
              <div
                key={team.id}
                className={`lg:w-[23%] md:w-[25%] sm:w-[100%] w-[100%] opacity-50 hover:opacity-100 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">{team.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className={`flex flex-col rounded-md border p-2 w-[100%] ${
                        theme === "dark" ? "bg-gray-800" : "bg-white"
                      }`}
                    >
                      <Formik
                        initialValues={{ friends: [] }}
                        onSubmit={(values) =>
                          setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                          }, 500)
                        }
                        render={({ values }) => (
                          <form>
                            <FieldArray
                              name="friends"
                              render={(arrayHelpers) => (
                                <div>
                                  {values.friends &&
                                  values.friends.length > 0 ? (
                                    values.friends.map((friend, index) => (
                                      <div key={index}>
                                        <Input
                                          name={`friends.${index}`}
                                          placeholder={`Integrante${index + 1}`}
                                          className={cn(
                                            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-white px-3 py-1 text-black shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm m",
                                            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                                            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                                          )}
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
                                          <SelectTrigger
                                            placeholder="Selecione uma opção"
                                            style={{
                                              color: "black",
                                              backgroundColor: "#ffbf00",
                                            }}
                                            className="lg:w-1/4 md:w-1/4 sm:w-full w-full"
                                          >
                                            Perfil
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectGroup>
                                              <SelectItem value="viewer">
                                                Observador
                                              </SelectItem>
                                              <SelectItem value="editor">
                                                Editor
                                              </SelectItem>
                                              <SelectItem value="admin">
                                                Admin
                                              </SelectItem>
                                            </SelectGroup>
                                          </SelectContent>
                                        </Select>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            arrayHelpers.remove(index)
                                          }
                                          className="text-black font-bold"
                                        >
                                          -
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            arrayHelpers.insert(index, "")
                                          }
                                          className="text-black font-bold"
                                        >
                                          +
                                        </button>
                                      </div>
                                    ))
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={() => arrayHelpers.push("")}
                                      className="bg-[#ffbf00] hover:bg-[#ffd191] transition py-2 px-4 rounded-md text-yellow-800 font-bold"
                                    >
                                      Adicionar integrante
                                    </button>
                                  )}
                                </div>
                              )}
                            />
                            <div className="flex flex-row justify-center items-center mt-3">
                              <button className="bg-[#ffbf00] hover:bg-[#ffd191] transition py-2 px-4 rounded-md text-yellow-800 font-bold">
                                ADICIONAR
                              </button>
                            </div>
                          </form>
                        )}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
      </div>
    </main>
  );
}
