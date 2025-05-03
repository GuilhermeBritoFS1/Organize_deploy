"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function PrivacidadeSettings() {
  return (
    <main className="sm:ml-14 p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Privacidade e Segurança</h1>
        <p className="text-muted-foreground text-sm">
          Gerencie políticas de dados e consentimento dos usuários conforme a
          LGPD.
        </p>
      </div>

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
          {/* Consentimento */}
          <div className="flex items-center justify-between">
            <Label htmlFor="require-consent">Exigir aceite dos termos</Label>
            <Switch id="require-consent" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="show-privacy-link">Exibir política no login</Label>
            <Switch id="show-privacy-link" defaultChecked />
          </div>

          <Separator />

          {/* Retenção de dados */}
          <div className="space-y-2">
            <Label htmlFor="retention-days">Dias de retenção de dados</Label>
            <Input
              id="retention-days"
              type="number"
              placeholder="Ex: 365"
              defaultValue="365"
            />
            <p className="text-muted-foreground text-sm">
              Após esse período, dados inativos poderão ser removidos.
            </p>
          </div>

          {/* Texto da política */}
          <div className="space-y-2">
            <Label htmlFor="privacy-text">Texto da Política / LGPD</Label>
            <Textarea
              id="privacy-text"
              placeholder="Escreva aqui a política de privacidade exibida aos usuários."
              rows={6}
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
