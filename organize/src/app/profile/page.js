"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Profile() {
  const [form, setForm] = useState({
    name: "Jefferson Wagner",
    bio: "I own a computer.",
    role: "Analista de Infraestrutura",
    birthdate: "1995-01-01",
    email: "jefferson@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    newEmail: "",
    confirmEmail: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showSecurity, setShowSecurity] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [emailUpdateSuccess, setEmailUpdateSuccess] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSave = async () => {
    setIsUpdating(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Dados atualizados:", { ...form, image });
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro ao atualizar perfil!");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleEmailUpdate = async () => {
    if (form.newEmail !== form.confirmEmail) {
      alert("Os e-mails não coincidem!");
      return;
    }

    if (
      !window.confirm(
        `Tem certeza que deseja alterar seu e-mail para ${form.newEmail}?`
      )
    ) {
      return;
    }

    setIsUpdating(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("E-mail atualizado para:", form.newEmail);

      setForm((prev) => ({
        ...prev,
        email: form.newEmail,
        newEmail: "",
        confirmEmail: "",
      }));

      setEmailUpdateSuccess(true);
      setTimeout(() => setEmailUpdateSuccess(false), 3000);
    } catch (error) {
      console.error("Erro ao atualizar e-mail:", error);
      alert("Erro ao atualizar e-mail!");
    } finally {
      setIsUpdating(false);
    }
  };

  const toggleSecurity = () => {
    setShowSecurity(!showSecurity);
  };

  return (
    <div className="flex justify-center items-start min-h-screen p-4 bg-gray-50 py-8 dark:bg-background">
      <style jsx>{`
        .btn-yellow {
          background-color: oklch(0.828 0.189 84.429);
        }
        .btn-yellow:hover {
          background-color: oklch(0.728 0.189 84.429);
        }
      `}</style>

      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="border-b">
          <CardTitle className="text-2xl font-semibold text-center">
            Editar Perfil
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Foto de Perfil */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-md"
                />
              ) : (
                <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-md dark:bg-muted">
                  <span className="text-gray-500 dark:text-gray-300">
                    Sem imagem
                  </span>
                </div>
              )}
            </div>
            <div className="w-64">
              <Input
                id="photo"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file:text-sm file:font-medium"
              />
            </div>
          </div>

          {/* Informações Básicas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" value={form.name} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Cargo/Posição</Label>
              <Input id="role" value={form.role} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthdate">Data de Nascimento</Label>
              <Input
                id="birthdate"
                type="date"
                value={form.birthdate}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail Atual</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                readOnly
                className="bg-gray-100 dark:bg-muted"
              />
            </div>
          </div>

          {/* Biografia */}
          <div className="space-y-2">
            <Label htmlFor="bio">Biografia</Label>
            <Textarea
              id="bio"
              value={form.bio}
              onChange={handleChange}
              rows={4}
              placeholder="Fale um pouco sobre você..."
            />
          </div>

          {/* Acordeão de Segurança */}
          <div className="border rounded-lg overflow-hidden">
            <button
              onClick={toggleSecurity}
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 dark:bg-muted dark:hover:bg-muted/70"
            >
              <span className="font-medium">Configurações de Segurança</span>
              {showSecurity ? <ChevronUp /> : <ChevronDown />}
            </button>

            {showSecurity && (
              <div className="p-4 space-y-4 bg-white dark:bg-background">
                {/* Atualizar E-mail */}
                <div className="space-y-4 border-b pb-4">
                  <h3 className="font-medium">Alterar E-mail</h3>

                  <div className="space-y-3">
                    <Label htmlFor="newEmail">Novo E-mail</Label>
                    <Input
                      id="newEmail"
                      type="email"
                      value={form.newEmail}
                      onChange={handleChange}
                      placeholder="Digite o novo e-mail"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="confirmEmail">Confirme o E-mail</Label>
                    <Input
                      id="confirmEmail"
                      type="email"
                      value={form.confirmEmail}
                      onChange={handleChange}
                      placeholder="Confirme o novo e-mail"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      onClick={handleEmailUpdate}
                      disabled={
                        isUpdating || !form.newEmail || !form.confirmEmail
                      }
                      className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-muted dark:text-blue-400"
                    >
                      {isUpdating ? "Atualizando..." : "Atualizar E-mail"}
                    </Button>
                  </div>

                  {emailUpdateSuccess && (
                    <div className="text-green-600 text-sm mt-2 dark:text-green-400">
                      E-mail atualizado com sucesso!
                    </div>
                  )}
                </div>

                {/* Atualizar Senha */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-medium">Alterar Senha</h3>

                  <div className="space-y-3">
                    <Label htmlFor="currentPassword">Senha Atual</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={form.currentPassword}
                      onChange={handleChange}
                      placeholder="Digite sua senha atual"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <Label htmlFor="newPassword">Nova Senha</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={form.newPassword}
                        onChange={handleChange}
                        placeholder="Digite a nova senha"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="confirmPassword">Confirme a Senha</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirme a nova senha"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="outline"
                      disabled={
                        isUpdating ||
                        !form.currentPassword ||
                        !form.newPassword ||
                        !form.confirmPassword
                      }
                      className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-muted dark:text-blue-400"
                    >
                      {isUpdating ? "Atualizando..." : "Atualizar Senha"}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Botão de Salvar */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleSave}
              disabled={isUpdating}
              className="bg-amber-400 text-gray-800 w-full md:w-64 h-12 text-lg hover:bg-amber-200 transition-colors shadow-md"
            >
              {isUpdating ? "Salvando..." : "Salvar Alterações"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
