

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Insert = () => {
  const[input,setInput] = useState({})
  const navigate = useNavigate()


  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input)
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
     let api = "http://localhost:8000/customer/insertdata";
      let response = await axios.post(api, input)
      console.log(response);
    
      navigate("/display")
  }
  return (
    <>
       
       
      
    
      
      
       
      <h1 style={{color:"black",marginLeft:"200px",marginBottom:"20px"}}>PERSONAL DETAILS</h1>
      <h3 style={{maxWidth:"500px",marginLeft:"200px",marginBottom:"20px"}}>What’s the best way for recruiters to contact you?</h3>
      <h6 style={{maxWidth:"500px",marginLeft:"200px",marginBottom:"20px",color:"grey"}}>We suggest including an email and phone number.</h6>
     
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",width:"70%",margin:"auto"}}>
        <div>
      <label id='label' htmlFor="">FIRST NAME</label><br />
      <input id='inp' type="text"  name='empname'  onChange={handleInput} placeholder='  e.g Saanvi'/> <br />
      </div>
  

      <div>
      <label id='label' htmlFor="">CITY </label><br />
      <input id='inp' type="text"  name='city'  onChange={handleInput} placeholder='  e.g Bhopal'/><br />
      </div>

<div>
      <label id='label' htmlFor="">STATE </label><br />
      <input id='inp' type="text"  name='state'  onChange={handleInput} placeholder='  e.g Delhi'/> <br />
      </div>

      <div>
      <label id='label' htmlFor="">COUNTRY </label><br />
      <input id='inp' type="text"  name='country'  onChange={handleInput} placeholder='  e.g Delhi'/> <br />
      </div>

      <div>      <label id='label' htmlFor="">PHONE </label><br />
      <input id='inp' type="text"  name='empno'  onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />
      </div>

      <div>
      <label id='label' htmlFor="">PROFESSIONAL SUMMARY </label><br />
      <input id='inp' type="text"  name='professionalsummary'  onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />
      </div>
     
      </div>
      <button id='bt1' style={{marginLeft:"200px",marginTop:"30px"}}>add more</button>
<hr />
     
      <h1 style={{color:"black",marginLeft:"200px",marginBottom:"20px"}}>SKILL DETAILS</h1>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",width:"70%",margin:"auto"}}>
      
     

      

      <div>
      <label id='label' htmlFor=""> TECHNICAL SKILL </label><br />
      <input id='inp' type="text"  name='technicalskill'  onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />
      </div>

      
      
<div>      <label id='label' htmlFor=""> SOFT SKILL </label><br />
      <input id='inp' type="text"  name='softskill'  onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />
      </div>

      </div>
      <button id='bt1' style={{marginLeft:"200px",marginTop:"30px"}}>add more skills</button>
     <hr />

     
      <h1 style={{color:"black",marginLeft:"200px",marginBottom:"20px"}}>EDUCATION DETAILS</h1>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",width:"70%",margin:"auto"}}>
<div>
      <label id='label' htmlFor=""> COURSE </label><br />
      <input id='inp' type="text" name='course'  onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />
      </div>

     
<div>
      <label id='label' htmlFor=""> INSTITUTE </label><br />
      <input id='inp' type="text" name='institute'  onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />

      </div>
  
<div>
      <label id='label' htmlFor=""> GRADUATION </label><br />
      <input id='inp' type="text" name='gradution'  onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />
      </div>

    
<div>
      <label id='label' htmlFor=""> GRADUATION INSTITUE </label><br />
      <input id='inp' type="text" name='institute1'  onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />

      </div>

     </div>
<div >
<button id='bt1' style={{marginLeft:"200px",marginTop:"30px"}}>add more details</button>
<hr  />
</div>  
<h1 style={{color:"black",marginLeft:"200px",marginBottom:"20px"}}>PROJECTS DETAILS</h1>
<div style={{display:"grid", gridTemplateColumns:"1fr 1fr",width:"70%",margin:"auto"}}>
<div>
      <label id='label' htmlFor=""> 1st PROJECT </label><br />
      <input id='inp' type="text" name='project1'  onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />

      </div>
     
<div>
      <label id='label' htmlFor=""> PROJECT DESCRIPTION </label><br />
      <input id='inp' type="text" name='projectdes'  onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />

</div>
      
<div>
      <label id='label' htmlFor=""> 2nd PROJECT  </label><br />
      <input id='inp' type="text" name='project2'   onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />
      </div>

    <div>

      <label id='label' htmlFor=""> PROJECT DESCRIPTION  </label><br />
      <input id='inp' type="text" name='projectdesc'  onChange={handleInput} placeholder='  e.g +91 7769823576'/> <br />
      </div>
     
     </div>
     <button id='bt1' style={{marginLeft:"200px",marginTop:"30px"}}>add more projects</button>
<hr />
      <Button id='bt1'  style={{marginLeft:"200px",marginTop:"30px"}} type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      
    </>
  )
}

export default Insert
