module.exports = {
	host: "127.0.0.1",
	username: "postgres",
	password: "admin",
	database: "nodeauth-TDD",
	dialect: "postgres",
	// operatorsAliases: false, // configuração para desabilitar um warning do Sequelize
	logging: false, //  não mostrar muitos logs enquando rodamos as migrations
  define: {
    timestamps: true, // força com que toda tabela criada no banco, venha com campo 'CREATED AT' & 'UPDATED AT'
    underscored: true, // força com que a tabela seja criada no formato 'underscore/underline' e não no estilo camel case
    underscoredAll: true
  }
};
