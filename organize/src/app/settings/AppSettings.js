// app/settings/AppSettings.jsx

"use client";

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
  return (
    <main className="sm:ml-14 p-4 min-h-screen bg-white text-black">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center w-full">Configurações</h1>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {settingsSections.map((section) => (
          <Link key={section.title} href={section.href}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-gray-100 text-black">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {section.icon}
                  <CardTitle>{section.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-500">
                Clique para configurar
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
}
