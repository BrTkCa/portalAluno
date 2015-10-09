var sequelize = require('./../libs/pg_db_connect');
var StatusCurso = require('./status_curso');
var AreaConhecimento = require('./area_conhecimento');
var PeriodoDuracao = require('./periodo_duracao');
var NivelCurso = require('./nivel_curso');
var ModalidadeEnsino = require('./mod_ensino');

var Curso = sequelize.define('Curso', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	areaconhecimento: {
		type: sequelize.Sequelize.STRING,
	    field: 'areaconhecimento'	
	},
	idorion: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'idorion'
	},
	nome: {
		type: sequelize.Sequelize.STRING,
    	field: 'nome'
	},
	titulacao: {
		type: sequelize.Sequelize.STRING,
    	field: 'titulacao'
	},
	nivel_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'nivel_id'
	},
	apresentacao: {
		type: sequelize.Sequelize.TEXT,
    	field: 'apresentacao'
	},
	codinep: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'codinep'
	},
	codlegado: {
		type: sequelize.Sequelize.STRING,
    	field: 'codlegado'
	},
	metodologia: {
		type: sequelize.Sequelize.TEXT,
    	field: 'metodologia'
	},
	permaximo: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'permaximo'
	},
	perminimo: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'perminimo'
	},
	pernormal: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'pernormal'
	},
	perfilegresso: {
		type: sequelize.Sequelize.TEXT,
    	field: 'perfilegresso'
	},
	prerequisito: {
		type: sequelize.Sequelize.TEXT,
    	field: 'prerequisito'
	},
	publicoalvo: {
		type: sequelize.Sequelize.TEXT,
    	field: 'publicoalvo'
	},
	sigla: {
		type: sequelize.Sequelize.STRING,
    	field: 'sigla'
	},
	id_area_conhecimento: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_area_conhecimento'
	},
	id_modalidade: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_modalidade'
	},
	id_periodo: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_periodo'
	},
	id_status: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_status'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_curso'
    });
Curso.schema("acad");

Curso.hasMany(StatusCurso, {foreignKey: 'id'});
StatusCurso.belongsTo(Curso, {foreignKey: 'id_status'});

Curso.hasMany(AreaConhecimento, {foreignKey: 'id'});
AreaConhecimento.belongsTo(Curso, {foreignKey: 'id_area_conhecimento'});

Curso.hasMany(PeriodoDuracao, {foreignKey: 'id'});
PeriodoDuracao.belongsTo(Curso, {foreignKey: 'id_periodo'});

Curso.hasMany(NivelCurso, {foreignKey: 'id'});
NivelCurso.belongsTo(Curso, {foreignKey: 'id_nivel'});

Curso.hasMany(ModalidadeEnsino, {foreignKey: 'id'});
ModalidadeEnsino.belongsTo(Curso, {foreignKey: 'id_modalidade'});

module.exports = Curso;