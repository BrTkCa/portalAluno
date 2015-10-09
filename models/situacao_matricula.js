var sequelize = require('./../libs/pg_db_connect');

var SituacaoMatricula = sequelize.define('SituacaoMatricula', {
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
    tableName: 'tbl_sit_matricula'
    });
SituacaoMatricula.schema("acad");

module.exports = SituacaoMatricula;