"use client";

import { Users, Trophy, Crown, Award, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const teams = [
  { name: "Equipe de Desenvolvimento", email: "desenvolvimento@organize.com" },
  { name: "Equipe de Marketing", email: "marketing@organize.com" },
  { name: "Equipe de Vendas", email: "vendas@organize.com" },
  { name: "Equipe Administrativa", email: "administrativo@organize.com" },
  { name: "Equipe de Produção", email: "producao@organize.com" },
];

const positionIcons = [Trophy, Crown, Award, Star, Star, Star];

export function Teams() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Ranking de Equipe
          </CardTitle>
          <Users className="ml-auto" />
        </div>
        <CardDescription>Tarefas distribuídas por equipes</CardDescription>
      </CardHeader>

      <CardContent>
        {teams.map((team, index) => {
          const Icon = positionIcons[index] || Circle;
          return (
            <article
              key={index}
              className="flex items-center gap-3 border-b py-2"
            >
              <Icon className="text-yellow-500 w-5 h-5" />
              <Avatar className="w-8 h-8">
                <AvatarImage src="" />
                <AvatarFallback>DV</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm sm:text-base font-semibold">
                  {team.name}
                </p>
                <span className="text-[12px] sm:text-sm text-gray-400">
                  {team.email}
                </span>
              </div>
            </article>
          );
        })}
      </CardContent>
    </Card>
  );
}
