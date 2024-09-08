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
| RF05 | O sistema deve exigir CPF, nome completo, idade, gênero, email, peso e altura para o cadastro.                                                             |
| RF06 | O sistema deve ter uma página de login separada para o gerente, distinta do login dos pacientes.                                                           |

## Requisitos Não Funcionais

Requisitos não funcionais definem como um sistema deve operar, em vez de o que ele deve fazer. Eles abrangem aspectos como desempenho, segurança, usabilidade e compatibilidade. Esses requisitos garantem que o sistema atenda aos padrões de qualidade e às expectativas dos usuários, assegurando uma experiência robusta e eficiente. Com isso, a tabela a seguir apresenta os requisitos não funcionais identificados para o desenvolvimento do projeto.

| RNF   | Tipo            | Descrição                                                                                                          |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| RNF01 | Interface       | A interface deve conter um modo de alto contraste, com tipografias diferenciadas, garantindo maior acessibilidade. |
| RNF02 | Interface| As páginas devem estar padronizadas, levando o protótipo do figma como base.|
| RNF03 | Usabilidade     | O site deve ser responsivo, podendo ser acessado em dispositivos com diferentes tamanhos de tela.                  |
| RNF04 | Implementação   | O Back-End do site deve ser desenvolvido em JavaScript e MySQL.                                                    |
| RNF05 | Suportabilidade | O site deve ser compatível com vários navegadores, como Opera, OperaGX, Microsoft Edge, Chrome, Firefox, etc.      |
| RNF06 | Confiabilidade  | O site deve possuir uma Política de Privacidade clara e um termo de aceitação de cookies para os usuários.         |

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

| Código do Tema | Código do Épico | ID    | História de Usuário                                                                                                 | Prioridade Média |
|----------------|-----------------|-------|----------------------------------------------------------------------------------------------------------------------|------------------|
| TH01           | EP01            | US01  | Eu, como gerente, quero criar planos de dieta personalizados para cada cliente com base em suas metas nutricionais.  | 9.33             |
| TH01           | EP01            | US02  | Eu, como gerente, quero adicionar alimentos específicos ao plano de dieta do cliente, de acordo com suas preferências. | 9.33             |
| TH01           | EP01            | US03  | Eu, como gerente, quero visualizar uma lista de alimentos permitidos ao criar o plano de dieta do cliente.           | 9.33             |
| TH01           | EP02            | US04  | Eu, como gerente, quero definir metas de ingestão calórica e macronutrientes diárias para cada cliente.              | 9.00             |
| TH01           | EP02            | US05  | Eu, como gerente, quero monitorar o progresso dos clientes em relação às suas metas nutricionais.                    | 9.00             |
| TH01           | EP03            | US06  | Eu, como gerente, quero exportar relatórios de progresso e históricos de dieta dos clientes em formatos PDF e Excel. | 9.33             |
| TH02           | EP04            | US07  | Eu, como cliente, quero que o menu de navegação tenha botões claros para acessar minha dieta e consultas agendadas.  | 9.67             |
| TH02           | EP04            | US08  | Eu, como cliente, quero que a página principal exiba um resumo das informações essenciais da minha dieta.            | 9.67             |
| TH02           | EP04            | US09  | Eu, como cliente, quero que as páginas internas tenham um layout com botões grandes e visíveis para as ações principais. | 9.67          |
| TH03           | EP05            | US10  | Eu, como gerente, quero marcar consultas para os clientes, escolhendo datas e horários disponíveis no calendário.    | 8.67             |
| TH03           | EP05            | US11  | Eu, como gerente, quero enviar notificações automáticas aos clientes ao marcar ou alterar uma consulta.              | 8.67             |
| TH03           | EP05            | US12  | Eu, como gerente, quero visualizar todas as consultas agendadas em um calendário semanal no sistema.                 | 8.67             |



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
| 04/09/2024 | 1.3    | Reestruturação do projeto          | Igor S. Justino |


