const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
	name: "Diego",
	email: "diego@rocketseat.com.br",
	password_hash: "19823471293712983",
});

// Definição das Rotas

module.exports = routes;