const { Sequelize } = require('sequelize');

module.exports=(sequelize,Sequelize) =>{

    const students=sequelize.define('students',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        student_name:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        roll_no:{
            type:Sequelize.INTEGER, 
            allowNull:false,
        },
        subject_opted:{
            type:Sequelize.STRING,
            allowNull:false,
        }
    })
    return students;
}