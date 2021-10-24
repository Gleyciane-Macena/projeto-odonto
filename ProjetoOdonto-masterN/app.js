const express = require('express');
const app = express();
//const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const cliente = require("./models/cliente.js");
const path = require("path");

//app.engine('handlebars', handlebars({defaultLayout: 'main'}));
//app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Rotas
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views")));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/views/Home.html'))
});
app.get('/cadastro', function(req, res){
  res.sendFile(path.join(__dirname + '/views/cadastro.html'))
});



//Funcionalidades
app.post('/cad-cliente', function(req, res){
  cliente.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      endereço: req.body.endereço,
      cpf: req.body.cpf,
      cidade: req.body.cidade,
      estado: req.body.estado,
      cep: req.body.cep

  }).then(function(){
      res.redirect('/')
      //res.send("Pagamento cadastro com sucesso!")
  }).catch(function(erro){
      res.send("Erro: Cliente não foi cadastrado com sucesso!" + erro)
  })
  //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>") 
})



app.listen(8080);

module.exports = app;

