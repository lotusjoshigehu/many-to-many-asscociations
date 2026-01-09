const {Sequelize,DataTypes}=require("sequelize")
const sequelize=require("../utils/dbconnection")

const IdentityCards= sequelize.define("identitycards",
    {
        id:
        {
          type:DataTypes.INTEGER,
          primaryKey:true,
          allowNull:false,
          autoIncrement:true
        },
        cardNo:
        {
            type:DataTypes.INTEGER,
            unique:true,
            allowNull:false
        }

    }
)
module.exports=IdentityCards