var sequelize = require('./../libs/pg_db_connect');
var Curso = require('./curso');
var PeriodoLetivo = require('./per_letivo');

var OfertaCurso = sequelize.define('OfertaCurso', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	maxcredito: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'maxcredito'	
	},
	mincredito: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'mincredito'
	},
	id_curso: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_curso'
	},
	id_periodo_letivo: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_periodo_letivo'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_oferta_curso'
    });
OfertaCurso.schema("acad");

OfertaCurso.hasMany(Curso, {foreignKey: 'id'});
Curso.belongsTo(OfertaCurso, {foreignKey: 'id_curso'});

OfertaCurso.hasMany(PeriodoLetivo, {foreignKey: 'id'});
PeriodoLetivo.belongsTo(OfertaCurso, {foreignKey: 'id_periodo_letivo'});

module.exports = OfertaCurso;