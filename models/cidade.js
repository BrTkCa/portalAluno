var sequelize = require('./../libs/pg_db_connect');
var Estado = require('./estado');

var Cidade = sequelize.define('Cidade', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	nome: {
		type: sequelize.Sequelize.STRING,
	    field: 'nome'	
	},
	estado_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'estado_id'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_cidade'
    });
Cidade.schema("global");

Cidade.belongsTo(Estado, {foreignKey: 'id'});
Estado.hasOne(Cidade, {foreignKey: 'estado_id'});

module.exports = Cidade;