module.exports = function(app) {

  var sequelize = require('./../libs/pg_db_connect');
  var _ = require('underscore');
  
  var ProfessoresController = {

    index: function(req, res){
      var user = req.session.usuario;   

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
        done = _.after(dadosMatricula.length, function () {
        callback(dadosMatricula)
      })

      // Query responsavel por buscar os professores por disciplina da ultima matricula
      query = " SELECT INITCAP(dis.nome) AS disciplina, INITCAP(p.nome) AS nome, ema.endereco" +

       " FROM global.tbl_pessoa p" +

       " INNER JOIN acad.tbl_matric m ON m.id = (SELECT m.id AS idmatric FROM global.tbl_pessoa p" +
       " INNER JOIN acad.tbl_aluno a ON a.pessoa_id = p.id" +
       " INNER JOIN acad.tbl_aluno_curso acu ON acu.id_aluno = a.id" +
       " INNER JOIN acad.tbl_matric m ON m.id_aluno_curso = acu.id" +
       " INNER JOIN acad.tab_perletivo pl ON pl.id = m.id_periodo" +
       " WHERE p.usuario_id = " + req.session.usuario_id + " ORDER BY pl.id DESC LIMIT 1)" +

       " INNER JOIN acad.tab_perletivo pl ON pl.id = m.id_periodo" +
       " INNER JOIN acad.tbl_matric_tma mtu ON mtu.id_matric = m.id" +
       " INNER JOIN acad.tbl_docente_turma dtu ON dtu.id_turma = mtu.id_turma" +
       " INNER JOIN acad.tbl_docente d ON d.id = dtu.id_docente" +
       " INNER JOIN acad.tbl_tma_disc tma ON tma.id = mtu.id_turma" +
       " INNER JOIN acad.tbl_disc dis ON dis.id = tma.id_disciplina" +
       " LEFT JOIN global.tbl_email ema ON ema.id = (SELECT ema.id FROM global.tbl_email ema, global.tbl_ent_erp ent WHERE ent.id = ema.id_enterp and ent.id = p.id_enterp LIMIT 1) WHERE p.id = d.pessoa_id ORDER BY p.nome ASC";

      sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(data){         
    
           resultado = {user: user, professores: data, dadosMatricula: dadosMatricula, session: req.session};        
           res.render('home/professores/index', resultado);
         
      }).catch(function(error){            
            res.render('server-error', {user:user, error: error, session: req.session});
        });

      }).catch(function(error){            
            res.render('server-error', {user:user, error: error, session: req.session});    
      });
    }
  }

  return ProfessoresController;

};