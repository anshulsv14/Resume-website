const express = require("express")
const app = express();

const cookieparser = require("cookie-parser")
const empRoute = require("./routes/routes")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const session = require("express-session")

mongoose.connect("mongodb://127.0.0.1:27017/Customer").then(()=>{
    console.log("DB connected!!");
})
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
 app.use(cookieparser());
 app.use(session(
    {
        secret:"Your_Secret_Key",
        resave:true,
        saveUninitialized:true
    }
 ))

app.get("/setcookie",(req, res)=>{
    res.cookie("studentname","anshul shivhare",{maxAge:5000})
    res.cookie("institute","cybrom")
    res.cookie("college","lnct")
    res.send("your cookies has been successfully set")
})
 
app.get("/getcookie",(req, res)=>{
   const{studentname,institute,college} =req.cookies;
    res.send({msg:"getting cookies:",studentname:studentname,institute:institute,clgname:college})
})
app.get("/deletecookie",(req, res)=>{
    res.clearCookie("studentname")
     res.send("cookies deletes")
 })
app.get ("/setsession",(req,res)=>{
    req.session.myname = "anshul shivhare";
    req.session.mycity = "gwalior";
  res.send("your session variable is set");
})
app.get ("/getsession",(req,res)=>{
   const {myname,mycity}=req.session;
   console.log(req.session);
  res.send({name:myname,city:mycity});
})


app.use("/customer" , empRoute)

app.listen(8000)