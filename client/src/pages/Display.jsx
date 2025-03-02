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

 
     
      

  useEffect(()=>{
    loadData();
  },[])
  return (
    <>
    <div style={{backgroundColor:"black"}}>
   <Container style={{backgroundColor:"white",width:"70%",margin:"auto"}}>
  
   <h1 style={{color:"blue"}} >{mydata.empname}</h1>
       <h3 style={{fontWeight:"lighter"}} >{mydata.city},{mydata.state},{mydata.country}</h3>
       
       <h1 >{mydata.empno}</h1>
       <hr  style={{marginTop:"15px",marginBottom:"15px"}} />


       <h1 style={{color:"blue"}}>PROFESSIONAL SUMMARY</h1>
        <h3 className='p1' style={{fontWeight:"lighter"}} >{mydata.professionalsummary}</h3>
       <hr  style={{marginTop:"15px",marginBottom:"15px"}} />


       <h1 style={{color:"blue",marginTop:"15px"}}>SKILLS</h1>
       <div style={{display:"flex"}}>
         <h2>Technical skill -</h2> 
         <h2  style={{fontWeight:"lighter"}}>{mydata.technicalskill}</h2>
         </div>

         <div style={{display:"flex"}}>
         <h2 >Soft skill -</h2> 
        <h2 style={{fontWeight:"lighter"}} >{mydata.softskill}</h2>
         </div>
      <h1 style={{fontWeight:"lighter"}} ></h1>
      <hr  style={{marginTop:"15px",marginBottom:"15px"}} />
      <h1 style={{color:"blue"}}>EDUCATION </h1>
      <h1  >{mydata.course}</h1>
      <h4  style={{fontWeight:"lighter"}}>{mydata.institute}</h4>
       <h1 style={{marginTop:"10px"}} >{mydata.gradution}</h1>
       <h1  style={{fontWeight:"lighter"}}>{mydata.institute1}</h1>

       <hr  style={{marginTop:"15px",marginBottom:"15px"}} />
       <h1 style={{marginBottom:"15px",color:"blue"}} >PROJECTS</h1>
     <h1  >{mydata.project1}</h1>
     <h3 style={{fontWeight:"lighter",marginBottom:"25px"}} >{mydata.projectdes}</h3>
    <h1  >{mydata.project2}</h1>
       <h3 style={{fontWeight:"lighter"}} >{mydata.projectdesc}</h3>
       <hr />
  
   </Container>
  
   </div>
  
   
    </>
  )
}

export default Display
