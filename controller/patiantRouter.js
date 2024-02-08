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

router.get("/viewall",async(req,res)=>{
    let data=await patiantModel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await patiantModel.find(input)
    res.json(data)
})

module.exports=router