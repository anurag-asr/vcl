const express=require("express");
const { connection } = require("./db");
const { Users } = require("./routes/user.routes");
const cors = require("cors")

const app=express();

app.use(cors());
app.use(express.json());

app.use("/", Users);
// app.get("/",(req,res)=>{res.send("Seuvsv")})



app.listen(3000,async(req,res)=>{
    try{
        await connection;
        console.log("connection is successfull")
    }
    catch(err){
      console.log("something is wrong")
      console.log(err)
    }
    console.log("listening in port 3000")
})