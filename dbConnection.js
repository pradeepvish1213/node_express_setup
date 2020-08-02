const {Sequelize} = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelizeConnection = new Sequelize('test', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelizeConnection