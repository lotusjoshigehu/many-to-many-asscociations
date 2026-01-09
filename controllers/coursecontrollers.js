const Course=require("../models/courses")

const  addcourse=async (req,res)=>
{
    try {
        const {name}=req.body
        const course=await Course.create({
            "name":name
        })
        res.json(course)
    } catch (error) {
        res.status(500).json({"error":error.message})
        
    }

}

module.exports={addcourse}