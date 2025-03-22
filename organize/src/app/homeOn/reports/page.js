import { ChartOverview } from "@/components/chart";
import { Teams } from "@/components/teams";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LayoutList, ListTodo, ListChecks, Logs } from "lucide-react";

export const metadata = {
  title: "Relatórios",
  description: "OrgaNize - Organize seu dia do jeito mais nice!",
};

export default function Report() {
  return (
    <main className="sm:ml-14 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Relatório de Tarefas
      </h1>
      <div>
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle>Criadas</CardTitle>
                <LayoutList className="ml-auto" />
              </div>
              <CardDescription>Total de Tarefas</CardDescription>
              <CardContent className="text-base sm:text-lg font-bold">
                1354
              </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle>Andamento</CardTitle>
                <ListTodo className="ml-auto" />
              </div>
              <CardDescription>Total de Tarefas</CardDescription>
              <CardContent className="text-base sm:text-lg font-bold">
                727
              </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle>Concluídas</CardTitle>
                <ListChecks className="ml-auto" />
              </div>
              <CardDescription>Total de Tarefas</CardDescription>
              <CardContent className="text-base sm:text-lg font-bold">
                439
              </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle>Não iniciadas</CardTitle>
                <Logs className="ml-auto" />
              </div>
              <CardDescription>Total de Tarefas</CardDescription>
              <CardContent className="text-base sm:text-lg font-bold">
                188
              </CardContent>
            </CardHeader>
          </Card>
        </section>

        <section className="mt-4 flex flex-col md:flex-row gap-4">
          <ChartOverview />
          <Teams />
        </section>
      </div>
    </main>
  );
}
