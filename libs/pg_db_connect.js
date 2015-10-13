// Script responsavel por obter um conexao com
// o postgreSQL e exporta-la.
var Sequelize = require('sequelize');

	module.exports = new Sequelize('bd_integracao', 'pgsql', '123', {
		host: '172.16.2.7',
		dialect: 'postgres',
		pool: {
			max: 10,
			min: 0,
			idle: 10000
		},
	});

