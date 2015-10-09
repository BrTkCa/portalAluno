var sequelize = require('./../libs/pg_db_connect');

var Categoria = sequelize.define('Categoria', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	descricao: {
		type: sequelize.Sequelize.STRING,
	    field: 'descricao'	
	},
	tipo: {
		type: sequelize.Sequelize.STRING,
    	field: 'tipo'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_cidade'
    });
Categoria.schema("acad");

module.exports = Categoria;