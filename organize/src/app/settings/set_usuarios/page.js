"use client";

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
import { UserCog } from "lucide-react";

export default function UsuariosSettings() {
  return (
    <main className="sm:ml-14 p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Gerenciamento de Usuários</h1>
        <p className="text-muted-foreground text-sm">
          Adicione, edite ou controle acessos de usuários do sistema.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <UserCog className="text-primary" />
            <CardTitle>Usuários do Painel</CardTitle>
          </div>
          <CardDescription>Controle de permissões e acessos.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="user-name">Nome do Usuário</Label>
            <Input id="user-name" placeholder="Ex: João da Silva" />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="user-email">E-mail</Label>
            <Input
              id="user-email"
              placeholder="Ex: joao@email.com"
              type="email"
            />
          </div>

          {/* Função */}
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

          {/* Permissões */}
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
    </main>
  );
}
