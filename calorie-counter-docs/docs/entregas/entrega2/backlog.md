# BackLog do Produto

# Histórico de Revisão

| Data       | Versão | Descrição                                  | Autor              |
| ---------- | ------ | ------------------------------------------ | ------------------ |
| 31/07/2024 | 0.1    | Criação do Backlog e ajustes do MK-Docs    | André João C Gomes |

O backlog do produto é uma lista com todos os requisitos, não necessariamente só os necessários para o desenvolvimento do projeto. O backlog contém: epics, features e users stories. Bem como, caso haja necessidade de mudança no produto, o backlog seria a fonte principal.

# Persona

1) Gerente(nutricionista): Pessoa que utiliza a parte de marcação de consultas, e de preparação da dieta dos pacientes, bem como vê/mostra a diversidade de alimentos para adicionar na dieta.

2) Cliente(paciente): Pessoa que apenas visualiza a dieta que foi posta para si, e consegue ver se tem outros alimentos para substituir.

# Requisitos Funcionais

Os requisitos funcionais são, de certa forma, as funcionalidades mínimas e máximas de um software, e isso depende de diversos fatores, como a abordagem utilizada para descrever os requisitos, o usuário de software, dentre outros. No projeto Calorie Explorer, será analizado os seguintes critérios para ver a viabilidade do projeto: Viabilidade(V), Agregação ao Site(AS), Opinião da Cliente(OC). Todos vão de notas 1 a 10, e seu grau de prioridade será dado de acordo com a média desses critérios, no caso(V + AS + OC)/3.

|Épicos|Feature|User History|Viabilidade|AS|OC|Nota Final|
|--------|-------|------|-------------|----|----|-----------|
|[EP01] Gestão da dieta|Pesquisa e criação da dieta|[US01] Eu, como gerente, quero ver a quantidade de Kcal dos alimentos por 100g, e por eles na dieta do meu cliente, e alterar caso necessário.| 7 | 10 | 10 | 9 |
|[EP01] Gestão da dieta| Pesquisa e criação da dieta|[US02] Eu, como cliente, quero conseguir ver os alimentos da minha dieta e ver se dar para trocar por outras opções.| 10 | 6 | 9 | 8.3 |
|[EP01] Gestão da dieta|Agendamento|[US03]Eu, como gerente, quero poder marcar o horário da consulta, e altera-la, caso necessário. e que haja uma agenda para facilitar isso.| 7 | 6 | 10 | 7.6 |
|[EP01] Gestão da dieta|Agendamento|[US04] Eu, como cliente, quero poder ver quando minha consulta foi marcada, se eu perdi a minha consulta ou se ela foi alterada para algum outro dia, e se possível, receber uma mensagem ou ligação quando estiver perto da minha consulta.| 6 | 8 | 7 | 7 |

# Critérios de Aceitação

| User History | Descrição | Critérios de Aceitação |
|--------------|-----------|------------------------|
|[US01]|Cadastro do Alimento|O site deve conter pelo menos 30 produtos diferentes, com as devidas informações calóricas;|
|[US02]|Visão dos Alimentos|O site além de mostrar os produtos e suas calorias, deverá conter uma opção que dê para mostrar pelo menos 2 alimentos que substituam o alimento que o paciente não gostar;|
|[US03]|Agendamento das Consultas| No site deverá conter uma página especial, que somente a nutricionista terá acesso, para poder por a data da consulta marcada, e edita-la, caso venha a ser necessário;|
|[US04]|Pagina Perfil| No site haverá uma pagina de perfil apenas para os clientes, nela será visto algumas informações pessoais do cliente, além de sua dieta e dos dias que estão marcadas suas próximas consultas, bem como aquelas que ele já compareceu;|

# Requisitos Não Funcionais

|Categoria| Requisitos|
|---------|-----------|
|interface|[RNF01] A interface deve conter um modo de alto contraste, com tipagens de textos diferentes, deixando assim, mais acessível;|
|interface|[RNF02] As páginas tem que ser estilizadas com cores, icones e fontes padronizadas;|
|usabilidade|[RNF03] O site deve ser responsivel, podendo ser acessado por vários diferentes eletrônicos com telas diferentes;|
|implementação|[RNF04] O Back-End do site deve construído com javascript e MySQL;|
|Suportabilidade|[RNF05] O site deve ser compatível com os vários navegadores que são usados,como: Opera, OperaGX, Microsoft Edge, Chrome, Fire Fox etc;|
|Confiabilidade|[RNF06] O site deve possuir uma Política de Privacidade clara aos clientes, bem como um termo de aceitação de cookies;|