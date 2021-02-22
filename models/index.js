const Sequelize = require('sequelize');
const config = require('../config/db.config.js');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    port: config.port,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    },
});
const db = {};
db.sequelize = sequelize;

db.user=require('../models/user.model')(sequelize,Sequelize);

db.post=require('../models/posts.model')(sequelize,Sequelize);

db.post.belongsTo(db.user,{
    foreignKey:{
        name:'user_id',
        allowNull:false,
        onDelete:'CASCADE'
    }
});

db.students = require('../models/students.model')(sequelize, Sequelize);
db.subjects = require('../models/subject.model')(sequelize, Sequelize);

db.students.belongsToMany(db.subjects, {
    through: "student_subjects",
    foreignKey: "subject_id"
});

db.subjects.belongsToMany(db.students, {
    through: "student_subjects",
    foreignKey: "student_id"
});

module.exports = db