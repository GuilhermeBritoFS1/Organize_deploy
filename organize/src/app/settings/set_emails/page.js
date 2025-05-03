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
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

export default function EmailsSettings() {
  return (
    <main className="sm:ml-14 p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Configurações de E-mail</h1>
        <p className="text-muted-foreground text-sm">
          Defina como os e-mails são enviados pela plataforma.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="text-primary" />
            <CardTitle>Envio de E-mails</CardTitle>
          </div>
          <CardDescription>
            Gerencie remetente, SMTP e notificações.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Remetente */}
          <div className="space-y-2">
            <Label htmlFor="from-name">Nome do Remetente</Label>
            <Input id="from-name" placeholder="Ex: Equipe Suporte" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="from-email">E-mail do Remetente</Label>
            <Input
              id="from-email"
              type="email"
              placeholder="suporte@dominio.com"
            />
          </div>

          <Separator />

          {/* SMTP */}
          <div className="space-y-2">
            <Label htmlFor="smtp-host">Servidor SMTP</Label>
            <Input id="smtp-host" placeholder="smtp.dominio.com" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="smtp-port">Porta</Label>
              <Input id="smtp-port" type="number" placeholder="587" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="smtp-username">Usuário</Label>
              <Input id="smtp-username" placeholder="usuario@dominio.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="smtp-password">Senha</Label>
            <Input id="smtp-password" type="password" />
          </div>

          <Separator />

          {/* Segurança e notificações */}
          <div className="flex items-center justify-between">
            <Label>Usar conexão segura (TLS/SSL)</Label>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label>Ativar notificações por e-mail</Label>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
