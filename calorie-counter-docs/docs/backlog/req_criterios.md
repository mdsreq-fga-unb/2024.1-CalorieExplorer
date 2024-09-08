# Backlog do Produto

## Personas

1. Gerente(nutricionista): Pessoa que utiliza a parte de marcação de consultas, e de preparação da dieta dos pacientes, bem como vê/mostra a diversidade de alimentos para adicionar na dieta.

2. Cliente(paciente): Pessoa que apenas visualiza a dieta que foi posta para si, e consegue ver se tem outros alimentos para substituir.

## Requisitos Funcionais

Os requisitos funcionais são, de certa forma, as funcionalidades mínimas e máximas de um software, e isso depende de diversos fatores, como a abordagem utilizada para descrever os requisitos, o usuário de software, dentre outros. A tabela a seguir refere-se aos requisitos funcionais do proeto Calorie Explorer.

| ID   | Requisitos Funcional                                                                                                                                       |
|------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RF01 | O sistema deve permitir que o gerente visualize a quantidade de calorias dos alimentos por 100g e ajuste as dietas dos clientes.                           |
| RF02 | O sistema deve permitir que o cliente visualize os alimentos.                         |
| RF03 | O sistema deve adotar um estilo minimalista e alinhado aos padrões de mercado, seguindo as heurísticas de Nielsen para garantir uma experiência de usuário intuitiva e eficiente.        |
| RF04 | O sistema deve possuir uma interface com cada função sendo descrita de forma clara, de forma que não polua o visual e com padrões já utilizados no mercado. |
| RF05 | O sistema deve ter uma página de login separada para o gerente, distinta do login dos pacientes.                                                           |
|RF07| O nutricionista deve poder visualizar a lista de pacientes cadastrados, selecionar um paciente e visualizar seu perfil com informações detalhadas. |
| RF08 |O nutricionista deve poder adicionar uma dieta e um planejamento personalizado para cada paciente.|
|RF09|O sistema deve possuir uma calculadora de calorias|

## Requisitos Não Funcionais

Requisitos não funcionais definem como um sistema deve operar, em vez de o que ele deve fazer. Eles abrangem aspectos como desempenho, segurança, usabilidade e compatibilidade. Esses requisitos garantem que o sistema atenda aos padrões de qualidade e às expectativas dos usuários, assegurando uma experiência robusta e eficiente. Com isso, a tabela a seguir apresenta os requisitos não funcionais identificados para o desenvolvimento do projeto.

| RNF   | Tipo            | Descrição                                                                                                          |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| RNF01 | Interface       | A interface deve conter um modo de alto contraste, com tipografias diferenciadas, garantindo maior acessibilidade. |
| RNF02 | Interface| As páginas devem estar padronizadas, levando o protótipo do figma como base.|
| RNF03 | Usabilidade     | O site deve ser responsivo, podendo ser acessado em dispositivos com diferentes tamanhos de tela.                  |
| RNF04 | Implementação   | O Back-End do site deve ser desenvolvido em JavaScript e MySQL.                                                    |
| RNF05 | Suportabilidade | O site deve ser compatível com vários navegadores, como Opera, OperaGX, Microsoft Edge, Chrome, Firefox, etc.      |
|RF06|Segurança|O sistema deve garantir que os dados dos nutricionistas sejam registrados diretamente no Back-End, evitando vulnerabilidades de segurança.|
| RNF07 | Confiabilidade  | O site deve possuir uma Política de Privacidade clara e um termo de aceitação de cookies para os usuários.         |

## Backlog do produto

Temas

| Código | Tema                    | Descrição                                                                 |
| ------ | ----------------------- | ------------------------------------------------------------------------- |
| TH01   | Gestão de Dietas        | Funcionalidades relacionadas ao gerenciamento de dietas e alimentos.      |
| TH02   | Experiência do Usuário  | Funcionalidades focadas na experiência e interface do usuário.            |
| TH03   | Gerenciamento do Site   | Funcionalidades relacionadas ao gerenciamento e configuração do site.     |

Épicos

| Código do Tema | Código do Épico | Descrição                                  |
| -------------- | --------------- | ------------------------------------------ |
| TH01           | EP01            | Ajuste e Visualização de Alimentos         |
| TH01           | EP02            | Criação e Gerenciamento de Planos de Dieta |
| TH01           | EP03            | Metas Nutricionais                         |
| TH02           | EP04            | Estilo do Site e Personalização            |
| TH03           | EP05            | Página de Login Diferenciada               |
| TH04           | EP06            | Categorias de Alimentos                    |

## User Roles

## User Roles Resumido

| Épico  | Tema                        | Feature                            | User Story                                                                                                                                                    | Prioridade |
|--------|-----------------------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| **EP01** Gerenciamento de Acesso      | **TH03** Gerenciamento do Site     | **FEAT01** Cadastro e Login               | **US01** Como nutricionista, quero fazer login no sistema para gerenciar as dietas dos meus pacientes. <br> **US02** Como paciente, quero realizar meu cadastro e login para acessar meu perfil e plano de dieta.  | 9.33         |
| **EP02** Perfil do Paciente           | **TH01** Gestão de Dietas          | **FEAT02** Visualização de Dados          | **US03** Como nutricionista, quero visualizar uma lista de alimentos permitidos ao criar o plano de dieta do paciente. <br> **US04** Como nutricionista, quero visualizar os pacientes cadastrados. <br> **US05** Como nutricionista, quero visualizar o perfil do paciente para analisar suas informações nutricionais. <br> **US06** Como paciente, quero visualizar meu perfil com as informações lançadas pela nutricionista.  | 9.33          |
| **EP03** Planejamento Nutricional     | **TH01** Gestão de Dietas          | **FEAT03** Cálculo de Calorias e Planejamento de Dieta | **US07** Como nutricionista, quero definir metas de ingestão calórica e macronutrientes para cada cliente. <br> **US08** Como nutricionista, quero calcular as necessidades calóricas e macronutrientes do paciente. <br> **US09** Como nutricionista, quero planejar a dieta do paciente, incluindo horários das refeições e metas nutricionais.  | 9.33          |
| **EP04** Acompanhamento de Dieta      | **TH01** Gestão de Dietas          | **FEAT04** Metas e Progresso              | **US10** Como nutricionista, quero monitorar o progresso dos pacientes em relação às metas nutricionais. <br> **US11** Como paciente, quero visualizar meu progresso e metas nutricionais.  | 9.00          |
| **EP06** Categorias de Alimentos      | **TH02** Experiência do Usuário    | **FEAT05** Visualização de Categorias     | **US12** Como paciente, quero visualizar diferentes categorias de alimentos para minha dieta. <br> **US13** Como nutricionista, quero organizar alimentos em categorias para facilitar a criação de planos alimentares. | 7.67         |



*A priorização das Histórias de Usuário foi feita com base em três critérios: Viabilidade (V), Agregação ao Site (AS) e Opinião do Cliente (OC), cada um avaliado de 1 a 10. A prioridade média foi calculada pela média simples dessas notas.*

### Alterações:

Devido a limitações de tempo e à ausência de quatro membros da equipe, foi necessário ajustar o escopo do projeto para garantir a entrega dentro do prazo estabelecido. Diante dessa situação, optamos por retirar algumas funcionalidades relacionadas ao agendamento de horários, gerenciamento de consultas pelos clientes e outros temas específicos. As funcionalidades e temas afetados incluem:
Agendar horários
Visualização de horários de consulta
Notificações sobre mudanças e lembretes
Além disso, os seguintes temas foram retirados:

    TH02 - Marcação e Alteração de Consultas
    TH03 - Status e Notificações de Consultas
    TH03 - Histórico de Dietas e Consultas
    TH03 - Recursos Educativos e FAQs
    TH04 - Inclusão de Informações no Cadastro e Exportação de Relatórios
Essas decisões foram tomadas para concentrar os esforços da equipe nas funcionalidades essenciais e garantir a entrega de um produto viável, mesmo com os recursos limitados. O foco principal passou a ser a implementação das funcionalidades básicas que permitam o funcionamento mínimo da aplicação, com a possibilidade de futuras iterações para incorporar as funcionalidades removidas quando houver disponibilidade de tempo e recursos.
## Histórico de Versão

| Data       | Versão | Descrição                               | Autor               |
| ---------- | ------ | --------------------------------------- | ------------------- |
| 31/07/2024 | 1.0    | Criação do Backlog e ajustes do MK-Docs | André João C Gomes  |
| 13/08/2024 | 1.1    | Ajustes do Backlog                      | André João C Gomes  |
| 19/08/2024 | 1.2    | Reestruturação do projeto               | Ana Catarina Santos |
| 04/09/2024 | 1.3    | Reestruturação do Backlog          | Igor S. Justino |
| 09/09/2024 | 1.4    | Reestruturação do Backlog          | Igor S. Justino |



