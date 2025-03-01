const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
 
  empname:String,
  city:String,
  state:String,
  country:String,
  empno:String,
  professionalsummary:String,
  technicalskill:String,
  softskill:String,
  course:String,
  institute:String,
  gradution:String,
  institute1:String,
  project1:String,
  projectdes:String,
  project2:String,
  projectdesc:String,
  
  
},
{timestamps:true})

module.exports = mongoose.model("CustomerData" , empSchema)