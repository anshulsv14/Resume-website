import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

const Home = () => {
  const navigate = useNavigate()
  function submit(){

    navigate("/insert")
  }
  return (
   <>
    <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
      <div>
       <img src="/public/a1.png" alt="" height={480}/>    
      </div>
      <div style={{textAlign:"center",marginTop:"70px"}} >
        <h1 style={{textAlign:"center",marginBottom:"20px"}}>A resume builder designed to land you the job</h1>
        <h3 style={{textAlign:"center",marginBottom:"20px"}}>Improve every part of your resume to land your dream job using smart suggestions supported by AI and powerful expert insight.</h3>
        <button style={{border:"none",backgroundColor:"blue",color:"white",borderRadius:"20px",padding:"10px"}} >Build my resume</button>
      </div>

    </Container>



    <h1 style={{color:"blue",textAlign:"center",marginBottom:"40px",fontWeight:"bold",fontSize:"50px"}}>Make Your Resume here</h1>
    <h1 style={{marginLeft:"40px",textDecoration:"underline red"}} >SELECT TEMPLATE</h1>
   <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr ",marginTop:"20px"}}>
   
    <img style={{border:"2px solid grey",margin:"auto"}} onClick={submit} src="/public/t1.png" alt="" height={600} width={450} />
    <img style={{border:"2px solid grey", margin:"auto"}} onClick={submit} src="/public/t4.jpg" alt="" height={600} width={450} />
    <img style={{border:"2px solid grey", margin:"auto"}} onClick={submit} src="/public/t2.jpg" alt="" height={600} width={450} />
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr ",marginTop:"20px",marginBottom:"20px"}}>
    <img style={{border:"2px solid grey", margin:"auto"}} onClick={submit} src="/public/t3.jpg" alt="" height={600} width={450} />
    <img style={{border:"2px solid grey", margin:"auto"}} onClick={submit} src="/public/t4.jpg" alt="" height={600} width={450} />
    <img style={{border:"2px solid grey", margin:"auto"}} onClick={submit} src="/public/t4.jpg" alt="" height={600} width={450} />
  
   </div>
   
   </>
  )
}

export default Home
