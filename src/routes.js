const routes = require("express").Router();
const SessionController = require('./app/controllers/SessionController')

// Definição das Rotas
routes.post('/sessions', SessionController.store)

module.exports = routes;