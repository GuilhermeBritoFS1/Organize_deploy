"use client";

import { useState } from "react";
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

export default function Create() {
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

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword1 = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword2 = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificação de campos obrigatórios
    if (
      Name === "" ||
      Email === "" ||
      Email2 === "" ||
      Password === "" ||
      Password2 === ""
    ) {
      setResEmpty(false);
      return;
    }
    if (Name && Email && Email2 && Password && Password2) {
      setResEmpty(true);
    }

    // Validação de emails
    if (Email !== Email2) {
      setResEmail(false);
      return;
    } else {
      setResEmail(true);
    }

    // Validação de senhas
    if (Password !== Password2) {
      setRespassword(false);
      return;
    } else {
      setRespassword(true);
    }

    // Cadastro de usuário
    try {
      const response = await api.post("/user", {
        name: Name,
        email: Email,
        password: Password,
      });

      if (response.status === 201) {
        alert("Usuário cadastrado com sucesso!");
        setName("");
        setEmail("");
        setEmail2("");
        setPassword("");
        setPassword2("");
      }
    } catch (error) {
      console.log("Erro ao cadastrar o usuário", error);
      alert(error.response.data.msg);
    }
  };

  return (
    <main className="text-white h-screen flex flex-col">
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col md:w-3/4 sm:w-3/4 w-3/4 h-4/5 sm:w-3/4 md:w-2/3 m-auto">
        <div className="bg-gradient-to-r from-white to-gray-3500 text-bg-white flex flex-col items-center justify-center text-center mx-auto md:w-[50%] sm:w-[30%] rounded-l-lg">
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
              <span className="text-9 sm:text-2xl md:text-[20px] font-bold text-start">
                Cadastre-se pelo Google
              </span>
            </a>
            <a
              className="flex flex-row md:h-[50px] sm:h-[20%] h-[20%] gap-2 border lg:w-[340px] sm:w-full w-full p-2 rounded-md justify-center items-center"
              href=""
            >
              <ImFacebook2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
              <span className="text-9 sm:text-2xl md:text-[20px] font-bold text-start">
                Cadastre-se pelo Facebook
              </span>
            </a>
            <a
              className="flex flex-row md:h-[50px] sm:h-[20%] h-[20%] gap-2 border lg:w-[340px] sm:w-full w-full p-2 rounded-md justify-center items-center"
              href=""
            >
              <FaMicrosoft className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
              <span className="text-9 sm:text-2xl md:text-[20px] font-bold text-start">
                Cadastre-se pela Microsoft
              </span>
            </a>
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <fieldset className="md:text-6xl sm:text-3xl text-3xl font-bold mb-4 text-center">
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
            />
            <Input
              autoComplete="off"
              type="email"
              placeholder="Email (exemplo: user123@gmail.com)"
              id="email"
              name="email"
              className="bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 text-sm/5"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              autoComplete="off"
              type="email"
              placeholder="Confirme email"
              id="confirmEmail"
              name="confirmEmail"
              className="bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 text-sm/5"
              onChange={(e) => setEmail2(e.target.value)}
            />
            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-2">
              <OutlinedInput
                className={cn(
                  "file:border bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 text-sm/5 placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-lg-[45%] w-md-[45%] w-sm-[80%] w-[100%]"
                )}
                placeholder="Digite sua senha"
                type={showPassword1 ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword1
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword1}
                      onMouseUp={handleMouseUpPassword1}
                    >
                      {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <OutlinedInput
                className={cn(
                  "file:border bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 text-sm/5 placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-lg-[45%] w-md-[45%] w-sm-[80%] w-[100%]"
                )}
                placeholder="Confirme sua senha"
                type={showPassword2 ? "text" : "password"}
                onChange={(e) => setPassword2(e.target.value)}
                value={Password2}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword2
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword2}
                      onMouseUp={handleMouseUpPassword2}
                    >
                      {showPassword2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>

            <div className="flex flex-row justify-center items-center mt-3">
              <button
                type="submit"
                className="bg-[#ffbf00] hover:bg-[#ffd191] transition py-2 px-4 w-[70%] sm:w-[70%] md:w-[30%] rounded-md text-black font-bold"
              >
                CADASTRAR
              </button>
            </div>

            {/* Mensagens de erro */}
            {!resEmpty && (
              <p className="block text-red-500">
                Todos os campos devem ser preenchidos!
              </p>
            )}
            {!resEmail && (
              <p className="block text-red-500">Os emails estão diferentes!</p>
            )}
            {!resPassword && (
              <p className="block text-red-500">As senhas estão diferentes!</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
