const empModel = require("../models/model")


const dataSave = async (req , res)=>{
    const { empname,city,state,country,empno,professionalsummary,technicalskill,softskill,course,institute,gradution,institute1,project1,projectdes,project2,projectdesc} = req.body;
    
    await empModel.create({
        empname:empname,
        city:city,
        state:state,
        country:country,
        empno:empno,
        professionalsummary:professionalsummary,
        technicalskill:technicalskill,
        softskill:softskill,
        course:course,
        institute:institute,
        gradution:gradution,
        institute1:institute1,
        project1:project1,
        projectdes:projectdes,
        project2:project2,
        projectdesc:projectdesc,
       
    })

    res.send("Details Submitted!!")
}
const dataDisplay = async (req,res)=>{
    const data = await empModel. findOne().sort({_id:-1});
    res.send(data)
}

module.exports={
    dataSave,
    dataDisplay
}