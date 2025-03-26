import Form from "next/form";

import { Plus } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaMicrosoft } from "react-icons/fa";

import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Cadastro",
  description: "OrgaNize - Organize seu dia do jeito mais nice!",
};

export default function Create() {
  const handleSubmit = async () => {
    "use server";

    console.log("Clicou");
  };

  return (
    <main className="bg-gray-900 text-white h-screen flex flex-col">
      <div className="flex flex-row md:w-3/4 sm:w-3/4 w-3/4 h-3/4 sm:w-3/4 md:w-2/3 m-auto">
        <div className="bg-gradient-to-r from-white to-gray-3500 text-bg-white flex flex-col items-center justify-center text-center mx-auto md:w-[50%] sm:w-[30%] rounded-l-lg">
          <div className="flex flex-wrap justify-center gap-2">
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
          <Form className="flex flex-col gap-3">
            <fieldset className="md:text-6xl sm:text-3xl text-3xl font-bold mb-4 text-center">
              Cadastre-se
            </fieldset>
            {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
            <Input
              type="text"
              placeholder="Nome completo"
              id="name"
              name="name"
              className="border p-2 rounded-md text-sm/5"
            />
            <Input
              type="email"
              placeholder="Email (exemplo: user123@gmail.com)"
              id="email"
              name="email"
              className="border p-2 rounded-md text-sm/5"
            />
            <Input
              type="email"
              placeholder="Confirme email"
              id="confirmEmail"
              name="confirmEmail"
              className="border p-2 rounded-md text-sm/5"
            />
            <Input
              type="password"
              placeholder="Senha"
              id="password"
              name="password"
              className="border p-2 rounded-md text-sm/5"
            />
            <input
              type="password"
              placeholder="Confirme sua senha"
              id="confirmPassword"
              name="confirmPassword"
              className="border p-2 rounded-md text-sm/5"
            />
            <div className="flex flex-row justify-center items-center mt-3">
              <button
                onClick={handleSubmit}
                className="bg-[#ffbf00] hover:bg-[#ffd191] transition py-2 px-4 w-[70%] sm:w-[70%] md:w-[30%] rounded-md text-black font-bold"
              >
                CADASTRAR
              </button>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}
