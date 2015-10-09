var sequelize = require('./../libs/pg_db_connect');
var SituacaoMatricula = require('./situacao_matricula');
var PeriodoLetivo = require('./per_letivo');
var OfertaEtapaTurma = require('./oft_etapa_turma');
var AlunoCurso = require('./aluno_curso');

var Matricula = sequelize.define('Matricula', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	id_aluno_curso: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'id_aluno_curso'	
	},
	id_etapa: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_etapa'
	},
	id_periodo: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_periodo'
	},
	id_situacao: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_situacao'
	},
	datamatricula: {
		type: sequelize.Sequelize.DATE,
    	field: 'datamatricula'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_matric'
    });
Matricula.schema("acad");

Matricula.hasMany(SituacaoMatricula, {foreignKey: 'id'});
SituacaoMatricula.belongsTo(Matricula, {foreignKey: 'id_situacao'});

Matricula.hasMany(PeriodoLetivo, {foreignKey: 'id'});
PeriodoLetivo.belongsTo(Matricula, {foreignKey: 'id_periodo'});

Matricula.hasMany(OfertaEtapaTurma, {foreignKey: 'id'});
OfertaEtapaTurma.belongsTo(Matricula, {foreignKey: 'id_etapa'});

Matricula.hasMany(AlunoCurso, {foreignKey: 'id'});
AlunoCurso.belongsTo(Matricula, {foreignKey: 'id_aluno_curso'});

module.exports = Matricula;