//it is the main file
const express=require("express")
const app=express()
const db =require("./utils/dbconnection")
const studentroutes=require("./routes/studentroutes")
const courseroutes=require("./routes/courseroutes")

require("./models")
app.use(express.json())

app.use(studentroutes)
app.use(courseroutes)
db.sync({force:true}).then(()=>
{
  app.listen(3000,(err)=>
{
    console.log("server is running")
})
})
.catch((err)=>
{
   console.log(err)
})

