var sequelize = require('./../libs/pg_db_connect');
var Pessoa = require('./pessoa');

var Aluno = sequelize.define('Aluno', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	codlegado: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'codlegado'	
	},
	pessoa_id: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'pessoa_id'	
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_param_config_av'
    });
Aluno.schema("acad");

Aluno.belongsTo(Pessoa, {foreignKey: 'id'});
Pessoa.hasOne(Aluno, {foreignKey: 'pessoa_id'});

module.exports = Aluno;