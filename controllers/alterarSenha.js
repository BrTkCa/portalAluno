module.exports = function(app) {
  
  var crypto = require('crypto');
  var sequelize = require('./../libs/pg_db_connect');
  var md5sumTela = crypto.createHash('md5');
  var _ = require('underscore');
  
  var AlterarSenhaController = {

    index: function(req, res){
      var user = req.session.usuario;
    
      resultado = {user: user, session: req.session};    
      res.render('home/alterar_senha/index', resultado);
    },

    alterar: function(req, res){
      var user = req.session.usuario;      
      var retorno;
      var resultado;     

      var query = "SELECT * FROM global.tbl_user WHERE id = " + req.session.usuario_id + " LIMIT 1";

      sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).success(function(usuario){
        done = _.after(usuario.length, function () {
        callback(usuario)
      })
        var md5sumTela = crypto.createHash('md5');        
        var md5sum2Tela = crypto.createHash('md5'); 
        var senhaCripto = md5sumTela.update(req.body.txtSenhaAtual).digest('hex');
        var novaSenhaCript = md5sum2Tela.update(req.body.txtNovaSenha).digest('hex');

        if (senhaCripto != usuario[0].senha){
          retorno = "Senha atual está incorreta, tente novamente.";
          resultado = {user: user, retorno: retorno, session: req.session};         
          res.render('home/alterar_senha/retorno', resultado);
        } else if (novaSenhaCript == usuario[0].senha){
          retorno = "Nova senha não pode ser igual a atual, tente novamente.";
          resultado = {user: user, retorno: retorno, session: req.session};         
          res.render('home/alterar_senha/retorno', resultado);
        } else if (req.body.txtNovaSenha != req.body.txtRNovaSenha){
          retorno = "Senhas diferentes, tente novamente.";
          resultado = {user: user, retorno: retorno, session: req.session};         
          res.render('home/alterar_senha/retorno', resultado);
        } else {
          // Query responsavel por atualizar o registro
          query = "UPDATE global.tbl_user set senha = md5('" + req.body.txtNovaSenha +"') WHERE id = " +
                  req.session.usuario_id;

          sequelize.query(query).spread(function(results, metadata) {
            // Metadata retornará o numero de linhas afetadas, enquanto results será um array vazio                    
            retorno = "Senha alterada com sucesso!"
            resultado = {user: user, retorno: retorno, session: req.session};       
            res.render('home/alterar_senha/retorno', resultado);                
             
          }).catch(function(error){            
                res.render('server-error', {user:user, error: error, session: req.session});
            });
          }
        }).catch(function(error){            
          res.render('server-error', {user:user, error: error, session: req.session});    
      });           
    }
  };

  return AlterarSenhaController;

};