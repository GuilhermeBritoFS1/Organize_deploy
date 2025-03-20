export const metadata = {
  title: "Sobre",
  description: "OrgaNize - Organize seu dia do jeito mais nice!",
};

export default function About() {
  return (
    <main className="sm:ml-14 p-4 bg-gray-900">
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center px-4">
        <img src="/logo.png" alt="Logo" className="mb-4 w-50 h-auto" />
        <h1 className="text-6xl font-bold mb-4">OrgaNize</h1>
        <p className="text-3xl font-bold mb-4">
          Organize seu dia do jeito mais nice!
        </p>
        <p className="text-3xl font-bold mb-4">Sobre o sistema</p>

        <div className="relative max-w-xl p-8 rounded-lg shadow-lg">
          <img
            src="/postit.png"
            alt="Post-it"
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold text-center text-black mb-6"></h2>

            <p className="text-base text-black leading-relaxed text-justify">
              Em um ambiente corporativo, a organização e a gestão eficiente de
              tarefas são essenciais para o sucesso. Muitas empresas enfrentam
              desafios relacionados à desorganização e à má gestão de
              atividades, o que pode comprometer a produtividade e os
              resultados. Pensando nisso, o OrgaNize foi desenvolvido para
              oferecer uma solução eficiente, permitindo que equipes organizem,
              priorizem e acompanhem suas tarefas de forma estruturada,
              melhorando o fluxo de trabalho e a tomada de decisões.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
