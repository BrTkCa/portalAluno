var sequelize = require('./../libs/pg_db_connect');

var TipoTurma = sequelize.define('TipoTurma', {
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
    tableName: 'tbl_tipo_turma'
    });
TipoTurma.schema("acad");

module.exports = TipoTurma;