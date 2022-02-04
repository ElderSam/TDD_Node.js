const routes = require("express").Router();

const SessionController = require('./app/controllers/SessionController')
const authMiddleware = require('./app/middleware/auth')

// Routes definition
routes.post('/sessions', SessionController.store)

routes.get('/dashboard', (req, res) => {
    res.status(200).send()
})

module.exports = routes;