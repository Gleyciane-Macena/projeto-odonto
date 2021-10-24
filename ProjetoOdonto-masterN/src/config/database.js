const Sequelize = require("sequelize");

const sequelize = new Sequelize("odonto", "root", "redice12", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

sequelize
  .authenticate()
  .then(function () {
    console.log("[DATABASE] Conectado com sucesso!");
  })
  .catch(function (erro) {
    console.log("[DATABASE] Erro: " + erro);
  });


  const db = require('./db')

  const cliente = db.sequelize.define('cliente',{
    id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
     },
     email: {
       type: db.Sequelize.STRING,
       allowNull: false,
     },
     senha: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    nome: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    endereço: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
    },
    cidade: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    estado: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    cep: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
    },
    celular: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: db.Sequelize.DATE,
      allowNull: false,
    }
  })

  module.exports = cliente