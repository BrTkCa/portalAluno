module.exports = function(app) {

  var Usuario = app.models.usuario;
  var sequelize = require('./../libs/pg_db_connect');
  var _ = require('underscore');
  
  var FinanceiroController = {
    index: function(req, res){
      var user = req.session.usuario;     
      var query;
      var resultado;

      // Query responsavel por buscar a ultima matricula do aluno
      query = "SELECT n.descricao, to_char(l.dataemissao, 'DD/MM/YYYY') AS dataemissao, to_char(l.datavencimento, 'DD/MM/YYYY') AS datavencimento, l.numparcela, l.valortotal FROM financ.tbl_lancamento l" +
              " INNER JOIN financ.tbl_forma_pagamento fp ON fp.id = l.forma_pagamento_id" +
              " INNER JOIN financ.tbl_natureza_operacao n ON n.id = fp.naturezaoperacao_id" +
              " INNER JOIN global.tbl_pessoa p ON p.usuario_id = " + req.session.usuario_id +
              " inner join global.tbl_ent_erp ent on ent.id = p.id_enterp" + 
              " inner join financ.tbl_sit_lanc_financ sit on sit.idsituacao = l.id_sit_lanc" +
              " WHERE l.id_enterp = ent.id AND sit.descricao = 'Faturado'";

      /*
      * Para executar subqueries e necessario inserir os sequelizer query dentro da funcao de
      * CallBack, pois fora do "success" a variavel de dados perde a referencia.
      */
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(faturados){
        done = _.after(faturados.length, function () {
        callback(faturados)
     })

      // Query responsavel por consultar os lancamentos pagos
      query = "SELECT n.descricao, to_char(l.dataemissao, 'DD/MM/YYYY') AS dataemissao, to_char(l.datavencimento, 'DD/MM/YYYY') AS datavencimento, l.numparcela, l.valortotal FROM financ.tbl_lancamento l" +
              " INNER JOIN financ.tbl_forma_pagamento fp ON fp.id = l.forma_pagamento_id" +
              " INNER JOIN financ.tbl_natureza_operacao n ON n.id = fp.naturezaoperacao_id" +
              " INNER JOIN global.tbl_pessoa p ON p.usuario_id = " + req.session.usuario_id +
              " inner join global.tbl_ent_erp ent on ent.id = p.id_enterp" + 
              " inner join financ.tbl_sit_lanc_financ sit on sit.idsituacao = l.id_sit_lanc" +              
              " WHERE l.id_enterp = ent.id AND sit.descricao = 'Liquidado'";

      sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(liquidados){



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
                    resultado = {user: user, faturados: faturados, liquidados: liquidados, dadosMatricula: dadosMatricula, session: req.session};          
                    res.render('home/financeiro/index', resultado);
                }).catch(function(error){            
                   res.render('server-error', {user:user, error: error, session: req.session});
                });
            }).catch(function(error){            
              res.render('server-error', {user:user, error: error, session: req.session});
            });
        }).catch(function(error){            
            res.render('server-error', {user:user, error: error, session: req.session});
      });
    }
  };

  return FinanceiroController;

};