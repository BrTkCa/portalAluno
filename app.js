var express = require('express')
  , cfg = require('./config.json')
  , load = require('express-load')
  , bodyParser = require('body-parser')
  , compression = require('compression')
  , methodOverride = require('method-override')
  , expressSession = require('express-session')
  , cookieParser = require('cookie-parser')
  , app = express()
  , server = require('http').Server(app)
  , cookie = cookieParser(cfg.SECRET);


app.disable('x-powered-by');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(compression());
app.use(cookie);

app.use(expressSession({
  secret: cfg.SECRET, 
  name: cfg.KEY, 
  resave: false, 
  saveUninitialized: false,
  
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public', cfg.CACHE));
app.use(express.static('/opt/fio/sigaac/images/imagesUsers', cfg.CACHE));

// ...stack de configurações do servidor...
load('models')
.then('controllers')
.then('routes')
.into(app);

app.enable('trust proxy');

app.listen(3000, function(){
  console.log("Portal do Aluno em execução");
});

module.exports = app;
