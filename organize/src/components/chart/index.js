"use client";

import { ChartColumnBig } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Bar, CartesianGrid, XAxis, BarChart } from "recharts";

export function ChartOverview() {
  const chartData = [
    { task: "Andamento", alta: 350, media: 200, baixa: 177 },
    { task: "Concluídas", alta: 200, media: 150, baixa: 89 },
    { task: "Não Iniciadas", alta: 80, media: 60, baixa: 48 },
  ];

  const chartConfig = {
    alta: {
      label: "Alta",
      color: "#EB7575",
    },
    media: {
      label: "Media",
      color: "#60a5fa",
    },
    baixa: {
      label: "Baixa",
      color: "#5CCB5F",
    },
  };

  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Overview Tarefas
          </CardTitle>
          <ChartColumnBig className="ml-auto" />
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="task"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="alta" fill="var(--color-alta)" radius={4} />
            <Bar dataKey="media" fill="var(--color-media)" radius={4} />
            <Bar dataKey="baixa" fill="var(--color-baixa)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
