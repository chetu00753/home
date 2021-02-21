const { Sequelize, DataTypes } = require('sequelize');
module.exports=(sequelize,Sequelize) =>{

    const post=sequelize.define('post',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        postTitle:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        content:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        image:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        type:{
            type:Sequelize.STRING,
            allowNull:false
        }
    })
    return post;
}