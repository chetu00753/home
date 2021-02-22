const { Sequelize } = require('sequelize');

module.exports=(sequelize,Sequelize) =>{

    const subjects=sequelize.define('subjects',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        subject_name:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        teacher:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        subject_code:{
            type:Sequelize.STRING,
            allowNull:false,
        }
    })
    return subjects;
}