const {Sequelize,DataTypes}=require("sequelize")
const sequelize=require("../utils/dbconnection")

const department=sequelize.define("department",
    {
        id:
        {
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false
        },
        name:
        {
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)

module.exports=department