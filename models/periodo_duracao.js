var sequelize = require('./../libs/pg_db_connect');

var PeriodoDuracao = sequelize.define('PeriodoDuracao', {
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
    tableName: 'tbl_periodo_duracao'
    });
PeriodoDuracao.schema("acad");

module.exports = PeriodoDuracao;