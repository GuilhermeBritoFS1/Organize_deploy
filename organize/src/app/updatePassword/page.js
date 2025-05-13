"use client";

import { useState, useEffect } from "react";
import { api } from "../../Services/page";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/reset-password", { email });
      if (response.status === 200) {
        alert("Instruções de redefinição de senha enviadas para seu email.");
        router.push("/login");
      } else {
        alert("Não foi possível enviar o email. Verifique o endereço.");
      }
    } catch (error) {
      console.error("Erro ao solicitar redefinição:", error);
      alert("Erro ao solicitar redefinição de senha.");
    }
  };

  return (
    <main
      className={`sm:ml-14 p-4 ${
        theme === "dark" ? "bg-gray-900" : "bg-amber-100"
      }`}
    >
      <div
        className={`min-h-screen ${
          theme === "dark"
            ? "bg-gray-900 text-gray-600"
            : "bg-amber-100 text-black"
        } flex flex-col items-center justify-center text-center`}
      >
        <img src="/logo.png" alt="Logo" className="mb-4 w-50 h-auto" />
        <h1 className="text-5xl font-bold mb-2  text-slate-500">
          Redefinir Senha
        </h1>
        <p className="text-lg mb-6  text-slate-500">
          Insira seu e-mail para receber instruções
        </p>

        <div className="w-full max-w-sm p-8 rounded-lg shadow-lg relative">
          <img
            src="postit2.png"
            alt="Post-it"
            className={`w-full h-full object-cover shadow-lg absolute top-0 left-0 rounded-lg ${
              theme === "dark" ? "opacity-90" : "opacity-70"
            }`}
          />

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <label className="block text-lg text-black mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#ffbf00] text-white rounded-lg text-xl font-semibold hover:bg-[#ffd191] transition"
            >
              Enviar
            </button>
          </form>

          <div className="mt-6 text-center relative z-10">
            <a
              href="/login"
              className="text-blue-600 hover:text-blue-400 text-lg font-semibold"
            >
              Voltar para o login
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
