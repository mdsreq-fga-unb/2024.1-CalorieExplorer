

# **Backlog do Produto**

#### **Personas**
- **Gerente (Nutricionista):** Utiliza a parte de marcação de consultas e preparação da dieta dos pacientes, além de visualizar e adicionar alimentos à dieta.
- **Cliente (Paciente):** Visualiza a dieta prescrita e pode substituir alimentos conforme necessidade.

#### **Requisitos Funcionais**

| ID   | Requisito Funcional                                                                                                                                                          |
|------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RF01 | O sistema deve permitir que o gerente visualize a quantidade de calorias dos alimentos por 100g e ajuste as dietas dos clientes.                                             |
| RF02 | O sistema deve permitir que o cliente visualize os alimentos incluídos em sua dieta e substitua-os por outras opções, se desejado.                                            |
| RF03 | O sistema deve permitir que o gerente agende e altere horários de consultas, com uma agenda para gerenciar esses compromissos.                                                |
| RF04 | O sistema deve permitir que o cliente veja o horário de suas consultas, receba notificações sobre mudanças e seja lembrado antes da consulta.                                  |
| RF05 | O sistema deve garantir que o estilo do site esteja alinhado com a identidade visual do local de trabalho do gerente.                                                         |
| RF06 | O sistema deve incluir pelo menos 5 alimentos em cada categoria (Proteína, carboidrato, lipídio, etc.).                                                                       |
| RF07 | O sistema deve ser intuitivo e fácil de usar, com uma interface limpa e de fácil entendimento.                                                                                |
| RF08 | O sistema deve exigir, nome, idade, gênero, peso e altura para o cadastro.                                                                               |
| RF09 | O sistema deve fornecer suporte à integração contínua, permitindo que novas atualizações sejam testadas e implementadas sem interromper o funcionamento do sistema.           |                                      |

#### **Requisitos Não Funcionais**

| RNF   | Tipo         | Descrição                                                                                                 |
|-------|--------------|-----------------------------------------------------------------------------------------------------------|
| RNF01 | Interface    | A interface deve conter um modo de alto contraste, com tipografias diferenciadas, garantindo maior acessibilidade. |
| RNF02 | Interface    | As páginas devem ser estilizadas com cores, ícones e fontes padronizadas.                                 |
| RNF03 | Usabilidade  | O site deve ser responsivo, podendo ser acessado em dispositivos com diferentes tamanhos de tela.         |
| RNF04 | Implementação| O Back-End do site deve ser desenvolvido em Java e MySQL.                                           |
| RNF05 | Suportabilidade | O site deve ser compatível com vários navegadores, como Opera, OperaGX, Microsoft Edge, Chrome, Firefox, etc. |
| RNF06 | Confiabilidade | O site deve possuir uma Política de Privacidade clara e um termo de aceitação de cookies para os usuários. |

| RNF07 | Manutenibilidade | O código deve ser escrito de forma que facilite a manutenção e futuras refatorações.                 |

#### **Backlog do Produto**

**Temas**

| Código | Tema                      | Descrição                                                                       |
|--------|---------------------------|---------------------------------------------------------------------------------|
| TH01   | Gestão de Dietas           | Funcionalidades relacionadas ao gerenciamento de dietas e alimentos.            |
| TH02   | Agendamento e Consultas    | Funcionalidades relacionadas ao agendamento e gerenciamento de consultas.       |
| TH03   | Experiência do Usuário     | Funcionalidades focadas na experiência e interface do usuário.                  |
| TH04   | Gerenciamento do Site      | Funcionalidades relacionadas ao gerenciamento e configuração do site.           |
| TH05   | Integração Contínua        | Funcionalidades relacionadas à automação de testes, integração e entrega contínua. |
| TH06   | Manutenção e Refatoração   | Funcionalidades focadas em manutenção e refatoração do sistema para sustentar a qualidade. |

**Épicos**

| Código do Tema | Código do Épico | Descrição                                                        |
|----------------|-----------------|------------------------------------------------------------------|
| TH01           | EP01            | Ajuste e Visualização de Alimentos                               |
| TH01           | EP02            | Criação e Gerenciamento de Planos de Dieta                       |
| TH01           | EP03            | Recomendação de Substituições                                    |
| TH01           | EP04            | Metas Nutricionais                                               |
| TH02           | EP05            | Marcação e Alteração de Consultas                                |
| TH02           | EP06            | Status e Notificações de Consultas                               |
| TH03           | EP07            | Estilo do Site e Personalização                                  |
| TH03           | EP08            | Facilidade de Uso e Interface                                    |
| TH03           | EP09            | Histórico de Dietas e Consultas                                  |
| TH03           | EP10            | Recursos Educativos e FAQs                                       |
| TH04           | EP11            | Inclusão de Informações no Cadastro                              |
| TH04           | EP12            | Página de Login Diferenciada                                     |
| TH04           | EP13            | Exportação de Relatórios                                         |
| TH04           | EP14            | Categorias de Alimentos                                          |
| TH05           | EP15            | Implementação de Integração Contínua                             |
| TH05           | EP16            | Automação de Testes e Deploy                                     |
| TH06          | EP17            | Identificação e Resolução de Débitos Técnicos                    |
| TH06           | EP18           | Refatoração do Código para Melhorias de Desempenho               |

**Histórias de Usuário**

| Código do Tema | Código do Épico | ID    | História de Usuário                                                                                   | Prioridade Média (incluindo WSJF) |
|----------------|-----------------|-------|--------------------------------------------------------------------------------------------------------|-----------------------------------|
| TH03           | EP08            | US07a | Eu, como cliente, quero que o menu de navegação tenha um botão claro para acessar minha dieta personalizada. | 9.67                              |
| TH03           | EP08            | US07b | Eu, como cliente, quero que o menu de navegação tenha uma opção direta para acessar minhas consultas agendadas. | 9.67                              |
| TH03           | EP08            | US07c | Eu, como cliente, quero que a página principal exiba apenas um resumo das informações essenciais da minha dieta. | 9.67                              |
| TH03           | EP08            | US07d | Eu, como cliente, quero que as páginas internas tenham botões grandes e visíveis para ações principais. | 9.67                              |
| TH03           | EP08            | US07e | Eu, como cliente, quero que o layout destaque as ações principais de forma clara.                       | 9.67                              |
| TH01           | EP02            | US11a | Eu, como gerente, quero criar um plano de dieta personalizado para cada cliente, com base em suas metas nutricionais. | 9.33                              |
| TH01           | EP02            | US11b | Eu, como gerente, quero adicionar alimentos específicos ao plano de dieta do cliente, de acordo com suas preferências. | 9.33                              |
| TH01           | EP02            | US11c | Eu, como gerente, quero visualizar uma lista de alimentos permitidos ao criar o plano de dieta do cliente. | 9.33                              |
| TH04           | EP13            | US13a | Eu, como gerente, quero exportar relatórios de progresso dos clientes em formato PDF com gráficos de evolução. | 9.33                              |
| TH04           | EP13            | US13b | Eu, como gerente, quero exportar históricos de dieta dos clientes em formato Excel, com filtros para selecionar datas. | 9.33                              |
| TH04           | EP13            | US13c | Eu, como gerente, quero escolher se o relatório incluirá apenas dados de calorias ou também informações nutricionais detalhadas. | 9.33                              |
| TH01           | EP04            | US15a | Eu, como gerente, quero definir metas de ingestão calórica diária para cada cliente.                     | 9.00                              |
| TH01           | EP04            | US15b | Eu, como gerente, quero definir metas de ingestão de proteínas, carboidratos e gorduras para cada cliente. | 9.00                              |

---

*A priorização das Histórias de Usuário foi feita com base em três critérios: Viabilidade (V), Agregação ao Site (AS) e Opinião do Cliente (OC), cada um avaliado de 1 a 10. A prioridade média foi calculada pela média simples dessas notas.*

## Histórico de Versão

| Data       | Versão | Descrição                               | Autor               |
| ---------- | ------ | --------------------------------------- | ------------------- |
| 31/07/2024 | 1.0    | Criação do Backlog e ajustes do MK-Docs | André João C Gomes  |
| 13/08/2024 | 1.1    | Ajustes do Backlog                      | André João C Gomes  |
| 19/08/2024 | 1.2    | Reestruturação do projeto               | Ana Catarina Santos |
| 19/08/2024 | 1.3    | correção e revisão | Igor Justino
