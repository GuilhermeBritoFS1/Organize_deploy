"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../Services/page";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff"; // Importação dos ícones

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", {
        email,
        password,
      });

      const token = response.data.token;
      if (token) {
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("token", token);
        router.push("/homeOn");
      } else {
        alert("Token não recebido. Verifique a resposta da API.");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Email ou senha inválidos.");
    }
  };

  // useEffect para realizar o reload após a navegação
  useEffect(() => {
    // Verifica se a rota atual é a página desejada
    if (window.location.pathname === "/homeOn") {
      location.reload();
    }
  }, [router.asPath]); // Dependência na rota atual

  return (
    <main className="sm:ml-14 p-4 bg-gray-900">
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center">
        <img src="/logo.png" alt="Logo" className="mb-4 w-50 h-auto" />
        <h1 className="text-6xl font-bold mb-4">OrgaNize</h1>
        <p className="text-3xl font-bold mb-4">
          Organize seu dia do jeito mais nice!
        </p>

        <div className="w-full max-w-sm p-8 rounded-lg shadow-lg relative">
          <img
            src="postit2.png"
            alt="Post-it"
            className="w-full h-full object-cover shadow-lg absolute top-0 left-0 rounded-lg"
          />
          <h2 className="text-2xl font-semibold text-center text-black mb-6 relative z-10">
            Acesse sua conta
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <label className="block text-lg text-black mb-2">Email</label>
              <input
                type="text"
                name="email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-lg text-black mb-2">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Altera o tipo de input dependendo do estado
                  name="password"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Digite sua senha"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // Alterna a visibilidade da senha
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <VisibilityOff className="w-6 h-6" /> // Usando o ícone VisibilityOff
                  ) : (
                    <Visibility className="w-6 h-6" /> // Usando o ícone Visibility
                  )}
                </button>
              </div>
              <a
                href="/updatePassword"
                className="text-blue-600 hover:text-blue-400 text-lg font-semibold"
              >
                Redefinir senha
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#ffbf00] text-white rounded-lg text-xl font-semibold hover:bg-[#ffd191] transition"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 text-center relative z-10">
            <p className="text-gray-400">Ainda não tem uma conta?</p>
            <a
              href="/create"
              className="text-blue-600 hover:text-blue-400 text-lg font-semibold"
            >
              Crie sua conta
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
