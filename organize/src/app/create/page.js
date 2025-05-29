"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import para redirecionamento
import { api } from "../../Services/page";
import { Plus } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaMicrosoft } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Create() {
  const router = useRouter(); // Hook para navegação
  const { theme } = useTheme();

  const [users, setUsers] = useState([]);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [resEmpty, setResEmpty] = useState(true);
  const [resEmail, setResEmail] = useState(true);
  const [resPassword, setRespassword] = useState(true);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Email2, setEmail2] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleMouseDownPassword1 = (event) => event.preventDefault();
  const handleMouseUpPassword1 = (event) => event.preventDefault();
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (event) => event.preventDefault();
  const handleMouseUpPassword2 = (event) => event.preventDefault();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      Name === "" ||
      Email === "" ||
      Email2 === "" ||
      Password === "" ||
      Password2 === ""
    ) {
      setResEmpty(false);
      return;
    } else {
      setResEmpty(true);
    }

    if (Email !== Email2) {
      setResEmail(false);
      return;
    } else {
      setResEmail(true);
    }

    if (Password !== Password2) {
      setRespassword(false);
      return;
    } else {
      setRespassword(true);
    }

    try {
      const response = await api.post("/user", {
        name: Name,
        email: Email,
        password: Password,
      });

      if (response.status === 201) {
        alert("Usuário cadastrado com sucesso!");

        // Limpa os inputs
        setName("");
        setEmail("");
        setEmail2("");
        setPassword("");
        setPassword2("");

        // Redireciona para página de login
        router.push("/login");
      }
    } catch (error) {
      console.log("Erro ao cadastrar o usuário", error);
      alert(error.response?.data?.msg || "Erro ao cadastrar.");
    }
  };

  return (
    <main className={`text-amber-400 h-screen flex flex-col ${theme === "light" ? "bg-amber-100" : ""}`}>
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col md:w-3/4 sm:w-3/4 w-3/4 h-4/5 sm:w-3/4 md:w-2/3 m-auto">
        <div className="bg-gradient-to-r from-amber-400 to-gray-3500 text-bg-white flex flex-col items-center justify-center text-center mx-auto md:w-[50%] sm:w-[30%] rounded-l-lg">
          <div className="flex flex-wrap justify-center gap-2 p-2">
            <img
              className="inline-block lg:size-35 md:size-25 sm:size-20 size-20 rounded-full ring-2 ring-transparent"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block lg:size-35 md:size-25 sm:size-20 size-20 rounded-full ring-2 ring-transparent"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block lg:size-35 md:size-25 sm:size-20 size-20 rounded-full ring-2 ring-transparent"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block lg:size-35 md:size-25 sm:size-20 size-20 rounded-full ring-2 ring-transparent"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <Plus color="white" size={140} />
          </div>
        </div>

        <div className="flex flex-col ms-0 w-60% sm:w-[60%] md:w-4/5 lg:w-[50%] p-5 gap-10 my-auto">
          <div className="flex flex-col justify-center items-center gap-2">
            <a
              className="flex flex-row md:h-[50px] sm:h-[20%] h-[20%] gap-2 border lg:w-[340px] md:w-full sm:w-full w-full p-2 rounded-md justify-center items-center"
              href=""
            >
              <FcGoogle className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
              <span className="text-9 sm:text-2xl md:text-[20px] font-bold text-start  text-slate-500">
                Cadastre-se pelo Google
              </span>
            </a>
            <a
              className="flex flex-row md:h-[50px] sm:h-[20%] h-[20%] gap-2 border lg:w-[340px] sm:w-full w-full p-2 rounded-md justify-center items-center"
              href=""
            >
              <ImFacebook2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
              <span className="text-9 sm:text-2xl md:text-[20px] font-bold text-start  text-slate-500">
                Cadastre-se pelo Facebook
              </span>
            </a>
            <a
              className="flex flex-row md:h-[50px] sm:h-[20%] h-[20%] gap-2 border lg:w-[340px] sm:w-full w-full p-2 rounded-md justify-center items-center"
              href=""
            >
              <FaMicrosoft className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
              <span className="text-9 sm:text-2xl md:text-[20px] font-bold text-start  text-slate-500">
                Cadastre-se pela Microsoft
              </span>
            </a>
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <fieldset className="md:text-6xl sm:text-3xl text-3xl font-bold mb-4 text-center  text-slate-500">
              Cadastre-se
            </fieldset>
            <Input
              autoComplete="off"
              type="text"
              placeholder="Nome completo"
              id="name"
              name="name"
              className="bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 text-sm/5"
              onChange={(e) => setName(e.target.value)}
              value={Name}
            />
            <Input
              autoComplete="off"
              type="email"
              placeholder="Email (exemplo: user123@gmail.com)"
              id="email"
              name="email"
              className="bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 text-sm/5"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />
            <Input
              autoComplete="off"
              type="email"
              placeholder="Confirme email"
              id="confirmEmail"
              name="confirmEmail"
              className="bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 text-sm/5"
              onChange={(e) => setEmail2(e.target.value)}
              value={Email2}
            />
            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-2">
              <OutlinedInput
                className={cn(
                  "file:border bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 text-sm/5 placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-gray-600 border-input flex h-9 w-lg-[45%] w-md-[45%] w-sm-[80%] w-[100%]"
                )}
                placeholder="Digite sua senha"
                type={showPassword1 ? "text" : "password"}
                id="password1"
                name="password1"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                autoComplete="off"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword1}
                      onMouseUp={handleMouseUpPassword1}
                      edge="end"
                    >
                      {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <OutlinedInput
                className={cn(
                  "file:border bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 text-sm/5 placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-gray-600 border-input flex h-9 w-lg-[45%] w-md-[45%] w-sm-[80%] w-[100%]"
                )}
                placeholder="Confirme sua senha"
                type={showPassword2 ? "text" : "password"}
                id="password2"
                name="password2"
                onChange={(e) => setPassword2(e.target.value)}
                value={Password2}
                autoComplete="off"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword2}
                      onMouseUp={handleMouseUpPassword2}
                      edge="end"
                    >
                      {showPassword2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>

            {!resEmpty && (
              <p className="text-red-500">Por favor, preencha todos os campos.</p>
            )}
            {!resEmail && <p className="text-red-500">Os emails não coincidem.</p>}
            {!resPassword && (
              <p className="text-red-500">As senhas não coincidem.</p>
            )}

            <button
              className="p-2 rounded bg-amber-400 text-gray-800 font-bold hover:bg-amber-500 transition-colors"
              type="submit"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
