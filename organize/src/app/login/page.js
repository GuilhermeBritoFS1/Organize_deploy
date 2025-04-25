import Link from "next/link";

export const metadata = {
  title: "Login",
  description: "OrgaNize - Organize seu dia do jeito mais nice!",
};

export default function Login() {
  return (
    <main className="sm:ml-14 p-4 bg-gray-900">
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center">
        <img src="/logo.png" alt="Logo" className="mb-4 w-50 h-auto" />
        <h1 className="text-6xl font-bold mb-4">OrgaNize</h1>
        <p className="text-3xl font-bold mb-4">
          Organize seu dia do jeito mais nice!
        </p>

        <div className="w-full max-w-sm p-8 rounded-lg shadow-lg relative">
          <img
            src="postit2.png"
            alt="Post-it"
            className="w-full h-full object-cover shadow-lg absolute top-0 left-0 rounded-lg"
          />
          <h2 className="text-2xl font-semibold text-center text-black mb-6 relative z-10"></h2>
          <h2 className="text-2xl font-semibold text-center text-black mb-6 relative z-10">
            Acesse sua conta
          </h2>

          <form className="space-y-4 relative z-10">
            <div>
              <label className="block text-lg text-black mb-2">Usuário</label>
              <input
                type="text"
                name="username"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Digite seu usuário"
              />
            </div>

            <div>
              <label className="block text-lg text-black mb-2">Senha</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Digite sua senha"
              />
              <a
              href="/updatePassword"
              className="text-blue-600 hover:text-blue-400 text-lg font-semibold"
            >
              Redefinir senha
            </a>
            </div>
            <Link href="/homeOn">
              <button
                type="submit"
                className="w-full py-3 bg-[#ffbf00] text-white rounded-lg text-xl font-semibold hover:bg-[#ffd191] transition"
              >
                Entrar
              </button>
            </Link>
          </form>

          <div className="mt-6 text-center relative z-10">
            <p className="text-gray-400">Ainda não tem uma conta?</p>
            <a
              href="/create"
              className="text-blue-600 hover:text-blue-400 text-lg font-semibold"
            > 
              Crie sua conta
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
