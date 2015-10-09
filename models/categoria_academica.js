var sequelize = require('./../libs/pg_db_connect');

var CategoriaAcademica = sequelize.define('CategoriaAcademica', {
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
    tableName: 'tbl_categoria_academica'
    });
CategoriaAcademica.schema("acad");

module.exports = CategoriaAcademica;