# Roteiro Reestruturado da Apresentação em Grupo (10 Minutos)

- **Formato:** Slides com Prints Ilustrativos + 1 Vídeo Único de Demonstração Prática
- **Tempo Total:** 10 Minutos (~1m40s por integrante)
- **Integrantes:** 6 pessoas

---

## Estrutura Geral de Mídias
- **Slides (Prints):** Arquitetura, Tabelas do MySQL, Prints de Teste de Terminal, Prints de Código no VS Code com destaques visuais (caixas vermelhas/amarelas nas linhas importantes).
- **Vídeo (1 Vídeo Único):** Apresentado no bloco do Integrante 2 (~1 minuto), mostrando o Front-End funcionando e a gravação no MySQL.

---

### Integrante 1 — Introdução, Visão Geral & Banco de Dados (~1m40s)
* **Objetivo:** Abrir a apresentação, situar o tema e mostrar o modelo de dados.
* **Nos Slides (Apenas Prints/Diagramas):**
  1. *Slide 1:* Capa com nome do projeto e integrantes.
  2. *Slide 2:* Diagrama da Arquitetura Geral (**Node.js + Prisma ORM + MySQL Workbench**).
  3. *Slide 3:* Print do **MySQL Workbench** destacando a tabela `produtos` criada via *Prisma Migrations*.
* **Fala Sugerida:**
  * Apresenta o grupo e a proposta da aplicação.
  * Explica sucintamente como o Node.js se conecta ao MySQL através do ORM Prisma.
  * Mostra no print como o Prisma Migrations estruturou automaticamente as colunas da tabela no banco de dados.

---

### Integrante 2 — Demonstração Prática (O Vídeo Único da Aplicação) (~1m40s)
* **Objetivo:** Provar o funcionamento do sistema com o vídeo contínuo.
* **Nos Slides (Vídeo Embutido):**
  * *Slide 4:* Vídeo gravado (~1min a 1min20s) rodando de forma fluida.
* **No Vídeo (Narra em tempo real):**
  1. *Cena 1 (Front-End):* Preenchimento e envio do formulário de cadastro de um novo produto.
  2. *Cena 2 (Sincronização):* Alternância rápida para a tela do MySQL Workbench e execução da query, mostrando a nova linha inserida.
  3. *Cena 3 (Filtros):* Uso da busca/filtros por Categoria e ID na interface Web.
* **Fala Sugerida:**
  * Introduz o fluxo do usuário e narra o vídeo demonstrando a comunicação Front-End <-> Banco de Dados em tempo real.

---

### Integrante 3 — Persistência de Dados & Resiliência (~1m40s)
* **Objetivo:** Explicar por que o banco é necessário e demonstrar o "Teste de Resiliência".
* **Nos Slides (Prints):**
  1. *Slide 5:* Infográfico curto (Dados em Memória vs. Banco Relacional).
  2. *Slide 6 (Print Duplo):* Terminal do Node.js sendo interrompido (`Ctrl + C` / restart) + Print do navegador sendo recarregado com os dados intactos.
* **Fala Sugerida:**
  * Explica o conceito de persistência de dados.
  * Narra os prints do "Teste da Verdade": prova que mesmo derrubando/reiniciando o servidor backend, as informações dos produtos continuam salvas no MySQL.

---

### Integrante 4 — Código Backend: Configuração & Prisma Client (~1m40s)
* **Objetivo:** Explicar a estrutura base do código no VS Code.
* **Nos Slides (Prints do VS Code com caixa de destaque):**
  1. *Slide 7:* Print do arquivo `.env` (variável `DATABASE_URL`) e arquivo de conexão.
  2. *Slide 8:* Print do trecho de instanciação do `prismaClient`.
* **Fala Sugerida:**
  * Explica como o backend lê as credenciais de acesso ao banco através de variáveis de ambiente.
  * Detalha a criação da instância do `PrismaClient`, que é a ponte para executar as operações no banco via JavaScript.

---

### Integrante 5 — Código Backend: Rotas Assíncronas (`async/await`) (~1m40s)
* **Objetivo:** Explicar a lógica de busca e inserção de dados.
* **Nos Slides (Prints do VS Code com caixas de destaque):**
  1. *Slide 9:* Print da rota de busca (`findMany`) e de criação (`create`).
* **Fala Sugerida:**
  * Explica como o JavaScript lida com operações assíncronas no banco de dados (tempo de resposta I/O).
  * Destaca o uso do operador `await` para pausar a execução até o MySQL responder, evitando enviar dados vazios/incompletos ao Front-End.

---

### Integrante 6 — Código Backend: Tratamento de Tipos & Conclusão (~1m40s)
* **Objetivo:** Explicar o tratamento de dados e finalizar a apresentação.
* **Nos Slides (Prints + Slide Final):**
  1. *Slide 10:* Print do tratamento de requisições no VS Code com destaque em `Number(req.params.id)`.
  2. *Slide 11:* Slide de Conclusão / Aprendizados / Agradecimento.
* **Fala Sugerida:**
  * Explica por que é necessário converter `req.params.id` (String) para `Number(id)`, atendendo à tipagem forte do Prisma/MySQL.
  * Resume os principais aprendizados do grupo (integração full-stack, ORM, banco relacional).
  * Encerra a apresentação e abre espaço para perguntas da banca/professora.

---

## Dicas Rápidas de Execução
1. **Destaques visuais nos prints:** Use retângulos vermelhos ou amarelos nos prints do VS Code para destacar a linha exata que o integrante está explicando.
2. **Vídeo sem áudio nativo:** Grave o vídeo sem som e deixe o Integrante 2 narrar ao vivo durante o slide. Isso deixa a apresentação mais natural e evita problemas de volume do computador.
3. **Cronômetro:** Façam um ensaio geral marcando o tempo de cada um para garantir que ninguém ultrapasse 1m40s.
