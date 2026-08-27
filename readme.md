#  Atividade Prática & Pesquisa: Do SQL Puro ao Prisma ORM com MySQL | Por Daniel Richard - 25/08/2026


Este documento responde às perguntas norteadoras para o desenvolvimento do projeto.

### 1. Qual é a principal diferença entre usar o driver mysql2 diretamente e utilizar o **Prisma ORM** em uma aplicação Node.js?

O driver mysql2 cria uma conexão de baixo nível com o node.js, permitindo que você escreva o código SQL puro em strings. Já a arquitetura Prisma ORM (Mapeamento Objeto-Relacional) gerencia métodos em JavaScript/TypeScript de forma robusta, além de ajudar a gerenciar, criar e consultar o banco de dados de forma segura.

---

### 2. O que é o arquivo schema.prisma e qual é a função do comando npx prisma migrate dev?

O arquivo schema.prisma define as principais configurações do Prisma ORM. Nele é possível gerenciar a comunicação com o banco de dados, criar, definir e gerenciar suas estruturas. O comando **npx prisma migrate** dev atualiza automaticamente o seu banco de dados local, comparando-o com o seu arquivo schema.prisma. Além disso, ele cria um histórico de migrações com instruções SQL em uma pasta dedicada chamada prisma/migrations.

---

### 3. Como os tipos do MySQL (VARCHAR, INT, DECIMAL, BOOLEAN, DATETIME) são traduzidos no Prisma?

Eles são traduzidos na forma escalar padrão do prisma. Veja a tabela abaixo:
<br>
<br>

##### Tabela de Mapeamento de Tipos Dados

| Tipo no MySQL | Tipo Escalar no Prisma | Atributo de Tipo Nativo ||
| :--- | :--- | :--- | :--- |
| `VARCHAR(n)` | `String` | `@db.VarChar(n)` |
| `INT` | `Int` | `@db.Int` |
| `DECIMAL(p, s)` | `Decimal` | `@db.Decimal(p, s)` |
| `BOOLEAN` / `TINYINT(1)` | `Boolean` | `@db.TinyInt(1)` |
| `DATETIME` | `DateTime` | `@db.DateTime(3)` |

---