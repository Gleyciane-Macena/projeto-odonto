const express = require('express');
const app = express();

//criando um servidor

app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"))

module.exports = app;