var sequelize = require('./../libs/pg_db_connect');
var User = require('./usuario');
var Documentacao = require('./documentacao');
var Cidade = require('./cidade');
var EstadoCivil = require('./estado_civil');
var ArquivoImagem = require('./arq_imagem');

var Pessoa = sequelize.define('Pessoa', {
    id: {
	    type: sequelize.Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true,
	    field: 'id'
	},
	datanascimento: {
		type: sequelize.Sequelize.DATE,
	    field: 'datanascimento'	
	},
	nome: {
		type: sequelize.Sequelize.STRING,
    	field: 'nome'
	},
	sexo: {
		type: sequelize.Sequelize.STRING,
    	field: 'sexo'
	},
	documentacao_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'documentacao_id'
	},
	estadocivil_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'estadocivil_id'
	},
	naturalidade_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'naturalidade_id'
	},
	usuario_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'usuario_id'
	},
	urlimagem_id: {
		type: sequelize.Sequelize.INTEGER,
    	field: 'urlimagem_id'
	}
  }, {
  	timestamps: false,
    tableName: 'tbl_pessoa'
    });
Pessoa.schema("global");

Pessoa.belongsTo(User, {foreignKey: 'id'});
User.hasOne(Pessoa, {foreignKey: 'usuario_id'});

Pessoa.belongsTo(Documentacao, {foreignKey: 'id'});
Documentacao.hasOne(Pessoa, {foreignKey: 'documentacao_id'});

Pessoa.hasMany(Cidade, {foreignKey: 'id'});
Cidade.belongsTo(Pessoa, {foreignKey: 'naturalidade_id'});

Pessoa.hasMany(EstadoCivil, {foreignKey: 'id'});
EstadoCivil.belongsTo(Pessoa, {foreignKey: 'estadocivil_id'});

Pessoa.belongsTo(ArquivoImagem, {foreignKey: 'id'});
ArquivoImagem.hasOne(Pessoa, {foreignKey: 'urlimagem_id'});

module.exports = Pessoa;