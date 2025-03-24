import Form from "next/form";

import { Plus } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaMicrosoft } from "react-icons/fa";

export const metadata = {
  title: "Cadastro",
  description: "OrgaNize - Organize seu dia do jeito mais nice!",
};

export default function Create() {

  const handleSubmit = async() => {
    'use server';

    console.log("Clicou");
  } 

  return (
    <main className="bg-gray-900 text-white h-screen flex flex-col">
      <div className="flex flex-row w-2/3 h-2/3 m-auto">
        <div className="bg-gradient-to-r from-white to-gray-3500 text-bg-white flex flex-col items-center justify-center text-center mx-auto w-[50%] rounded-l-lg">
          <div className="flex -space-x-1 overflow-hidden">
            <img
              className="inline-block size-35 rounded-full ring-2 ring-transparent"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block size-35 rounded-full ring-2 ring-transparent"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block size-35 rounded-full ring-2 ring-transparent"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block size-35 rounded-full ring-2 ring-transparent"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <Plus color="white" size={140} />
          </div>
        </div>

        <div className="flex flex-col ms-0 w-[50%] p-5 gap-10 my-auto">
            <div className="flex flex-col justify-center items-center gap-2">
              <a className="flex flex-row h-[50px] gap-2 border w-2/3 p-2 rounded-md justify-center items-center" href="">
                <FcGoogle size={30} />
                <span className="text-2xl font-bold text-start">Cadastre-se pelo Google</span>
              </a>                
              <a className="flex flex-row h-[50px] gap-2 border w-2/3 p-2 rounded-md justify-center items-center" href="">
                <ImFacebook2 size={30} />
              <span className="text-2xl font-bold text-start">Cadastre-se pelo Facebook</span>
              </a>                
              <a className="flex flex-row h-[50px] gap-2 border w-2/3 p-2 rounded-md justify-center items-center" href="">
                <FaMicrosoft size={30} />
                <span className="text-2xl font-bold text-start">Cadastre-se pela Microsoft</span>
              </a>                
            </div>
          <Form>
            <fieldset className="text-6xl font-bold mb-4">Cadastre-se</fieldset>
            {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border p-2 rounded-md mb-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border p-2 rounded-md mb-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border p-2 rounded-md mb-2"
              />
            </div>
            <div className="flex flex-row justify-center items-center mt-3">
              <button onClick={handleSubmit} className="bg-[#ffbf00] hover:bg-[#ffd191] transition py-2 w-[50%] rounded-md text-black font-bold">Submit</button>
            </div>            
            </Form>
        </div>
      </div>
    </main>
  );
}
