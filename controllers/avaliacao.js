module.exports = function(app) {

  var Usuario = app.models.usuario;
  var sequelize = require('./../libs/pg_db_connect');
  var _ = require('underscore');
  
  var AvaliacaoController = {
    index: function(req, res){
      var user = req.session.usuario;     
      var query;

      // Query responsavel por consultar as informacoes do boletim
      query = "SELECT d.nome AS disciplina, av.descricao, av.conteudo, TO_CHAR(av.dataavaliacao, 'DD/MM/YYYY') AS dataavaliacao, TO_CHAR(av.horario, 'HH24:MM') AS horario, av.peso" +
      " FROM acad.tbl_avaliacao av" + 
      " INNER JOIN acad.tbl_matric_tma m ON m.id_matric = " + req.session.matric_id +
      " INNER JOIN acad.tbl_tma_disc tma ON tma.id = av.turma_id" +
      " INNER JOIN acad.tbl_disc d ON d.id = tma.id_disciplina" +
      " WHERE av.turma_id = m.id_turma";

      sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(data){

                // Query responsavel por buscar dados referente a ultima matricula do aluno
                // e montar o cabeçalho
                query = "SELECT INITCAP(ies.nome) AS ies, INITCAP(pl.descricao) AS perletivo, INITCAP(c.nome) AS curso, INITCAP(sit.descricao) AS situacao" +
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
                    resultado = {user: user, avaliacoes: data, dadosMatricula: dadosMatricula, session: req.session};          
                    res.render('home/avaliacoes/index', resultado);
                }).catch(function(error){            
                   res.render('server-error', {user:user, error: error, session: req.session});
                });
            }).catch(function(error){            
            res.render('server-error', {user:user, error: error, session: req.session});
        });
    }
  };

  return AvaliacaoController;

};