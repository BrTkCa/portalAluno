module.exports = function(app) {

  var Usuario = app.models.usuario;
  var sequelize = require('./../libs/pg_db_connect');
  var _ = require('underscore');
  
  var LoginController = {
    index: function(req, res) {      
      var user = req.session.usuario;
      var resultado = {user: user, session: req.session};      

      res.render('home/index', resultado);
    },
    boletim: function(req, res){
      var user = req.session.usuario;     
      var query;

      // Query responsavel por buscar a ultima matricula do aluno
      query = "SELECT m.id AS matricid, pl.id AS perletivoid, pl.instituicao_id, acu.id_curso FROM global.tbl_pessoa p" +
      " INNER JOIN acad.tbl_aluno a ON a.pessoa_id = p.id"+
      " INNER JOIN acad.tbl_aluno_curso acu ON acu.id_aluno = a.id"+
      " INNER JOIN acad.tbl_matric m ON m.id_aluno_curso = acu.id"+
      " INNER JOIN acad.tab_perletivo pl ON pl.id = m.id_periodo"+
      " WHERE p.usuario_id = " + req.session.usuario_id +" ORDER BY perletivoid DESC LIMIT 1";

      /*
      * Para executar subqueries e necessario inserir os sequelizer query dentro da funcao de
      * CallBack, pois fora do "success" a variavel de dados perde a referencia.
      */
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(dadosMatricula){
        done = _.after(dadosMatricula.length, function () {
        callback(dadosMatricula)
     })

      // Query responsavel por consultar as informacoes do boletim
      query = "select d.id AS id_disc, initcap(d.nome) as nome, pl.id, td.aulasprevistas," +

              " (select round(mp.media:: numeric, 2) from" +
              " acad.tbl_media_parcial mp" +
              " where mp.turma_id = td.id and mp.matric_id = m.id" +
              " and mp.periodoav_id = 1) as av1bimestre," +

              " (select round(mp.media:: numeric, 2) from" +
              " acad.tbl_media_parcial mp" +
              " where mp.turma_id = td.id and mp.matric_id = m.id" +
              " and mp.periodoav_id = 2) as av2bimestre," +

              " round(md.notaexame:: numeric, 2) as notaexame," +

              " (select s.descricao from acad.tbl_sit_matricula s" +
              " where s.id = md.id_situacao) as sit_final_disc," +

              " round(md.mediafinal:: numeric, 2) as mediafinal," +
              " round(md.frequencia:: numeric, 2) AS frequencia, md.totalfaltas, initcap(sm.descricao) as situacao," +
              " ie.id as id_emp," +
              " ie.codies as sigla_emp," +
                    " initcap(ie.nome) as desc_emp," + 
                    " initcap(pl.descricao) as head_01," +
                    " initcap(c.nome) as head_02," +
                    " initcap(p.nome) as head_03," +
                    " initcap(sm.descricao) as head_04," +

              " pca.mf_apr_final as criterioaprovacao from" +

              " acad.tbl_aluno a" +
              " inner join global.tbl_pessoa p on a.pessoa_id = p.id" +
              " inner join acad.tbl_aluno_curso ac on ac.id_aluno = a.id" +
              " inner join acad.tbl_matric m on m.id_aluno_curso = ac.id" +
              " inner join acad.tbl_curso c on c.id = ac.id_curso" +
              " inner join acad.tbl_curso_ies ci on ci.id_curso = c.id" +
              " inner join acad.tbl_inst_ensino ie on ie.id = ci.id_ies" +
              " inner join acad.tbl_matric_tma mt on mt.id_matric = m.id" +
              " inner join acad.tbl_matric_disc md on md.id_matric = m.id" +
              " inner join acad.tbl_tma_disc td on td.id = mt.id_turma" +
              " inner join acad.tbl_disc d on d.id = td.id_disciplina" +
              " inner join acad.tab_perletivo pl on pl.id = td.id_periodo_letivo" +
              " inner join acad.tbl_sit_matricula sm on sm.id = m.id_situacao" +
              " inner join acad.tbl_disc_matriz dm on dm.id_disciplina = d.id" +
              " inner join acad.tbl_param_config_av pca on pca.id = dm.id_param_config_av" +
              " where" +
              " dm.id_matriz = ac.id_matriz and md.id_disc = d.id" +
                    " and ie.id = " + dadosMatricula[0].instituicao_id +
                    " and pl.id = " + dadosMatricula[0].perletivoid +
                    " and c.id = " + dadosMatricula[0].id_curso +
                    " and m.id = " + dadosMatricula[0].matricid + 

              " order by d.nome";

      sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(data){         

         // Query responsavel por buscar todas as etapas (modulos) que o aluno cursou
         query = "SELECT DISTINCT eta.etapa || 'º ' || pd.descricao || ' - ' || cur.nome AS etapa, eta.etapa || 'º ' || pd.descricao || ' - ' || cur.sigla AS m_etapa  FROM global.tbl_pessoa p " +
                 " INNER JOIN acad.tbl_aluno a ON a.pessoa_id = p.id" +
                 " INNER JOIN acad.tbl_aluno_curso acu ON acu.id_aluno = a.id" +
                 " INNER JOIN acad.tbl_curso cur ON cur.id = acu.id_curso" +
                 " INNER JOIN acad.tbl_matric m ON m.id_aluno_curso = acu.id" +
                 " INNER JOIN acad.tbl_curso cu ON cu.id = acu.id_curso" +                 
                 " INNER JOIN acad.tbl_periodo_duracao pd ON pd.id = cur.id_periodo" +
                 " INNER JOIN acad.tbl_oft_etapa_tma eta ON eta.id = m.id_etapa" +
                 " WHERE p.usuario_id = " + req.session.usuario_id + " ORDER BY etapa ASC";

         sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(modulos){

          query = " select * from acad.obter_notas_av_portal_aluno(" + dadosMatricula[0].matricid + "," + dadosMatricula[0].perletivoid + ")";

              sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(desempenho_av){


           resultado = {user: user, boletim: data, modulos: modulos, desempenho_ava: desempenho_av, session: req.session};                  
           res.render('home/boletim/index', resultado);
           }).catch(function(error){
            res.render('server-error', {user:user, error: error, session: req.session});
        })
         }).catch(function(error){
            res.render('server-error', {user:user, error: error, session: req.session});
        })
         
      }).catch(function(error){
            res.render('server-error', {user:user, error: error, session: req.session});
      })

       }).catch(function(error){            
            res.render('server-error', {user:user, error: error, session: req.session});
      })

    },

     boletim_etapa: function(req, res){
      var user = req.session.usuario;     
      var query;      

      // Query responsavel por buscar a ultima matricula do aluno
      query = "SELECT m.id AS matricid, pl.id AS perletivoid, pl.instituicao_id, acu.id_curso FROM global.tbl_pessoa p" +
                 " INNER JOIN acad.tbl_aluno a ON a.pessoa_id = p.id" +
                 " INNER JOIN acad.tbl_aluno_curso acu ON acu.id_aluno = a.id" +
                 " INNER JOIN acad.tbl_matric m ON m.id_aluno_curso = acu.id" +
                 " INNER JOIN acad.tab_perletivo pl ON pl.id = m.id_periodo" +
                 " INNER JOIN acad.tbl_oft_etapa_tma eta ON eta.id = m.id_etapa" +
                 " WHERE p.usuario_id = " + req.session.usuario_id + " AND eta.etapa = " + req.body.nivel.split("º")[0] + " LIMIT 1";

      /*
      * Para executar subqueries e necessario inserir os sequelizer query dentro da funcao de
      * CallBack, pois fora do "success" a variavel de dados perde a referencia.
      */
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(dadosMatricula){
        done = _.after(dadosMatricula.length, function () {
        callback(dadosMatricula)
     })

      // Query responsavel por consultar as informacoes do boletim
      query = "select d.id AS id_disc, initcap(d.nome) as nome, pl.id, td.aulasprevistas," +

              " (select round(mp.media:: numeric, 2) from" +
              " acad.tbl_media_parcial mp" +
              " where mp.turma_id = td.id and mp.matric_id = m.id" +
              " and mp.periodoav_id = 1) as av1bimestre," +

              " (select round(mp.media:: numeric, 2) from" +
              " acad.tbl_media_parcial mp" +
              " where mp.turma_id = td.id and mp.matric_id = m.id" +
              " and mp.periodoav_id = 2) as av2bimestre," +

              " round(md.notaexame:: numeric, 2) as notaexame," +

              " (select s.descricao from acad.tbl_sit_matricula s" +
              " where s.id = md.id_situacao) as sit_final_disc," +

              " round(md.mediafinal:: numeric, 2) as mediafinal," +
              " round(md.frequencia:: numeric, 2) AS frequencia, md.totalfaltas, initcap(sm.descricao) as situacao," +
              " ie.id as id_emp," +
              " ie.codies as sigla_emp," +
                    " initcap(ie.nome) as desc_emp," + 
                    " initcap(pl.descricao) as head_01," +
                    " initcap(c.nome) as head_02," +
                    " initcap(p.nome) as head_03," +
                    " initcap(sm.descricao) as head_04," +

              " pca.mf_apr_final as criterioaprovacao from" +

              " acad.tbl_aluno a" +
              " inner join global.tbl_pessoa p on a.pessoa_id = p.id" +
              " inner join acad.tbl_aluno_curso ac on ac.id_aluno = a.id" +
              " inner join acad.tbl_matric m on m.id_aluno_curso = ac.id" +
              " inner join acad.tbl_curso c on c.id = ac.id_curso" +
              " inner join acad.tbl_curso_ies ci on ci.id_curso = c.id" +
              " inner join acad.tbl_inst_ensino ie on ie.id = ci.id_ies" +
              " inner join acad.tbl_matric_tma mt on mt.id_matric = m.id" +
              " inner join acad.tbl_matric_disc md on md.id_matric = m.id" +
              " inner join acad.tbl_tma_disc td on td.id = mt.id_turma" +
              " inner join acad.tbl_disc d on d.id = td.id_disciplina" +
              " inner join acad.tab_perletivo pl on pl.id = td.id_periodo_letivo" +
              " inner join acad.tbl_sit_matricula sm on sm.id = m.id_situacao" +
              " inner join acad.tbl_disc_matriz dm on dm.id_disciplina = d.id" +
              " inner join acad.tbl_param_config_av pca on pca.id = dm.id_param_config_av" +
              " where" +
              " dm.id_matriz = ac.id_matriz and md.id_disc = d.id" +
                    " and ie.id = " + dadosMatricula[0].instituicao_id +
                    " and pl.id = " + dadosMatricula[0].perletivoid +
                    " and c.id = " + dadosMatricula[0].id_curso +
                    " and m.id = " + dadosMatricula[0].matricid + 

              " order by d.nome";

      sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(data){         
         
         // Query responsavel por buscar todas as etapas (modulos) que o aluno cursou
         query = "SELECT DISTINCT eta.etapa || 'º ' || pd.descricao || ' - ' || cur.nome AS etapa, eta.etapa || 'º ' || pd.descricao || ' - ' || cur.sigla AS m_etapa  FROM global.tbl_pessoa p " +
                 " INNER JOIN acad.tbl_aluno a ON a.pessoa_id = p.id" +
                 " INNER JOIN acad.tbl_aluno_curso acu ON acu.id_aluno = a.id" +
                 " INNER JOIN acad.tbl_curso cur ON cur.id = acu.id_curso" +
                 " INNER JOIN acad.tbl_matric m ON m.id_aluno_curso = acu.id" +
                 " INNER JOIN acad.tbl_curso cu ON cu.id = acu.id_curso" +                 
                 " INNER JOIN acad.tbl_periodo_duracao pd ON pd.id = cur.id_periodo" +
                 " INNER JOIN acad.tbl_oft_etapa_tma eta ON eta.id = m.id_etapa" +
                 " WHERE p.usuario_id = " + req.session.usuario_id + " ORDER BY etapa ASC";

         sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(modulos){

                    query = " select * from acad.obter_notas_av_portal_aluno(" + dadosMatricula[0].matricid + "," + dadosMatricula[0].perletivoid + ")";

              sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(desempenho_av){

           resultado = {user: user, boletim: data, modulos: modulos, desempenho_ava: desempenho_av, session: req.session};                  
           res.render('home/boletim/index', resultado);
           }).catch(function(error){
          console.log("Erro 1");
            res.render('/server-error', {user:user, error: error, session: req.session});
        })
         }).catch(function(error){
          console.log("Erro 1");
            res.render('/server-error', {user:user, error: error, session: req.session});
        })
         
      }).catch(function(error){
        console.log("Erro 2");
            res.render('/server-error', {user:user, error: error, session: req.session});
      })

       }).catch(function(error){            
        console.log("Erro 3");
            res.render('/server-error', {user:user, error: error, session: req.session});
      })

    }
  };

  return LoginController;

};