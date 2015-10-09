var sequelize = require('./../libs/pg_db_connect');
var StatusCurso = require('./status_curso');
var PeriodoLetivo = require('./per_letivo');
var TipoTurma = require('./tipo_turma');
var MatrizCurricular = require('./matriz_curricular');
var OfertaEtapaTurma = require('./oft_etapa_turma');
var Disciplina = require('./disciplina');

var TurmaDisciplina = sequelize.define('TurmaDisciplina', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	aulasprevistas: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'aulasprevistas'	
	},
	totalvagas: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'totalvagas'
	},
	id_disciplina: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_disciplina'
	},
	id_matriz: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_matriz'
	},
	id_periodo_letivo: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_periodo_letivo'
	},
	id_status: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_status'
	},
	id_tipo: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_tipo'
	},
	id_etapa: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_etapa'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_tma_disc'
    });
TurmaDisciplina.schema("acad");

TurmaDisciplina.hasMany(StatusCurso, {foreignKey: 'id'});
StatusCurso.belongsTo(TurmaDisciplina, {foreignKey: 'id_status'});

TurmaDisciplina.hasMany(PeriodoLetivo, {foreignKey: 'id'});
PeriodoLetivo.belongsTo(TurmaDisciplina, {foreignKey: 'id_periodo_letivo'});

TurmaDisciplina.hasMany(TipoTurma, {foreignKey: 'id'});
TipoTurma.belongsTo(TurmaDisciplina, {foreignKey: 'id_tipo'});

TurmaDisciplina.hasMany(MatrizCurricular, {foreignKey: 'id'});
MatrizCurricular.belongsTo(TurmaDisciplina, {foreignKey: 'id_matriz'});

TurmaDisciplina.hasMany(OfertaEtapaTurma, {foreignKey: 'id'});
OfertaEtapaTurma.belongsTo(TurmaDisciplina, {foreignKey: 'id_etapa'});

TurmaDisciplina.hasMany(Disciplina, {foreignKey: 'id'});
Disciplina.belongsTo(TurmaDisciplina, {foreignKey: 'id_disciplina'});

module.exports = TurmaDisciplina;