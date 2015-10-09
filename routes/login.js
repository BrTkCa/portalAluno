module.exports = function(app) {

  var login = app.controllers.login
  	, autenticar = require('./../middlewares/autenticador');
  
  app.get('/', login.index);
  app.get('/entrar', autenticar, login.login);
  app.post('/entrar', login.login);
  app.get('/sair', login.logout);
  
};