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
import { Globe } from "lucide-react";

export default function DominiosSettings() {
  return (
    <main className="sm:ml-14 p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Domínios</h1>
        <p className="text-muted-foreground text-sm">
          Gerencie domínios e URLs públicas da sua aplicação.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="text-primary" />
            <CardTitle>Gerenciamento de Domínios</CardTitle>
          </div>
          <CardDescription>
            Configure domínios personalizados e redirecionamentos.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Domínio principal */}
          <div className="space-y-2">
            <Label htmlFor="primary-domain">Domínio Principal</Label>
            <Input
              id="primary-domain"
              placeholder="Ex: app.seudominio.com"
              defaultValue="app.seudominio.com"
            />
          </div>

          {/* Redirecionamento */}
          <div className="space-y-2">
            <Label htmlFor="redirect">Redirecionar de (opcional)</Label>
            <Input id="redirect" placeholder="Ex: www.seudominio.com" />
            <p className="text-muted-foreground text-sm">
              Redireciona automaticamente esse domínio para o principal.
            </p>
          </div>

          <Separator />

          {/* HTTPS obrigatório */}
          <div className="flex items-center justify-between">
            <Label>Obrigar HTTPS</Label>
            <Switch defaultChecked />
          </div>

          {/* Subdomínio de fallback */}
          <div className="flex items-center justify-between">
            <Label>Permitir acesso via subdomínio padrão</Label>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
