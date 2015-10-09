var sequelize = require('./../libs/pg_db_connect');

var Turno = sequelize.define('Turno', {
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
    tableName: 'tbl_turno'
    });
Turno.schema("acad");

module.exports = Turno;