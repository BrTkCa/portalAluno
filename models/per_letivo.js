var sequelize = require('./../libs/pg_db_connect');
var InstituicaoEnsino = require('./instituicao_ensino');

var PeriodoLetivo = sequelize.define('PeriodoLetivo', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	codletivo: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'codletivo'	
	},
	datafim: {
		type: sequelize.Sequelize.DATE,
	    field: 'datafim'	
	},
	datainicio: {
		type: sequelize.Sequelize.DATE,
	    field: 'datainicio'	
	},
	descricao: {
		type: sequelize.Sequelize.STRING,
	    field: 'descricao'	
	},
	instituicao_id: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'instituicao_id'	
	}
  }, {
  	timestamps: false,
    tableName: 'tab_perletivo'
    });
PeriodoLetivo.schema("acad");

PeriodoLetivo.hasMany(InstituicaoEnsino, {foreignKey: 'id'});
InstituicaoEnsino.hasOne(PeriodoLetivo, {foreignKey: 'instituicao_id'});

module.exports = PeriodoLetivo;