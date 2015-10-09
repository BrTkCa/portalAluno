var sequelize = require('./../libs/pg_db_connect');
var OfertaCurso = require('./oferta_curso');
var Turno = require('./turno');
var TipoTurma = require('./tipo_turma');
var StatusCurso = require('./status_curso');

var OfertaTurmaCurso = sequelize.define('OfertaTurmaCurso', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	pontoequilibrio: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'pontoequilibrio'	
	},
	vagasingressantes: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'vagasingressantes'
	},
	id_oferta_curso: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_oferta_curso'
	},
	id_situacao: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_situacao'
	},
	id_tipo_turma: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_tipo_turma'
	},
	id_turno: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_turno'
	},
	cobrainscricao: {
		type: sequelize.Sequelize.BOOLEAN,
    	field: 'cobrainscricao'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_oferta_turma_curso'
    });
OfertaTurmaCurso.schema("acad");

OfertaTurmaCurso.hasMany(OfertaCurso, {foreignKey: 'id'});
OfertaCurso.belongsTo(OfertaTurmaCurso, {foreignKey: 'id_oferta_curso'});

OfertaTurmaCurso.hasMany(Turno, {foreignKey: 'id'});
Turno.belongsTo(OfertaTurmaCurso, {foreignKey: 'id_turno'});

OfertaTurmaCurso.hasMany(TipoTurma, {foreignKey: 'id'});
TipoTurma.belongsTo(OfertaTurmaCurso, {foreignKey: 'id_tipo_turma'});

OfertaTurmaCurso.hasMany(StatusCurso, {foreignKey: 'id'});
StatusCurso.belongsTo(OfertaTurmaCurso, {foreignKey: 'id_situacao'});

module.exports = OfertaTurmaCurso;