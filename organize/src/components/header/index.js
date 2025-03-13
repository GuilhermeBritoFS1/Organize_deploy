"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-[#ffbf00] text-black p-4">
      <div className="text-xl font-bold">OrgaNize</div>

      <div
        className="text-2xl cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <nav
        className={`absolute md:static top-16 right-4 bg-[#ffd191] md:bg-transparent rounded-lg p-4 md:p-0 md:flex gap-4 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <a href="./" className="block md:inline px-4 py-2 hover:underline">
          Início
        </a>

        <a href="./about" className="block md:inline px-4 py-2 hover:underline">
          Sobre
        </a>

        <a href="./login" className="block md:inline px-4 py-2 hover:underline">
          Log in
        </a>
      </nav>
    </header>
  );
}
