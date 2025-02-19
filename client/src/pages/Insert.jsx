

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      
      <Form style={{textAlign:"center",marginTop:"30px",marginBottom:"30px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr  1fr"}}>
        <div style={{width:"500px",marginLeft:"auto",marginRight:"auto"}}>
      <h1 style={{color:"blue"}}>PERSONAL DETAILS</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='empname'  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter city</Form.Label>
        <Form.Control type="text" name='city'  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter state</Form.Label>
        <Form.Control type="text" name='state'  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter country</Form.Label>
        <Form.Control type="text" name='country'  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter empno</Form.Label>
        <Form.Control type="text" name='empno'  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter professionalsummary</Form.Label>
        <Form.Control type="text" name='professionalsummary'  onChange={handleInput} />
      </Form.Group>
      </div>
      <div style={{width:"500px",marginLeft:"auto",marginRight:"auto"}}>
      <h1 style={{color:"blue"}}>SKILL DETAILS</h1>
      <h3 style={{color:"blue",marginTop:"30px"}}>technical skill </h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter technicalskill</Form.Label>
        <Form.Control type="text" name='technicalskill'  onChange={handleInput} />
      </Form.Group>
      <h3 style={{color:"blue",marginTop:"30px"}}>Soft skill </h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter softskill</Form.Label>
        <Form.Control type="text" name='softskill'  onChange={handleInput} />
      </Form.Group>
      </div>
     

      <div style={{width:"500px",marginLeft:"auto",marginRight:"auto"}}>
      <h1 style={{color:"blue"}}>EDUCATION DETAILS</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter course</Form.Label>
        <Form.Control type="text" name='course'  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter institute</Form.Label>
        <Form.Control type="text" name='institute'  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter gradution</Form.Label>
        <Form.Control type="text" name='gradution'  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter institute1</Form.Label>
        <Form.Control type="text" name='institute1'  onChange={handleInput} />
      </Form.Group>
      </div>

     


      <div style={{width:"500px",marginLeft:"auto",marginRight:"auto"}}>
<h1 style={{color:"blue"}}>PROJECTS DETAILS</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter project1</Form.Label>
        <Form.Control type="text" name='project1'  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter project description</Form.Label>
        <Form.Control type="text" name='projectdes'  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter project2</Form.Label>
        <Form.Control type="text" name='project2'  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter project descriptio</Form.Label>
        <Form.Control type="text" name='projectdesc'  onChange={handleInput} />
      </Form.Group>
      </div>
      </div>


      <Button style={{textAlign:"center"}} variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Insert
