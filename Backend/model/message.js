const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Parent = sequelize.define("parent", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sender:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    receiver:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    
})

module.exports = Parent;