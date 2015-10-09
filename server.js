// Configuracao do framework forever, responsavel
// por verificar por ping se a aplicacao esta de pe 
// e caso necessario reinicia-la
var forever = require('forever-monitor');
var Monitor = forever.Monitor;

var child = new Monitor('app.js', {
  max: 20,
  silent: false,
  killTree: true,
  logFile: 'forever.log',
  outFile: 'app.log',
  errFile: 'error.log'
});

child.on('exit', function () {
  console.log('O server foi finalizado.');
});

child.start();