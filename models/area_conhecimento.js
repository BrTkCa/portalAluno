var sequelize = require('./../libs/pg_db_connect');

var AreaConhecimento = sequelize.define('AreaConhecimento', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	cod_inep_cnpq: {
		type: sequelize.Sequelize.STRING,
	    field: 'cod_inep_cnpq'	
	},
	descricao: {
		type: sequelize.Sequelize.STRING,
	    field: 'descricao'	
	}	
  }, {
  	timestamps: false,
    tableName: 'tbl_area_conhecimento'
    });
AreaConhecimento.schema("acad");

module.exports = AreaConhecimento;