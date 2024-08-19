# BackLog do Produto

# Personas

1. Gerente(nutricionista): Pessoa que utiliza a parte de marcação de consultas, e de preparação da dieta dos pacientes, bem como vê/mostra a diversidade de alimentos para adicionar na dieta.

2. Cliente(paciente): Pessoa que apenas visualiza a dieta que foi posta para si, e consegue ver se tem outros alimentos para substituir.

# Requisitos Funcionais

Os requisitos funcionais são, de certa forma, as funcionalidades mínimas e máximas de um software, e isso depende de diversos fatores, como a abordagem utilizada para descrever os requisitos, o usuário de software, dentre outros. A tabela a seguir refere-se aos requisitos funcionais do proeto Calorie Explorer.

| ID   | Requisito Funcional                                                                                                                           |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| RF01 | O sistema deve permitir que o gerente visualize a quantidade de calorias dos alimentos por 100g e ajuste as dietas dos clientes.              |
| RF02 | O sistema deve permitir que o cliente visualize os alimentos incluídos em sua dieta e substitua-os por outras opções, se desejado.            |
| RF03 | O sistema deve permitir que o gerente agende e altere horários de consultas, com uma agenda para gerenciar esses compromissos.                |
| RF04 | O sistema deve permitir que o cliente veja o horário de suas consultas, receba notificações sobre mudanças e seja lembrado antes da consulta. |
| RF05 | O sistema deve garantir que o estilo do site esteja alinhado com a identidade visual do local de trabalho do gerente.                         |
| RF06 | O sistema deve incluir pelo menos 5 alimentos em cada categoria (Proteína, carboidrato, lipídio, etc.).                                       |
| RF07 | O sistema deve ser intuitivo e fácil de usar, com uma interface limpa e de fácil entendimento.                                                |
| RF08 | O sistema deve exigir CPF, nome completo, idade, gênero, email, peso e altura para o cadastro.                                                |
| RF09 | O sistema deve ter uma página de login separada para o gerente, distinta do login dos pacientes.                                              |

# Requisitos Não Funcionais

Requisitos não funcionais definem como um sistema deve operar, em vez de o que ele deve fazer. Eles abrangem aspectos como desempenho, segurança, usabilidade e compatibilidade. Esses requisitos garantem que o sistema atenda aos padrões de qualidade e às expectativas dos usuários, assegurando uma experiência robusta e eficiente. Com isso, a tabela a seguir apresenta os requisitos não funcionais identificados para o desenvolvimento do projeto.

| RNF   | Tipo            | Descrição                                                                                                          |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| RNF01 | Interface       | A interface deve conter um modo de alto contraste, com tipografias diferenciadas, garantindo maior acessibilidade. |
| RNF02 | Interface       | As páginas devem ser estilizadas com cores, ícones e fontes padronizadas.                                          |
| RNF03 | Usabilidade     | O site deve ser responsivo, podendo ser acessado em dispositivos com diferentes tamanhos de tela.                  |
| RNF04 | Implementação   | O Back-End do site deve ser desenvolvido em JavaScript e MySQL.                                                    |
| RNF05 | Suportabilidade | O site deve ser compatível com vários navegadores, como Opera, OperaGX, Microsoft Edge, Chrome, Firefox, etc.      |
| RNF06 | Confiabilidade  | O site deve possuir uma Política de Privacidade clara e um termo de aceitação de cookies para os usuários.         |

# Backlog do produto

1. Temas

| Código | Tema                    | Descrição                                                                 |
| ------ | ----------------------- | ------------------------------------------------------------------------- |
| TH01   | Gestão de Dietas        | Funcionalidades relacionadas ao gerenciamento de dietas e alimentos.      |
| TH02   | Agendamento e Consultas | Funcionalidades relacionadas ao agendamento e gerenciamento de consultas. |
| TH03   | Experiência do Usuário  | Funcionalidades focadas na experiência e interface do usuário.            |
| TH04   | Gerenciamento do Site   | Funcionalidades relacionadas ao gerenciamento e configuração do site.     |

2. Épicos

| Código do Tema | Código do Épico | Descrição                                  |
| -------------- | --------------- | ------------------------------------------ |
| TH01           | EP01            | Ajuste e Visualização de Alimentos         |
| TH01           | EP02            | Criação e Gerenciamento de Planos de Dieta |
| TH01           | EP03            | Recomendação de Substituições              |
| TH01           | EP04            | Metas Nutricionais                         |
| TH02           | EP05            | Marcação e Alteração de Consultas          |
| TH02           | EP06            | Status e Notificações de Consultas         |
| TH03           | EP07            | Estilo do Site e Personalização            |
| TH03           | EP08            | Facilidade de Uso e Interface              |
| TH03           | EP09            | Histórico de Dietas e Consultas            |
| TH03           | EP10            | Recursos Educativos e FAQs                 |
| TH04           | EP11            | Inclusão de Informações no Cadastro        |
| TH04           | EP12            | Página de Login Diferenciada               |
| TH04           | EP13            | Exportação de Relatórios                   |
| TH04           | EP14            | Categorias de Alimentos                    |

3. Histórias de Usuário

| Código do Tema | Código do Épico | ID   | História de Usuário                                                                                                                                              | Prioridade Média \* |
| -------------- | --------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| TH03           | EP08            | US07 | Eu, como cliente, quero um site intuitivo e de fácil entendimento, sem excesso de informações na tela.                                                           | 9.67                |
| TH01           | EP02            | US11 | Eu, como gerente, quero a capacidade de criar e gerenciar planos de dieta personalizados para cada cliente, com base em suas necessidades e preferências.        | 9.33                |
| TH04           | EP13            | US13 | Eu, como gerente, quero a capacidade de exportar relatórios de progresso e históricos de dieta dos clientes em formatos como PDF ou Excel para análise externa.  | 9.33                |
| TH01           | EP04            | US15 | Eu, como gerente, quero a capacidade de definir e gerenciar metas nutricionais específicas para cada cliente e monitorar seu progresso em relação a essas metas. | 9.00                |
| TH02           | EP05            | US03 | Eu, como gerente, quero marcar e alterar o horário da consulta e ter uma agenda para isso.                                                                       | 8.67                |
| TH03           | EP09            | US10 | Eu, como cliente, quero ter acesso a um histórico das minhas dietas e consultas passadas para acompanhar meu progresso ao longo do tempo.                        | 8.67                |
| TH04           | EP11            | US08 | Eu, como gerente, quero que a tela de cadastro inclua CPF, nome completo, idade, gênero, email, peso e altura.                                                   | 8.67                |
| TH01           | EP01            | US01 | Eu, como gerente, quero ver a quantidade de Kcal dos alimentos por 100g e ajustá-los na dieta do meu cliente, se necessário.                                     | 8.67                |
| TH01           | EP03            | US12 | Eu, como cliente, quero receber recomendações automáticas de substituições alimentares baseadas no meu perfil e nas minhas preferências.                         | 8.33                |
| TH01           | EP01            | US02 | Eu, como cliente, quero ver os alimentos da minha dieta e trocar por outras opções, se possível.                                                                 | 8.33                |
| TH02           | EP06            | US04 | Eu, como cliente, quero ver quando minha consulta foi marcada, se foi perdida ou alterada, e receber notificações sobre isso.                                    | 8.00                |
| TH03           | EP07            | US05 | Eu, como gerente, quero que o estilo do site condiga com o estilo do meu local de trabalho.                                                                      | 7.67                |
| TH03           | EP10            | US14 | Eu, como cliente, quero ter acesso a uma seção de perguntas frequentes (FAQ) e recursos educativos sobre nutrição e alimentação saudável.                        | 7.67                |
| TH04           | EP12            | US09 | Eu, como gerente, quero uma página de login separada apenas para mim, distinta do login dos pacientes.                                                           | 7.67                |
| TH04           | EP14            | US06 | Eu, como gerente, quero ter pelo menos 5 alimentos em cada categoria no site.                                                                                    | 7.67                |

\* A priorização das Histórias de Usuário foi feita com base em três critérios: Viabilidade (V), Agregação ao Site (AS) e Opinião do Cliente (OC), cada um avaliado de 1 a 10. A prioridade média foi calculada pela média simples dessas notas.

# Histórico de Versão

| Data       | Versão | Descrição                               | Autor               |
| ---------- | ------ | --------------------------------------- | ------------------- |
| 31/07/2024 | 1.0    | Criação do Backlog e ajustes do MK-Docs | André João C Gomes  |
| 13/08/2024 | 1.1    | Ajustes do Backlog                      | André João C Gomes  |
| 19/08/2024 | 1.2    | Reestruturação do projeto               | Ana Catarina Santos |
