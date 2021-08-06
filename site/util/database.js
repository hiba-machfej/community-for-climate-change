const { Sequelize } = require("sequelize");

module.exports = new Sequelize("backend-workshop", "root", "Soulofhell12", {
    host: "localhost",
    dialect: "mysql",
});