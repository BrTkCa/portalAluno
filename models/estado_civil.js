var sequelize = require('./../libs/pg_db_connect');
var EstadoCivil = require('./estado_civil');

var EstadoCivil = sequelize.define('EstadoCivil', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	descricao: {
		type: sequelize.Sequelize.STRING,
	    field: 'descricao'	
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_estado_civil'
    });
EstadoCivil.schema("global");

module.exports = EstadoCivil;