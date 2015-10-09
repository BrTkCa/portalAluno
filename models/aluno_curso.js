var sequelize = require('./../libs/pg_db_connect');
var Aluno = require('./aluno');
var Curso = require('./curso');
var MatrizCurricular = require('./matriz_curricular');

var AlunoCurso = sequelize.define('AlunoCurso', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	id_aluno: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'id_aluno'	
	},
	id_curso: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_curso'
	},
	id_matriz: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_matriz'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_aluno_curso'
    });
AlunoCurso.schema("acad");

AlunoCurso.hasMany(Aluno, {foreignKey: 'id'});
Aluno.belongsTo(AlunoCurso, {foreignKey: 'id_aluno'});

AlunoCurso.hasMany(Curso, {foreignKey: 'id'});
Curso.belongsTo(AlunoCurso, {foreignKey: 'id_curso'});

AlunoCurso.hasMany(MatrizCurricular, {foreignKey: 'id'});
MatrizCurricular.belongsTo(AlunoCurso, {foreignKey: 'id_matriz'});

module.exports = AlunoCurso;