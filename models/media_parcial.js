var sequelize = require('./../libs/pg_db_connect');
var TurmaDisciplina = require('./turma_disciplina');
var TipoAvaliacao = require('./tipo_avaliacao');
var Matricula = require('./matricula');

var MediaParcial = sequelize.define('MediaParcial', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	media: {
		type: sequelize.Sequelize.DECIMAL,
	    field: 'media'	
	},
	matric_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'matric_id'
	},
	periodoav_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'periodoav_id'
	},
	turma_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'turma_id'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_media_parcial'
    });
MediaParcial.schema("acad");

MediaParcial.hasMany(TurmaDisciplina, {foreignKey: 'id'});
TurmaDisciplina.belongsTo(MediaParcial, {foreignKey: 'turma_id'});

MediaParcial.hasMany(TipoAvaliacao, {foreignKey: 'id'});
TipoAvaliacao.belongsTo(MediaParcial, {foreignKey: 'periodoav_id'});

MediaParcial.hasMany(Matricula, {foreignKey: 'id'});
Matricula.belongsTo(MediaParcial, {foreignKey: 'matric_id'});

module.exports = MediaParcial;