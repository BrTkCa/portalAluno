var sequelize = require('./../libs/pg_db_connect');

var StatusCurso = sequelize.define('StatusCurso', {
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
    tableName: 'tbl_status_curso'
    });
StatusCurso.schema("acad");

module.exports = StatusCurso;