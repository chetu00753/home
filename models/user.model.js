const { Sequelize } = require('sequelize');

module.exports=(sequelize,Sequelize) =>{

    const user=sequelize.define('user',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        firstname:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        lastname:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        mobile:{
            type:Sequelize.BIGINT,
            allowNull:false,
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        username:{
            type:Sequelize.STRING,
            allowNull:false
        },  
        password:{
            type:Sequelize.STRING,
            allowNull:false,
        },
    })
    return user;
}