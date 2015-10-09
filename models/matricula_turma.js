var sequelize = require('./../libs/pg_db_connect');
var SituacaoMatricula = require('./situacao_matricula');
var Matricula = require('./matricula');
var TurmaDisciplina = require('./turma_disciplina');
var RegimeMatricula = require('./reg_matricula');

var MatriculaTurma = sequelize.define('MatriculaTurma', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	frequencia: {
		type: sequelize.Sequelize.DECIMAL,
	    field: 'frequencia'	
	},
	mediafinal: {
		type: sequelize.Sequelize.DECIMAL,
    	field: 'mediafinal'
	},
	id_matric: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_matric'
	},
	id_regime: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_regime'
	},
	id_situacao: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_situacao'
	},
	id_turma: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_turma'
	},
	aulasdadas: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'aulasdadas'
	},
	totalfaltas: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'totalfaltas'
	},
	num_chamada: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'num_chamada'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_matric_tma'
    });
MatriculaTurma.schema("acad");

MatriculaTurma.hasMany(SituacaoMatricula, {foreignKey: 'id'});
SituacaoMatricula.belongsTo(MatriculaTurma, {foreignKey: 'id_situacao'});

MatriculaTurma.hasMany(Matricula, {foreignKey: 'id'});
Matricula.belongsTo(MatriculaTurma, {foreignKey: 'id_matric'});

MatriculaTurma.hasMany(TurmaDisciplina, {foreignKey: 'id'});
TurmaDisciplina.belongsTo(MatriculaTurma, {foreignKey: 'id_turma'});

MatriculaTurma.hasMany(RegimeMatricula, {foreignKey: 'id'});
RegimeMatricula.belongsTo(MatriculaTurma, {foreignKey: 'id_regime'});

module.exports = MatriculaTurma;