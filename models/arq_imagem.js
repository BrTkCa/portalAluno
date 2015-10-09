var sequelize = require('./../libs/pg_db_connect');

var ArquivoImagem = sequelize.define('ArquivoImagem', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	altarquivo: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'altarquivo'	
	},
	dataarquivo: {
		type: sequelize.Sequelize.DATE,
    	field: 'dataarquivo'
	},
	largarquivo: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'largarquivo'
	},
	nomearquivo: {
		type: sequelize.Sequelize.STRING,
    	field: 'nomearquivo'
	},
	url: {
		type: sequelize.Sequelize.STRING,
    	field: 'url'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_arq_imagem'
    });
ArquivoImagem.schema("global");

module.exports = ArquivoImagem;