"use client";

import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Settings, UserCog, ShieldCheck } from "lucide-react";

export default function ConfiguracoesTabs() {
  const { setTheme, theme } = useTheme();

  return (
    <main className="sm:ml-14 p-6 space-y-6">
      <h1 className="text-3xl font-bold">Configurações do Sistema</h1>
      <p className="text-muted-foreground text-sm">
        Navegue entre as categorias para ajustar suas preferências.
      </p>

      <Tabs defaultValue="geral" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="geral">Gerais</TabsTrigger>
          <TabsTrigger value="usuarios">Usuários</TabsTrigger>
          <TabsTrigger value="privacidade">Privacidade</TabsTrigger>
        </TabsList>

        {/* Aba: Gerais */}
        <TabsContent value="geral">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Settings className="text-primary" />
                <CardTitle>Parâmetros do Sistema</CardTitle>
              </div>
              <CardDescription>
                Defina idioma, fuso horário, tema e notificações.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Idioma</Label>
                <Select defaultValue="pt-BR">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um idioma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                    <SelectItem value="en-US">Inglês (EUA)</SelectItem>
                    <SelectItem value="es-ES">Espanhol</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Fuso Horário</Label>
                <Input
                  placeholder="Ex: America/Sao_Paulo"
                  defaultValue="America/Sao_Paulo"
                />
              </div>

              <div className="space-y-2">
                <Label>Tema</Label>
                <Select
                  defaultValue={theme || "system"}
                  onValueChange={(value) => setTheme(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="dark">Escuro</SelectItem>
                    <SelectItem value="system">Automático (Sistema)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <Label>Exibir notificações no topo</Label>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label>Ativar som para alertas</Label>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba: Usuários */}
        <TabsContent value="usuarios">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <UserCog className="text-primary" />
                <CardTitle>Usuários do Painel</CardTitle>
              </div>
              <CardDescription>
                Controle de permissões e acessos.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Nome do Usuário</Label>
                <Input placeholder="Ex: João da Silva" />
              </div>

              <div className="space-y-2">
                <Label>E-mail</Label>
                <Input placeholder="Ex: joao@email.com" type="email" />
              </div>

              <div className="space-y-2">
                <Label>Função</Label>
                <Select defaultValue="editor">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma função" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Visualizador</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <Label>Acesso ao painel administrativo</Label>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label>Receber notificações por e-mail</Label>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <Label>Conta ativa</Label>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba: Privacidade */}
        <TabsContent value="privacidade">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary" />
                <CardTitle>Políticas de Privacidade</CardTitle>
              </div>
              <CardDescription>
                Defina regras de retenção de dados e aceite de termos pelos
                usuários.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label>Exigir aceite dos termos</Label>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label>Exibir política no login</Label>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Dias de retenção de dados</Label>
                <Input type="number" placeholder="Ex: 365" defaultValue="365" />
                <p className="text-muted-foreground text-sm">
                  Após esse período, dados inativos poderão ser removidos.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Texto da Política / LGPD</Label>
                <Textarea
                  placeholder="Escreva aqui a política de privacidade exibida aos usuários."
                  rows={6}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
