var sequelize = require('./../libs/pg_db_connect');
var Estado = require('./estado');

var Documentacao = sequelize.define('Documentacao', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	dataemissaorg: {
		type: sequelize.Sequelize.DATE,
	    field: 'dataemissaorg'	
	},
	cpf: {
		type: sequelize.Sequelize.STRING,
    	field: 'cpf'
	},
	numtiteleitor: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'numtiteleitor'
	},
	orgaorg: {
		type: sequelize.Sequelize.STRING,
    	field: 'orgaorg'
	},
	rg: {
		type: sequelize.Sequelize.STRING,
    	field: 'rg'
	},
	secaotiteleitor: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'secaotiteleitor'
	},
	zonatiteleitor: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'zonatiteleitor'
	},
	ufrg_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'ufrg_id'
	},
	dataemissaotit: {
		type: sequelize.Sequelize.DATE,
    	field: 'dataemissaotit'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_documentacao'
    });
Documentacao.schema("global");

Documentacao.belongsTo(Estado, {foreignKey: 'id'});
Estado.hasOne(Documentacao, {foreignKey: 'ufrg_id'});

module.exports = Documentacao;