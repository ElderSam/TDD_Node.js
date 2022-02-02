# Applying TDD (Test-driven Development)

- Jest
- REST API
- Login with JWT

--------------------
Separei a lógica do servidor (aplicação) da parte de 'ouvir' porta para quando rodar os testes não precisar alocar nenhuma porta

Dentro de `src/`;
``app.js`` => lógica do servidor (aplicação)
``server.js`` => alocar portas
``routes.js`` => rotas da aplicação

----------------------------------------------
## Working with Sequelize
### Instaling sequelize & other libs
``yarn add sequelize pg`` (I'm using PostgreSQL)
``yarn add sequelize-cli -D``

### Sequelize init
``yarn sequelize init``
cria arquivos `config/config.json` & `models/index.js` & the emptys folders `migrations/` and `seeders/`;

### running migrations
``yarn sequelize migration:create --name=create-users``

----------------------------------------------

## Libraries
### Sequelize
É um ORM que facilita a gente lidar com os dados e tabelas do nosso Banco de Dados, utilizando sintaxe de `Javascript` ao invés de `SQL`.

### pg
lib para o sequelize lidar com o Banco de Dados PostgreSQL

### sequelize-cli;
ajuda a lidar com a criação das migrations, que são os arquivos que vão controlar a versão das nossas tabelas do BD
