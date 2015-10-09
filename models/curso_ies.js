var sequelize = require('./../libs/pg_db_connect');
var Curso = require('./curso');
var InstituicaoEnsino = require('./instituicao_ensino');

var CursoIes = sequelize.define('CursoIes', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	id_curso: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'id_curso'	
	},
	id_ies: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_ies'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_curso_ies'
    });
CursoIes.schema("acad");

CursoIes.belongsTo(Curso, {foreignKey: 'id'});
Curso.hasOne(CursoIes, {foreignKey: 'id_curso'});

CursoIes.belongsTo(InstituicaoEnsino, {foreignKey: 'id'});
InstituicaoEnsino.hasOne(CursoIes, {foreignKey: 'id_ies'});

module.exports = CursoIes;