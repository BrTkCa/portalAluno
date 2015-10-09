module.exports = function(app) {

  var Usuario = app.models.usuario;
  var sequelize = require('./../libs/pg_db_connect');
  var _ = require('underscore');
  
  var HorariosController = {

    index: function(req, res){
      var user = req.session.usuario;   

      // Obtendo os dados da matricula para executar a consulta
      var query  = "SELECT m.id, m.id_periodo, pl.instituicao_id FROM global.tbl_pessoa p " +
        " INNER JOIN acad.tbl_aluno a ON a.pessoa_id = p.id " +
        " INNER JOIN acad.tbl_aluno_curso acu ON acu.id_aluno = a.id " +
        " INNER JOIN acad.tbl_matric m ON m.id_aluno_curso = acu.id " +
        " INNER JOIN acad.tab_perletivo pl ON pl.id = m.id_periodo " +
        " WHERE p.usuario_id = " + req.session.usuario_id + " ORDER BY m.id_periodo DESC LIMIT 1";
      
      /*
      * Para executar subqueries e necessario inserir os sequelizer query dentro da funcao de
      * CallBack, pois fora do "success" a variavel de dados perde a referencia.
      */
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(dadosMatricula){
        done = _.after(dadosMatricula.length, function () {
        callback(dadosMatricula)
     })
         // concatenando os parametros a string de filtros da SQL
         var parametros = "WHERE instituicao.id = " + dadosMatricula[0].instituicao_id + " AND perletivo.id = "+ dadosMatricula[0].id_periodo +  " AND matric.id = " + dadosMatricula[0].id;

         // Query responsavel por buscar todas as etapas (modulos) que o aluno cursou
         query = require("./../dao/horarios");
         query = query.concat(parametros);

         sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(data){


                // Query responsavel por buscar dados referente a ultima matricula do aluno
                // e montar o cabeçalho
                var query = "SELECT INITCAP(ies.nome) AS ies, INITCAP(pl.descricao) AS perletivo, INITCAP(c.nome) AS curso, INITCAP(sit.descricao) AS situacao" +
                " FROM acad.tbl_matric m" +
                " INNER JOIN acad.tab_perletivo pl ON pl.id = m.id_periodo" +
                " INNER JOIN acad.tbl_inst_ensino ies ON ies.id = instituicao_id" +
                " INNER JOIN acad.tbl_aluno_curso ac ON ac.id = m.id_aluno_curso" +
                " INNER JOIN acad.tbl_curso c ON c.id = id_curso" +
                " INNER JOIN acad.tbl_sit_matricula sit ON sit.id = m.id_situacao" +
                " WHERE m.id = " + req.session.matric_id;

                /*
                * Para executar subqueries e necessario inserir os sequelizer query dentro da funcao de
                * CallBack, pois fora do "success" a variavel de dados perde a referencia.
                */
                sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(dadosMatricula){
                    resultado = {user: user, horarios: data, dadosMatricula: dadosMatricula, session: req.session};          
                    res.render('home/horarios/index', resultado);
                });

         }).catch(function(error){            
            res.render('server-error', {user:user, error: error, session: req.session});
         });
         
      }).catch(function(error){            
            res.render('server-error', {user:user, error: error, session: req.session});
      });
    }
  };

  return HorariosController;

};