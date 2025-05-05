"use client";

import Form from "next/form";

import { Plus } from "lucide-react";
import { Formik, Field, FieldArray } from "formik";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function TeamRegistration() {
  const handleSubmit = async () => {
    console.log("Equipe cadastrada!");
  };

  const myStyle = {
    backgroundImage: `url("/postit.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '65px'
  }

  return (
    <main className="bg-gray-900 text-white h-screen flex justify-center">
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
            className="border p-2 rounded-md text-sm/5 bg-white"
          />
          <Formik
            initialValues={{ campos: [""] }}
            onSubmit={(values) => {
              console.log("Valores:", values);
            }}
          >
            {({ values }) => (
              <Form>
                <FieldArray name="campos">
                  {({ push }) => (
                    <div className="flex flex-col gap-[5px]">
                      {values.campos.map((_, index) => (
                        <div key={index}>
                          <Field
                            name={`campos.${index}`}
                            placeholder={`Integrante ${index + 1}`}
                            className={cn(
                              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm m",
                              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                            )}
                          />
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => push("")}
                        className="bg-[#ffd191] hover:bg-[#ffbf00] text-black font-bold px-4 py-2 rounded mb-2"
                      >
                        Adicionar integrante
                      </button>
                    </div>
                  )}
                </FieldArray>
              </Form>
            )}
          </Formik>
          <Textarea placeholder="Descrição da equipe" className="bg-white" />
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
