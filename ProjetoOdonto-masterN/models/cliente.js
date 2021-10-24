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
      allowNull: true,
    }
  });

  //cliente.sync({force: true});

  module.exports = cliente