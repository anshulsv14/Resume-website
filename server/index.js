const express = require("express")
const app = express();


const empRoute = require("./routes/routes")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


mongoose.connect("mongodb://127.0.0.1:27017/Customer").then(()=>{
    console.log("DB connected!!");
})

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.use("/customer" , empRoute)

app.listen(8000)