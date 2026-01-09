const {Sequelize}=require("sequelize")

const sequelize= new Sequelize("testdb","root","lotus",{
    host:"localhost",
    dialect:"mysql" //which server we are using
});

(async ()=>{try{
    await sequelize.authenticate()
    console.log("authenticate sucessfully")
}
catch (error){
     console.log(error)
}})()

module.exports=sequelize

