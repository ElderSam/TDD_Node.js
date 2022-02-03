require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

module.exports = {
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	dialect: process.env.DB_DIALECT || "postgres",
	storage: './__tests__/database.sqlite', // db for tests
	// operatorsAliases: false, // configuração para desabilitar um warning do Sequelize
	logging: false, //  não mostrar muitos logs enquando rodamos as migrations
  define: {
    timestamps: true, // força com que toda tabela criada no banco, venha com campo 'CREATED AT' & 'UPDATED AT'
    underscored: true, // força com que a tabela seja criada no formato 'underscore/underline' e não no estilo camel case
    underscoredAll: true
  }
};
