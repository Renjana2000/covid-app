const express=require("express")
const patiantModel=require("../model/patiantModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let patiant=new patiantModel(data)
    let result=await patiant.save()
    res.json({
        status:"success"
    })

})




module.exports=router