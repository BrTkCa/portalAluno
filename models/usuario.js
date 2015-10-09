var sequelize = require('./../libs/pg_db_connect');

var User = sequelize.define('User', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	login: {
		type: sequelize.Sequelize.STRING,
	    field: 'login'	
	},
	senha: {
		type: sequelize.Sequelize.STRING,
    	field: 'senha'
	},
	tipo: {
		type: sequelize.Sequelize.STRING,
    	field: 'tipo'
	},
	status: {
		type: sequelize.Sequelize.STRING,
    	field: 'status'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_user'
    });
User.schema("global");

module.exports = User;