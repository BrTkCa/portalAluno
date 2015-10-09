var sequelize = require('./../libs/pg_db_connect');
var OfertaTurmaCurso = require('./oferta_turma_curso');

var OfertaEtapaTurma = sequelize.define('OfertaEtapaTurma', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	etapa: {
		type: sequelize.Sequelize.INTEGER,
	    field: 'etapa'	
	},
	tipocobranca: {
		type: sequelize.Sequelize.STRING,
    	field: 'tipocobranca'
	},
	valor: {
		type: sequelize.Sequelize.DECIMAL,
    	field: 'valor'
	},
	id_oft_turma: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'id_oft_turma'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_oft_etapa_tma'
    });
OfertaEtapaTurma.schema("acad");

OfertaEtapaTurma.hasMany(OfertaTurmaCurso, {foreignKey: 'id'});
OfertaTurmaCurso.belongsTo(OfertaEtapaTurma, {foreignKey: 'id_oft_turma'});

module.exports = OfertaEtapaTurma;