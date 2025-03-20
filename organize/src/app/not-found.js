import Link from "next/link";

export const metadata = {
  title: "OrgaNice",
  description: "OrgaNize - Organize seu dia do jeito mais nice!",
};

export default function NotFound() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="font-bold mt-9 text-6xl">Página não encontrada!</h1>
        <p>Essa página pode está em desenvolvimento!</p>
        <Link className="bg-amber-200" href={"/"}>
          Voltar para página inicial.
        </Link>
        <img src="/postit_error.png" alt="Post-it" className="mt-4" />
      </div>
    </main>
  );
}
