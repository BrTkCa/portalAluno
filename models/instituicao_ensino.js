var sequelize = require('./../libs/pg_db_connect');
var OrganizacaoAcademica = require('./org_academica');

var InstituicaoEnsino = sequelize.define('InstituicaoEnsino', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	codies: {
		type: sequelize.Sequelize.STRING,
	    field: 'codies'	
	},
	nome: {
		type: sequelize.Sequelize.STRING,
    	field: 'nome'
	},
	categoriaadm_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'categoriaadm_id'
	},
	organizacao_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'organizacao_id'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_inst_ensino'
    });
InstituicaoEnsino.schema("acad");

InstituicaoEnsino.hasMany(OrganizacaoAcademica, {foreignKey: 'id'});
OrganizacaoAcademica.hasOne(InstituicaoEnsino, {foreignKey: 'organizacao_id'});

module.exports = InstituicaoEnsino;