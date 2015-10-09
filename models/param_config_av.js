var sequelize = require('./../libs/pg_db_connect');

var ParamConfiguracaoAV = sequelize.define('ParamConfiguracaoAV', {
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
	freq_apr: {
		type: sequelize.Sequelize.DECIMAL,
	    field: 'freq_apr'	
	},
	mf_apr_final: {
		type: sequelize.Sequelize.DECIMAL,
	    field: 'mf_apr_final'	
	},
	mf_exame: {
		type: sequelize.Sequelize.DECIMAL,
	    field: 'mf_exame'	
	},
	sigla: {
		type: sequelize.Sequelize.STRING,
	    field: 'sigla'	
	},
	total_per_av: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'total_per_av'	
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_param_config_av'
    });
ParamConfiguracaoAV.schema("acad");

module.exports = ParamConfiguracaoAV;