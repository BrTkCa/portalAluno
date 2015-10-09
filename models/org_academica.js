var sequelize = require('./../libs/pg_db_connect');

var OrganizacaoAcademica = sequelize.define('OrganizacaoAcademica', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	descricao: {
		type: sequelize.Sequelize.STRING,
    	field: 'descricao'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_org_academica'
    });
OrganizacaoAcademica.schema("acad");

module.exports = OrganizacaoAcademica;