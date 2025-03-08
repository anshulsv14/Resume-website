import React from "react";
import { useNavigate } from "react-router-dom";
import FlipImage from "./Images";


const Home = () => {
 
  const navigate = useNavigate();
  function submit() {
    navigate("/insert");
  }
  return (
    <>
    <div id="home">
      <div id="h1" >
       
          <img
            src="/public/h1.png"
            alt=""
            height={400}
            width={400}
            style={{ marginTop: "30px" }}
          />
      </div>
     <div className="image-container">
        <img src="t4.jpg" alt="Rotating Image" className="rotate"/>
    </div>
     
      
   
      </div>
      <div id="build1">
        <div id="build">
          <div id="can">
            <div>
              <h2 id="l1">Let’s Land Your Dream Job Together</h2>
            </div>
            <div>
              <button id="bt1">build your resume now</button>
            </div>
            <div id="can1">
             <div id="can2">As seen in</div>
             <div id="can3">
              <ul>
                <li><img src="brand-1.svg" alt="" /></li>
                <li><img src="brand-2-1.svg" alt="" /></li>
                <li><img src="brand-3.svg" alt="" /></li>
                <li><img src="brand-4 (1).svg" alt="" /></li>
                <li><img src="brand-5.svg" alt="" /></li>
                <li><img src="brand-6.svg" alt="" /></li>
               
                </ul>
              </div>
             <div id="can4">
             <ul>
                <li><img src="brand-7.svg" alt="" /></li>
                <li><img src="brand-8.svg" alt="" /></li>
                <li><img src="brand-9.svg" alt="" /></li>
                <li><img src="brand-10 (1).svg" alt="" /></li>
                <li><img src="brand-11.svg" alt="" /></li>
                
               
                </ul>
             </div>
            
            </div>
          </div>
        </div>
      </div>
    

     
      
     <div id="template">
      
     <h2 id="text">
       Pick one of many world-class templates and build your resume in minutes
      </h2>
      <div id="temp1">
         <div ><img onClick={submit} id="img1" src="t1.png" alt="" /></div>
         <div ><img onClick={submit} id="img1" src="t2.jpg" alt="" /></div>
         <div><img onClick={submit} id="img1" src="t3.jpg" alt="" /></div>
         <div><img onClick={submit} id="img1" src="t4.jpg" alt="" /></div>
      </div>
      <div style={{marginTop:"20px"}}>
            <center>  <button id="bt1">See All Templates</button></center>
            </div>
     </div>
    
   <FlipImage/>

     
    </>
  );
};

export default Home;
