var sequelize = require('./../libs/pg_db_connect');

var Estado = sequelize.define('Estado', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	descricao: {
		type: sequelize.Sequelize.STRING,
	    field: 'descricao'	
	},
	sigla: {
		type: sequelize.Sequelize.STRING,
    	field: 'sigla'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_estado'
    });
Estado.schema("global");

module.exports = Estado;