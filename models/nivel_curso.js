var sequelize = require('./../libs/pg_db_connect');

var NivelCurso = sequelize.define('NivelCurso', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	descricao: {
		type: sequelize.Sequelize.STRING,
	    field: 'descricao'	
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_nivel_curso'
    });
NivelCurso.schema("acad");

module.exports = NivelCurso;