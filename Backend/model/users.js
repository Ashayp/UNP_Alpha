const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Users = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    role:{
        type: Sequelize.STRING,
        allowNull: false,
    }
}, 
{
    tableName: "users",
    timestamps: false
})

module.exports = Users;