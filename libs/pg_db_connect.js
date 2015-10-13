// Script responsavel por obter um conexao com
// o postgreSQL e exporta-la.
var Sequelize = require('sequelize');

	module.exports = new Sequelize('bd_integracao', 'pgsql', '"MAKE@love"', {
		host: '138.186.3.22',
		dialect: 'postgres',
		pool: {
			max: 10,
			min: 0,
			idle: 10000
		},
	});

