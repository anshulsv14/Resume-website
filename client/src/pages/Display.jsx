import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container';


const Display = () => {
  const [ mydata, setMydata ] = useState([])

  const loadData = async()=>{
    let api = "http://localhost:8000/customer/displaydata"
    let res = await axios.get(api)
    setMydata(res.data);
    console.log(res.data);
    
  }

  const ans = mydata.map((key)=>{
    return(
      <>
       <h1 style={{color:"blue"}} >{key.empname}</h1>
       <h3 style={{fontWeight:"lighter"}} >{key.city},{key.state},{key.country}</h3>
       
       <h1 >{key.empno}</h1>
       <hr  style={{marginTop:"15px",marginBottom:"15px"}} />


       <h1 style={{color:"blue"}}>PROFESSIONAL SUMMARY</h1>
        <h3 className='p1' style={{fontWeight:"lighter"}} >{key.professionalsummary}</h3>
       <hr  style={{marginTop:"15px",marginBottom:"15px"}} />


       <h1 style={{color:"blue",marginTop:"15px"}}>SKILLS</h1>
       <div style={{display:"flex"}}>
         <h2>Technical skill -</h2> 
         <h2  style={{fontWeight:"lighter"}}>{key.technicalskill}</h2>
         </div>

         <div style={{display:"flex"}}>
         <h2 >Soft skill -</h2> 
        <h2 style={{fontWeight:"lighter"}} >{key.softskill}</h2>
         </div>
      <h1 style={{fontWeight:"lighter"}} ></h1>
      <hr  style={{marginTop:"15px",marginBottom:"15px"}} />
      <h1 style={{color:"blue"}}>EDUCATION </h1>
      <h1  >{key.course}</h1>
      <h4  style={{fontWeight:"lighter"}}>{key.institute}</h4>
       <h1 style={{marginTop:"10px"}} >{key.gradution}</h1>
       <h1  style={{fontWeight:"lighter"}}>{key.institute1}</h1>

       <hr  style={{marginTop:"15px",marginBottom:"15px"}} />
       <h1 style={{marginBottom:"15px",color:"blue"}} >PROJECTS</h1>
     <h1  >{key.project1}</h1>
     <h3 style={{fontWeight:"lighter",marginBottom:"25px"}} >{key.projectdes}</h3>
    <h1  >{key.project2}</h1>
       <h3 style={{fontWeight:"lighter",marginBottom:"25px"}} >{key.projectdesc}</h3>
      
      </>
    )
  })

  useEffect(()=>{
    loadData();
  },[])
  return (
    <>
    <div style={{backgroundColor:"black"}}>
   <Container style={{backgroundColor:"white",width:"70%",margin:"auto"}}>
  
    {ans}
  
   </Container>
   </div>
  
   
    </>
  )
}

export default Display
