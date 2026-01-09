const {Sequelize,DataTypes}=require("sequelize")
const sequelize=require("../utils/dbconnection")

const studentcourses=sequelize.define("studentCourses",{
    id:
    {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
})

module.exports=studentcourses