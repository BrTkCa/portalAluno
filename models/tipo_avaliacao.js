var sequelize = require('./../libs/pg_db_connect');

var TipoAvaliacao = sequelize.define('TipoAvaliacao', {
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
	},
	tipo: {
		type: sequelize.Sequelize.STRING,
    	field: 'tipo'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_tipo_avaliacao'
    });
TipoAvaliacao.schema("acad");

module.exports = TipoAvaliacao;