var sequelize = require('./../libs/pg_db_connect');

var ModalidadeEnsino = sequelize.define('ModalidadeEnsino', {
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
    tableName: 'tbl_mod_ensino'
    });
ModalidadeEnsino.schema("acad");

module.exports = ModalidadeEnsino;