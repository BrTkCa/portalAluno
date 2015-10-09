var sequelize = require('./../libs/pg_db_connect');

var Disciplina = sequelize.define('Disciplina', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	cargahoraria: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'cargahoraria'	
	},
	nome: {
		type: sequelize.Sequelize.STRING,
	    field: 'nome'	
	},
	sigla: {
		type: sequelize.Sequelize.STRING,
	    field: 'sigla'	
	},
	codlegado: {
		type: sequelize.Sequelize.STRING,
	    field: 'codlegado'	
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_disc'
    });
Disciplina.schema("acad");

module.exports = Disciplina;