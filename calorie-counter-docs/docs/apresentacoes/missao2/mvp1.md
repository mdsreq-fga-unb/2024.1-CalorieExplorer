## MPV

Neste ponto, abordamos a implementação do conceito de Mínimo Produto Viável (MPV). O MPV é uma abordagem estratégica que visa lançar uma versão simplificada de um produto com o objetivo de validar suposições e obter feedback inicial dos usuários. Com isso, na tabela a seguir, é mostrado o número referente a história de usuário, o nome e os critérios de aceitação.

### MVP

| ID   | Nome da História de Usuário                      | Critérios de Aceitação                                                                                                                                                                          |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **US01** | Visualização e Ajuste de Kcal                   | 1. Visualizar quantidade de Kcal por 100g.<br>2. Ajustar Kcal e refletir na dieta.<br>3. Confirmação de ajustes.                                                                    |
| **US02** | Troca de Alimentos na Dieta                     | 1. Visualizar alimentos da dieta.<br>2. Interface intuitiva.                                                                                                                               |
| **US03** | Personalização do Estilo do Site                | 1. Personalizar o estilo do site.<br>2. Compatibilidade com o tema corporativo.<br>3. Pré-visualização do design.<br>4. Aplicação imediata das mudanças.<br>5. Reversibilidade das alterações.                                                                                                                              |
| **US06** | Gerenciamento de Categorias de Alimentos        | 1. Verificação automática de categorias de alimentos.<br>2. Inserção de alimentos com base em critérios pré-definidos.<br>3. Alerta para categorias com itens insuficientes.                      |
| **US07** | Site Intuitivo e de Fácil Entendimento          | 1. Interface clara e simples.<br>2. Avaliação de usabilidade.<br>3. Tempo de carregamento mínimo.<br>4. Testes de acessibilidade.                                 |
| **US08** | Tela de Cadastro Completa                       | 1. Inclusão de todos os campos obrigatórios: CPF, nome completo, idade, gênero, email, peso e altura.<br>2. Validação de dados obrigatórios.<br>3. Confirmação de cadastro.                 |
| **US09** | Página de Login para Pacientes                  | 1. Página de login para pacientes.<br>2. Segurança no acesso.<br>3. Interface distinta da página de gerenciamento de dados.<br>4. Recuperação de senha para pacientes.                                                                             |

---

Agora a US09 está ajustada para refletir que a página de login será apenas para pacientes e não para gerentes.

### Justificativa para Alterações no MVP

Devido a limitações de tempo e à ausência de quatro membros da equipe, foi necessário ajustar o escopo do MVP para garantir a entrega dentro do prazo estabelecido. Diante dessa situação, optamos por retirar algumas funcionalidades essenciais e simplificar a abordagem do MVP para focar nas funcionalidades mais críticas e impactantes para o projeto. As principais alterações realizadas foram:

1. **Remoção de Histórias de Usuário**:
   - **US10 - Acesso ao Histórico de Dietas e Consultas**:
     - **Justificativa**: A funcionalidade de visualização e exportação do histórico de dietas e consultas foi removida para simplificar o MVP, permitindo que o time se concentre no desenvolvimento das funcionalidades essenciais.

   - **US11 - Gerenciamento de Planos de Dieta**:
     - **Justificativa**: A criação, edição e ajuste automático de planos de dieta foram removidos para priorizar a implementação de funcionalidades mais críticas no MVP.

   - **US12 - Recomendações de Substituições Alimentares**:
     - **Justificativa**: A recomendação e registro de substituições alimentares foram retirados para reduzir a complexidade do sistema, focando no núcleo das funcionalidades básicas.

   - **US13 - Exportação de Relatórios**:
     - **Justificativa**: A funcionalidade de geração e exportação de relatórios em múltiplos formatos foi removida para priorizar o desenvolvimento de características essenciais para a operação do sistema.

   - **US14 - Acesso a Recursos Educativos e FAQs**:
     - **Justificativa**: A seção de recursos educativos e FAQs foi retirada para permitir um foco maior no desenvolvimento das funcionalidades principais e na experiência do usuário essencial.

   - **US15 - Definição e Monitoramento de Metas Nutricionais**:
     - **Justificativa**: O monitoramento de metas nutricionais e relatórios detalhados foi removido para garantir que o MVP seja entregue a tempo com as funcionalidades mais críticas em operação.

2. **Alterações nas Histórias de Usuário Restantes**:
   - **US03 - Personalização do Estilo do Site**:
     - **Justificativa**: Ajustada para garantir a personalização do estilo do site, compatível com o tema corporativo, com aplicação e reversibilidade das mudanças.

   - **US06 - Gerenciamento de Categorias de Alimentos**:
     - **Justificativa**: Simplificada para focar na verificação automática e alerta para categorias, removendo o relatório semanal para reduzir a complexidade.

   - **US07 - Site Intuitivo e de Fácil Entendimento**:
     - **Justificativa**: Atualizada para incluir avaliação de usabilidade e testes de acessibilidade, assegurando uma experiência de usuário clara e inclusiva.

   - **US08 - Tela de Cadastro Completa**:
     - **Justificativa**: Atualizada para garantir a inclusão de todos os campos obrigatórios e validação de dados, assegurando perfis completos e precisos.

   - **US09 - Página de Login para Pacientes**:
     - **Justificativa**: Ajustada para refletir que a página de login será exclusiva para pacientes, com remoção da página para gerentes, que será cadastrada diretamente no back end.

Essas mudanças foram feitas para assegurar que o MVP entregue no prazo estabelecido inclua as funcionalidades essenciais e viáveis, enquanto se concentra nas necessidades mais críticas dos usuários finais.

| Data       | Versão | Descrição                        | Autor                                               |
| ---------- | ------ | -------------------------------- | --------------------------------------------------- |
| 19/08/2024 | 1.0    | Adicionando as definições do MVP | Ana Catarina Santos, Nicolas Bonfim, Pedro Henrique |
| 05/08/2024 | 1.2    | Restruturação do escopo | Igor Justino |
| 08/08/2024 | 1.3    | Restruturação do escopo | Igor Justino |

