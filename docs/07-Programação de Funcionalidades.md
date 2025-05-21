# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

## Relatório de Implementação do Sistema

Este documento descreve a implementação do sistema com base nos requisitos funcionais e não funcionais. Para cada requisito, são apresentados os artefatos desenvolvidos, estruturas de dados utilizadas e instruções para acesso e verificação no ambiente de hospedagem.

---

### Requisito Funcional RF-001

- Permitir que os usuários criem uma conta na plataforma.

> #### Responsável: Helbert Miranda Benício

#### Descrição

Permitir que o usuário realize o cadastro no sistema preenchendo os dados obrigatórios.

#### Artefatos Criados

- Código-fonte Frontend: `src/app/create/page.js`
- Código-fonte Backend: `controllers/UserController.js` (método `Create`)
- Validação no frontend e backend
- Banco de dados: coleção `users` no MongoDB

#### Estruturas de Dados Utilizadas

```json
{
  "User": {
    "_id": "string",
    "name": "string",
    "email": "string",
    "password": "string",
    "createdAt": "Date",
    "__v": "Number"
  }
}

```

#### Comportamento Esperado

- O usuário acessa a rota /login e visualiza o formulário com campos de email e senha.
- Ao preencher os campos e submeter o formulário:
- É feita uma requisição POST para o endpoint /user/login com os dados do formulário.
- Se as credenciais forem válidas:

> - O token JWT retornado é salvo no localStorage.
> - A flag isAuthenticated é definida como true.
> - O usuário é redirecionado para a página principal autenticada /homeOn.
> - Após 1 segundo, a página recarrega para aplicar as mudanças de autenticação na UI.

- Se as credenciais forem inválidas:

> - Um alerta é exibido: "Email ou senha inválidos."

### Requisito Funcional RF-002

- Permitir a autenticação dos usuários na plataforma via e-mail e senha.

> #### Responsável: Helbert Miranda Benício

#### Descrição

Permitir que o usuário realize o login no sistema informando seu e-mail e senha. O sistema deve validar as credenciais e, em caso de sucesso, conceder acesso ao ambiente autenticado armazenando o token JWT localmente.

#### Artefatos Criados

- **Código-fonte Frontend**: `src/app/login/page.js`
- **Código-fonte Backend**: `controllers/UserController.js` (método `Login`)
>
> - Validação no frontend e backend
>
- **Banco de dados**: coleção `users` no MongoDB

#### Estruturas de Dados Utilizadas

```json
{
  "User": {
    "LoginRequest": {
    "email": "string",
    "password": "string"
    },
    "LoginResponse": {
    "token": "string"
  }
}
}
```

#### Comportamento Esperado

- O usuário preenche os campos obrigatórios (email e senha).
- Ao enviar o formulário:

> - Uma requisição POST é feita para /user/login.
> - O backend valida as credenciais.
> - Se válidas, retorna um token JWT.
> - O token é armazenado no localStorage.
> - O usuário é redirecionado para a rota /homeOn.

- Caso as credenciais sejam inválidas, uma mensagem de erro é exibida.

### Requisito Funcional RF-003

- Permitir que os usuários façam logout na plataforma.

> #### Responsável: Helbert Miranda Benício

#### Descrição

Permitir que o usuário encerre sua sessão no sistema por meio da interface da barra lateral (Sidebar), garantindo que os dados de autenticação local sejam limpos e o acesso a áreas restritas seja bloqueado.

#### Artefatos Criados

- **Código-fonte Frontend**: `src/components/sidebar/index.js`
- **Função de logout**: handleLogout()
- **Armazenamento**: remoção da flag de autenticação do localStorage
- **Redirecionamento**: window.location.href = "/"

#### Estruturas de Dados Utilizadas

```json
{
  "User": {
     "localStorage": {
    "token": "string (removido ou ignorado)",
    "isAuthenticated": "false"
  }
}
}
```

#### Comportamento Esperado

- A interface exibe um ícone de Log out (ícone LogOutIcon) se o usuário estiver autenticado (isAuthenticated).
- Ao clicar em Log out, a função handleLogout é executada:

> - Define isAuthenticated como "false" no localStorage.
> - Atualiza o estado local de autenticação (setAuthenticated(false)).
> - Redireciona o usuário para a página inicial (/).

- Após o logout, a interface não exibe mais opções acessíveis apenas a usuários autenticados (ex: "Início", "Perfil").
- O botão de login é exibido novamente.
