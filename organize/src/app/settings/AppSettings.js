// app/settings/AppSettings.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Settings,
  UserCog,
  Globe,
  Mail,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

const settingsSections = [
  {
    title: "Geral",
    description: "Funcionamento geral do sistema",
    icon: <Settings className="text-muted-foreground" />,
    href: "/settings/set_geral",
  },
  {
    title: "Usuários",
    description: "Gerencie quem pode acessar o painel",
    icon: <UserCog className="text-muted-foreground" />,
    href: "/settings/set_usuarios",
  },
  {
    title: "Domínios",
    description: "Gerenciamento de domínios da aplicação",
    icon: <Globe className="text-muted-foreground" />,
    href: "/settings/set_dominios",
  },
  {
    title: "E-mails",
    description: "Gerenciamento dos e-mails enviados",
    icon: <Mail className="text-muted-foreground" />,
    href: "/settings/set_emails",
  },
  {
    title: "Busca",
    description: "Sugestões, comportamento e relatórios",
    icon: <Search className="text-muted-foreground" />,
    href: "/settings/set_busca",
  },
  {
    title: "Privacidade",
    description: "Políticas e permissões de dados",
    icon: <ShieldCheck className="text-muted-foreground" />,
    href: "/settings/set_privacidade",
  },
];

export default function AppSettings() {
  const [darkMode, setDarkMode] = useState(true);

  const themeClasses = darkMode
    ? "bg-gray-900 text-white"
    : "bg-white text-black";

  const cardTheme = darkMode
    ? "bg-gray-800 text-white"
    : "bg-gray-100 text-black";

  const descriptionTheme = darkMode ? "text-gray-300" : "text-gray-600";
  const contentTheme = darkMode ? "text-gray-400" : "text-gray-500";

  return (
    <main
      className={`sm:ml-14 p-4 min-h-screen transition-colors ${themeClasses}`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center w-full">Configurações</h1>
        <div className="absolute right-6">
          <span className="mr-2 text-sm font-medium">🌞</span>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          <span className="ml-2 text-sm font-medium">🌙</span>
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {settingsSections.map((section) => (
          <Link key={section.title} href={section.href}>
            <Card
              className={`hover:shadow-lg transition-shadow cursor-pointer ${cardTheme}`}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  {section.icon}
                  <CardTitle>{section.title}</CardTitle>
                </div>
                <CardDescription className={descriptionTheme}>
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent className={`text-sm ${contentTheme}`}>
                Clique para configurar
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
}
