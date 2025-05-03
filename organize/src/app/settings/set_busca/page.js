"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";

export default function BuscaSettings() {
  return (
    <main className="sm:ml-14 p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Configurações de Busca</h1>
        <p className="text-muted-foreground text-sm">
          Personalize o comportamento da busca e sugestões do sistema.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Search className="text-primary" />
            <CardTitle>Comportamento da Busca</CardTitle>
          </div>
          <CardDescription>
            Ative ou desative sugestões automáticas, histórico e outras opções.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Switches de comportamento */}
          <div className="flex items-center justify-between">
            <Label htmlFor="auto-suggestions">Sugestões automáticas</Label>
            <Switch id="auto-suggestions" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="search-history">Salvar histórico de buscas</Label>
            <Switch id="search-history" />
          </div>

          <Separator />

          {/* Filtros e feedback */}
          <div className="space-y-2">
            <Label htmlFor="default-filters">Filtros padrão</Label>
            <Input
              id="default-filters"
              placeholder="Ex: status:ativo tipo:cliente"
            />
            <p className="text-muted-foreground text-sm">
              Defina filtros que serão aplicados automaticamente nas buscas.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-feedback">Mensagem personalizada</Label>
            <Textarea
              id="custom-feedback"
              placeholder="Texto exibido quando não houver resultados."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
