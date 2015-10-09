var crypto = require('crypto');

module.exports = function(app) {

  var sequelize = require('./../libs/pg_db_connect');
  var md5sumTela = crypto.createHash('md5');
  var utilidades = require('./../libs/utilidades');  

  var LoginController = {
    index: function(req, res) {
      res.render('login/index');
    },

    login: function(req, res) {
      
      var ip_addr = req.ip;      
      var query = "SELECT DISTINCT INITCAP(p.nome) AS nome, p.id AS pessoa_id,  u.*, m.id AS matricid, m.id_periodo, arq.url FROM global.tbl_user u" +
                  " INNER JOIN global.tbl_pessoa p ON p.usuario_id = u.id" +
                  " INNER JOIN acad.tbl_aluno a ON a.pessoa_id = p.id" +
                  " INNER JOIN acad.tbl_aluno_curso ac ON ac.id_aluno = a.id" +
                  " INNER JOIN acad.tbl_matric m ON m.id_aluno_curso = ac.id" +
                  " LEFT JOIN global.tbl_arq_imagem arq ON arq.id = p.urlimagem_id" +
                  " WHERE u.login = '" + req.body.cpf + "' AND u.status = 'ATI'" +
                  " ORDER BY m.id_periodo DESC LIMIT 1";
      
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).then(function(usuario){    
        md5sumTela = crypto.createHash('md5');

        if (!usuario.length == 0){
          if (req.body.cpf == usuario[0].login  && md5sumTela.update(req.body.senha).digest('hex') === usuario[0].senha ){ 
            var nome_imagem;
            var size_array_image

            if (usuario[0].url != null){              
              size_array_image = usuario[0].url.split('/');
              nome_imagem = usuario[0].url.split('/')[size_array_image.length-1];
            } else {
              nome_imagem = 'no-profile.png';
            }

            var primeiroNome = usuario[0].nome.split(" ");
            req.session.pessoa_id = usuario[0].pessoa_id;
            req.session.usuario = primeiroNome[0];
            req.session.usuario_id = usuario[0].id;
            req.session.matric_id = usuario[0].matricid;
            req.session.url_imagem = nome_imagem; 
            
            query = "INSERT INTO global.tbl_sessao (datainicio, ipmaquina, usuario_id,apporigem) VALUES " +
                  "('" + utilidades.dataAtual() + "','" + ip_addr + "'," + req.session.usuario_id + ",'ALU')";             
             sequelize.query(query, { type: sequelize.QueryTypes.SELECT}).then(function(usuario){  
                res.redirect("/home");     
             });            
          } else {
            res.render("login/invalid_access");
          }
        } else {
          res.render("login/invalid_access");
        }
         
      });

    },

    logout: function(req, res) {
      req.session.destroy();
      res.redirect('/');
    }
  };

  return LoginController;

};