"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function NotFound() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div />;

  return (
    <main
      className={`min-h-screen flex items-center justify-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="font-bold mt-9 text-6xl">Página não encontrada!</h1>
        <p className="mt-2 text-lg">
          Essa página pode estar em desenvolvimento!
        </p>
        <Link
          href="/"
          className="mt-6 bg-[#ffbf00] hover:bg-[#ffd98c] text-black font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Voltar para página inicial
        </Link>
        <Image
          src="https://res.cloudinary.com/deaaxyebk/image/upload/v1749495499/postit_error_dbyust.png"
          alt="Post-it"
          className="mt-8 w-64 h-auto"
        />
      </div>
    </main>
  );
}
