"use client";

import { useState, useRef, useEffect } from "react";
import Form from "next/form";
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
    if (
      Name === "" ||
      Email === "" ||
      Email2 === "" ||
      Password === "" ||
      Password2 === ""
    ) {
      setResEmpty(false);
    }
    if (Name && Email && Email2 && Password && Password2) {
      setResEmpty(true);
    }

    if (Email !== Email2) {
      setResEmail(false);
    } else {
      setResEmail(true);
    }
    if (Password === Password2) {
      setRespassword(true);
    } else {
      setRespassword(false);
    }

    api({
      method: "post",
      url: "/user",
      data: {
        name: Name,
        email: Email,
        password: Password,
      },
    });
  };


  /*try {
      await api.post("/user", {
        name: Name,
        email: Email,
        password: Password,
      });
      setName("");
      setEmail("");
      setEmail2("");
      setPassword("");
      setpassword2("");
    } catch (error) {
      console.log("Erro ao cadastrar o usuário", error);
    }
  };*/

  /*const getUsers = async () => {
    const userfromApi = await api.get("/users");
    setUsers(userfromApi);
  }

  useEffect(() => {
    getUsers();
  }, []);*/

  return (
    <main className="bg-gray-900 text-white h-screen flex flex-col">
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
          <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <fieldset className="md:text-6xl sm:text-3xl text-3xl font-bold mb-4 text-center">
              Cadastre-se
            </fieldset>
            {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
            <Input
              autoComplete="off"
              type="text"
              placeholder="Nome completo"
              id="name"
              name="name"
              className="border p-2 rounded-md text-sm/5"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              autoComplete="off"
              type="email"
              placeholder="Email (exemplo: user123@gmail.com)"
              id="email"
              name="email"
              className="border p-2 rounded-md text-sm/5"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              autoComplete="off"
              type="email"
              placeholder="Confirme email"
              id="confirmEmail"
              name="confirmEmail"
              className="border p-2 rounded-md text-sm/5"
              onChange={(e) => setEmail2(e.target.value)}
            />
            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-2">
              <OutlinedInput
                className={cn(
                  "file:border p-2 rounded-md text-sm/5 text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-lg-[45%] w-md-[45%] w-sm-[80%] w-[100%] min-w-0 rounded-md border bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                )}
                id="outlined-adornment-password1"
                type={showPassword1 ? "text" : "password"}
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
                      edge="end"
                    >
                      {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={(e) => setPassword(e.target.value)}
              />
              <OutlinedInput
                className={cn(
                  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-lg-[40%] w-md-[45%] w-sm-[80%] w-[100%] min-w-0 rounded-md border bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                )}
                id="outlined-adornment-password2"
                type={showPassword2 ? "text" : "password"}
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
                      edge="end"
                    >
                      {showPassword2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={(e) => setPassword2(e.target.value)}
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
            {!resEmpty && (
              <p className="block">Todos os campos devem ser preenchidos!</p>
            )}
            {!resEmail && <p className="block">Os emails estão diferentes!</p>}
            {!resPassword && (
              <p className="block">As senhas estão diferentes!</p>
            )}
          </Form>
        </div>
      </div>
    </main>
  );
}
