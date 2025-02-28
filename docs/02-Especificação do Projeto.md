# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

O projeto foi desenvolvido com foco em proporcionar uma gestão eficiente de tarefas para empresas, equipes e profissionais individuais. Suas especificações incluem uma interface intuitiva, recursos de organização de atividades, atribuição de responsabilidades, acompanhamento de prazos e geração de relatórios.

## Personas

#### João, 40 anos, Gerente de Projetos

- João tem 40 anos, é Gerente de Projetos e enfrenta dificuldades para acompanhar o progresso das tarefas de sua equipe. Para otimizar a gestão e garantir a entrega eficiente dos projetos, busca um painel centralizado que facilite o monitoramento de prazos e a comunicação entre os membros da equipe, permitindo maior controle e previsibilidade sobre as entregas.

#### Mariana, 30 anos, Analista de Marketing

- Mariana tem 30 anos, é Analista de Marketing e enfrenta problemas de comunicação e retrabalho em suas atividades diárias. Para aumentar sua produtividade, busca uma ferramenta intuitiva que ajude a organizar suas tarefas, melhorar a colaboração com a equipe e reduzir erros operacionais.

#### Lucas, 25 anos, Desenvolvedor

- Lucas tem 25 anos, é Desenvolvedor e frequentemente recebe tarefas com informações insuficientes, o que impacta sua eficiência. Para otimizar seu trabalho e contribuir para o crescimento da empresa, precisa de um sistema que facilite a atribuição e o detalhamento das demandas, garantindo mais clareza e agilidade na execução dos projetos.

<!-- Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
>
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
> Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja. -->

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`          | QUERO/PRECISO ... `FUNCIONALIDADE`                                                                              | PARA ... `MOTIVO/VALOR`                                          |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Eu como Gerente de projetos   | Quero monitorar e avaliar o andamento das tarefas relacionadas aos meus projetos (RF-008, RF-010)               | Para tomar decisões assertivas para atingir a meta estabelecida. |
| Eu como Analista de marketing | Quero organizar minhas tarefas diárias, respeitando prioridades e prazos estabelecidos (RF-005, RF-006, RF-009) | Para maximizar minha eficiência.                                 |
| Eu como Desenvolvedor         | Quero ter fácil e claro acesso às minhas demandas diárias (RF-008, RF-009)                                      | Para gerar os artefatos que me foram atribuídos.                 |

<!-- > **Links Úteis**:
>
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/) -->

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

<!-- <strong>Crie no mínimo 12 Requisitos funcionais, 6 não funcionais e 3 restrições</strong>
<strong>Cada aluno será responsável pela execução completa (back, web e mobile) de pelo menos 2 requisitos que será acompanhado pelo professor</strong> -->

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                     | Prioridade | Responsável  |
| ------ | ------------------------------------------------------------------------------------------ | ---------- | ------------ |
| RF-001 | Permitir que os usuários criem uma conta na plataforma.                                    | ALTA       | A definir... |
| RF-002 | Permitir a autenticação dos usuários na plataforma via e-mail e senha.                     | ALTA       | A definir... |
| RF-003 | Permitir que os usuários façam logout na plataforma.                                       | ALTA       | A definir... |
| RF-004 | Permitir a redefinição de senha dos usuários na plataforma.                                | ALTA       | A definir... |
| RF-005 | Permitir a criação, edição e exclusão de tarefas na plataforma.                            | ALTA       | A definir... |
| RF-006 | Permitir que o sistema notifique sobre os prazos e atualizações das tarefas na plataforma. | MÉDIA      | A definir... |
| RF-007 | Permitir a atribuição e delegação de tarefas entre usuários.                               | MÉDIA      | A definir... |
| RF-008 | Permitir a visualização do painel de status das tarefas, exemplo: 5/10.                    | MÉDIA      | A definir... |
| RF-009 | Permitir a classificação de tarefas por prioridade (alta, média ou baixa) e categoria.     | MÉDIA      | A definir... |
| RF-010 | Permitir a geração de relatórios dentro da plataforma.                                     | BAIXA      | A definir... |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                                                                                 | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| RNF-001 | Interface responsiva para acesso em dispositivos móveis.                                                                                               | ALTA       |
| RNF-002 | Alta disponibilidade para acesso ininterrupto ao sistema.                                                                                              | ALTA       |
| RNF-003 | Armazenação segura de dados e logs de atividade.                                                                                                       | ALTA       |
| RNF-004 | Cumprimento de padrões de segurança e LGPD.                                                                                                            | ALTA       |
| RNF-005 | A plataforma deve ser capaz de lidar com um aumento no número de usuários sem comprometer o desempenho.                                                | MÉDIA      |
| RNF-006 | A plataforma deve ser fácil de manter e atualizar, permitindo a adição de novos recursos e correções de bugs sem interrupção significativa no serviço. | MÉDIA      |
| RNF-007 | Tempo de resposta rápido para interações usuário-sistema (estimativa de 3 segundos)                                                                    | MÉDIA      |

<!-- Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
  (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
  correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
  Lembre-se que cada requisito deve corresponder à uma e somente uma
  característica alvo da sua solução. Além disso, certifique-se de que
  todos os aspectos capturados nas Histórias de Usuário foram cobertos. -->

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                                                    |
| --- | ---------------------------------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre.                       |
| 02  | Deverá ser um sistema distribuído.                                           |
| 03  | Deverá ser desenvolvido um módulo Front-end e um Back-end.                   |
| 04  | A equipe não pode subcontratar o desenvolvimento do trabalho.                |
| 05  | Todos os membros do grupo devem ser responsáveis por cada parte do Trabalho. |
| 06  | O sistema deverá ser desenvolvido para plataformas Web e Mobile.             |

<!-- Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
>
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/) -->

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos.

![Diagrama de Casos de Uso](img/img_doc02/DiagramaCasosUso.png)

<!-- As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/) -->

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

![Gráfico](img/Cronograma.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados.

![Simple Project Timeline](img/02-project-timeline.png)
