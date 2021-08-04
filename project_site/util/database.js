const { Sequelize } = require('sequelize')

module.exports = new Sequelize('community-for-climate-change', 'root', 'Soulofhell12', {
    host: "localhost",
    dialect: "mysql",
});