var sequelize = require('./../libs/pg_db_connect');

var ClassificacaoDisciplina = sequelize.define('ClassificacaoDisciplina', {
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
    tableName: 'tbl_classe_disciplina'
    });
ClassificacaoDisciplina.schema("acad");

module.exports = ClassificacaoDisciplina;