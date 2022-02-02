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

--------------------
## Instaling sequelize & other libs
``yarn add sequelize pg``
``yarn add sequelize-cli -D``


## Libraries
### Sequelize
É um ORM que facilita a gente lidar com os dados e tabelas do nosso Banco de Dados, utilizando sintaxe de `Javascript` ao invés de `SQL`.

### pg
lib para o sequelize lidar com o Banco de Dados PostgreSQL

### sequelize-cli;
ajuda a lidar com a criação das migrations, que são os arquivos que vão controlar a versão das nossas tabelas do BD
