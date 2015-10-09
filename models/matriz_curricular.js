var sequelize = require('./../libs/pg_db_connect');
var Curso = require('./curso');

var MatrizCurricular = sequelize.define('MatrizCurricular', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	dataimplantacao: {
		type: sequelize.Sequelize.DATE,
	    field: 'dataimplantacao'	
	},
	descricao: {
		type: sequelize.Sequelize.STRING,
	    field: 'descricao'	
	},
	status: {
		type: sequelize.Sequelize.STRING,
    	field: 'status'
	},
	id_curso: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'id_curso'	
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_matriz_curricular'
    });
MatrizCurricular.schema("acad");

MatrizCurricular.belongsTo(Curso, {foreignKey: 'id'});
Curso.hasOne(Curso, {foreignKey: 'id_curso'});

module.exports = MatrizCurricular;