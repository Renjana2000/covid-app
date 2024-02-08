const mongoose=require("mongoose")
const patiantSchema=new mongoose.Schema(
    {
        name:String,
        phnone:String,
        address:String,
        syndom:String,
        status:String
    }
)

module.exports=mongoose.model("patiant",patiantSchema)