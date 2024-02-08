const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patiantRouter=require("./controller/patiantRouter")

const app=express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://renjana2000:tuttu2332000@cluster0.ktenebf.mongodb.net/patiantDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/patiant",patiantRouter)


app.listen(3001,()=>{
    console.log("server running")
})