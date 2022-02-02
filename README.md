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
