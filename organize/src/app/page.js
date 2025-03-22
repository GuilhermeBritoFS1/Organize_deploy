import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "OrgaNize - Organize seu dia do jeito mais nice!",
};

export default function Home() {
  return (
    <main className="sm:ml-14 p-4 flex items-center justify-center min-h-screen bg-gray-900">
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start px-6 py-8">
        <img src="/logo.png" alt="Logo" className="mb-4 w-50 h-auto" />
        <h1 className="text-6xl font-bold mb-4 text-center">OrgaNize</h1>
        <p className="text-3xl font-bold mb-8 text-center">
          Organize seu dia do jeito mais nice!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray-800 rounded-lg shadow-md w-80 p-4 relative">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Empresas e Organizações
            </h2>
            <div className="relative w-full h-64">
              <img
                src="postit2.png"
                alt="Post-it"
                className="absolute inset-0 w-full h-full object-cover shadow-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-black font-semibold">
                <ul className="text-lg">
                  <li>° Pequenas, médias e grandes empresas</li>
                  <li>° Startups em crescimento</li>
                  <li>° Equipes remotas e híbridas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-md w-80 p-4 relative">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Gestores e Líderes
            </h2>
            <div className="relative w-full h-64">
              <img
                src="postit2.png"
                alt="Post-it"
                className="absolute inset-0 w-full h-full object-cover shadow-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-black font-semibold">
                <ul className="text-lg">
                  <li>° Gerentes de projetos</li>
                  <li>° Coordenadores de equipes</li>
                  <li>° Empreendedores buscando eficiência</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-md w-80 p-4 relative">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Profissionais Individuais
            </h2>
            <div className="relative w-full h-64">
              <img
                src="postit2.png"
                alt="Post-it"
                className="absolute inset-0 w-full h-full object-cover shadow-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-black font-semibold">
                <uL className="text-lg">
                  <li>° Freelancers</li>
                  <li>° Consultores</li>
                  <li>
                    ° Profissionais autônomos focados em organização,
                    produtividade e gestão de tempo
                  </li>
                </uL>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/login">
            <button className="bg-[#ffbf00] px-6 py-3 rounded-lg text-black font-semibold text-lg hover:bg-[#ffd191]">
              COMECE AGORA!!
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
