const { Sequelize } = require("sequelize");

module.exports = new Sequelize("backendWorkshop", "root", "B./CVb*B6@A45Ds", {
  host: "localhost",
  dialect: "mysql",
});
