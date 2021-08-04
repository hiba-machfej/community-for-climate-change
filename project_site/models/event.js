const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");


const Event = db.define(
    "events", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.DATE
        }
    }
)

module.exports = Event;