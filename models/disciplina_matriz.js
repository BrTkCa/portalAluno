var sequelize = require('./../libs/pg_db_connect');
var MatrizCurricular = require('./matriz_curricular');
var ClassificacaoDisciplina = require('./classificacao_disciplina');
var Disciplina = require('./disciplina');
var ModalidadeEnsino = require('./mod_ensino');
var ParametroConfiguracaoAV = require('./param_config_av');

var DisciplinaMatriz = sequelize.define('DisciplinaMatriz', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	chpratica: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'chpratica'	
	},
	chteorica: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'chteorica'
	},
	chtotal: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'chtotal'
	},
	credacademico: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'credacademico'
	},
	credfinanceiro: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'credfinanceiro'
	},
	etapa: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'etapa'
	},
	gerahistorico: {
		type: sequelize.Sequelize.BOOLEAN,
    	field: 'gerahistorico'
	},
	obrigatoria: {
		type: sequelize.Sequelize.BOOLEAN,
    	field: 'obrigatoria'
	},
	optativa: {
		type: sequelize.Sequelize.BOOLEAN,
    	field: 'optativa'
	},
	ordem: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'ordem'
	},
	reprova: {
		type: sequelize.Sequelize.BOOLEAN,
    	field: 'reprova'
	},
	id_classificacao: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_classificacao'
	},
	id_disciplina: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_disciplina'
	},
	id_matriz: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_matriz'
	},
	id_modalidade: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_modalidade'
	},
	id_param_config_av: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_param_config_av'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_disc_matriz'
    });
DisciplinaMatriz.schema("acad");

DisciplinaMatriz.hasMany(MatrizCurricular, {foreignKey: 'id'});
MatrizCurricular.belongsTo(DisciplinaMatriz, {foreignKey: 'id_matriz'});

DisciplinaMatriz.hasMany(ClassificacaoDisciplina, {foreignKey: 'id'});
ClassificacaoDisciplina.belongsTo(DisciplinaMatriz, {foreignKey: 'id_classificacao'});

DisciplinaMatriz.hasMany(Disciplina, {foreignKey: 'id'});
Disciplina.belongsTo(DisciplinaMatriz, {foreignKey: 'id_disciplina'});

DisciplinaMatriz.hasMany(ModalidadeEnsino, {foreignKey: 'id'});
ModalidadeEnsino.belongsTo(DisciplinaMatriz, {foreignKey: 'id_modalidade'});

DisciplinaMatriz.hasMany(ParametroConfiguracaoAV, {foreignKey: 'id'});
ParametroConfiguracaoAV.belongsTo(DisciplinaMatriz, {foreignKey: 'id_param_config_av'});

module.exports = DisciplinaMatriz;