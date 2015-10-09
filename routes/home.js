module.exports = function(app) {
  
  var autenticar = require('./../middlewares/autenticador')
    , home = app.controllers.home
    , professores = app.controllers.professores
    , horarios = app.controllers.horarios
    , avaliacao = app.controllers.avaliacao
    , financeiro = app.controllers.financeiro
    , alterar_senha = app.controllers.alterarSenha
    , perfil_usuario = app.controllers.perfilUsuario;

  app.get('/home', autenticar, home.index);  
  app.get('/home/boletim', autenticar, home.boletim);
  app.post('/home/boletim/', autenticar, home.boletim_etapa);
  app.get('/home/professores', autenticar, professores.index);
  app.get('/home/horarios', autenticar, horarios.index);
  app.get('/home/avaliacoes', autenticar, avaliacao.index);
  app.get('/home/financeiro', autenticar, financeiro.index);
  app.get('/home/alterar_senha', autenticar, alterar_senha.index);
  app.post('/home/alterar_senha', autenticar, alterar_senha.alterar);  
  app.get('/home/perfil_usuario', autenticar, perfil_usuario.index);
  app.get('/home/perfil_usuario/upload', autenticar, perfil_usuario.index);
  app.post('/home/perfil_usuario/upload', autenticar, perfil_usuario.upload);

};