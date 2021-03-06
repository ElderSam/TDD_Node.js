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

-----------

## Tests with Jest
https://jestjs.io/
Node.js unit tests, mocks, coverage, etc.

1. install jest
``yarn add jest -D``

2. Jest Init
``yarn jest --init``

3. configure your `jest.config.js` & create your test in __tests__/integration or ___tests__/unit
4. run your tests
``yarn test``

NOTE: you should create your `.env` file.
example; 
```
DB_HOST=127.0.0.1
DB_USER=***
DB_PASS=***
DB_NAME=***
```

### tests coverage
run ``yarn jest`` and you can see the test coverage of your code.
You can see each file and line that need coverage accessing `__tests__/coverage/lcov-report/index.html`

----
## Testing routes with Supertest
1. install;
``yarn add supertest -D``

-----------

### Environment Variables in Windows
https://www.edureka.co/community/77202/how-can-i-set-node-env-production-on-windows

----------------------------------------------
## Working with Sequelize
### Instaling sequelize & other libs
``yarn add sequelize pg`` (I'm using PostgreSQL)
``yarn add sequelize-cli -D``

### Sequelize init
``yarn sequelize init``
create files `config/config.json` & `models/index.js` & the emptys folders `migrations/` and `seeders/`;

### Create migrations
``yarn sequelize migration:create --name=create-users``

### Create a Database in PostgreSQL
If you are using postgreSQL & pgAdmin;
Create a new database in PgAdmin
NOTE: you can change the username & password in `src/config/database.js` and the database name must be the same name

### running migrations
``yarn sequelize db:migrate``
create tables in the database if they don't exist & update database
after create your table you can access in pgAdmin -> Databases -> 'your_database' -> Schemas -> public -> Tables

----------------------------------------------
## Libraries
###  Jest
https://jestjs.io/
Node.js unit tests, mocks, coverage, etc.

----------

### Sequelize
É um ORM que facilita a gente lidar com os dados e tabelas do nosso Banco de Dados, utilizando sintaxe de `Javascript` ao invés de `SQL`.

#### pg
lib para o sequelize lidar com o Banco de Dados PostgreSQL

#### sequelize-cli;
ajuda a lidar com a criação das migrations, que são os arquivos que vão controlar a versão das nossas tabelas do BD

-----------------------------
## Tutorial link
https://www.youtube.com/watch?v=2G_mWfG0DZE&list=PLmX5_ydv5jg-WRtaCb72IbYiuYvIacooR&index=5&t=1240s