import React from "react";

const Statistics = () => {
  return (
<div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h2 style={{fontWeight:"bold"}} className="card-title">Certification Courses </h2>
   
          <div style={{marginTop:15, marginLeft:10}}>
          <div  style={{fontSize:18, fontWeight:"bold", color:"#007ca7" }}>Mobile App Development</div>
          <ul>
            <li>Involves creating software applications specifically designed to run on mobile devices, such as smartphones and tablets,</li>
          </ul>
          </div>

                    <div style={{marginTop:15, marginLeft:10}}>
          <div  style={{fontSize:18, fontWeight:"bold", color:"#007ca7" }}>DevOps</div>
          <ul>
            <li>Combines software development (Dev) with IT operations (Ops)</li>
          </ul>
          </div>

          <div style={{marginTop:15, marginLeft:10}}>
          <div  style={{fontSize:18, fontWeight:"bold", color:"#007ca7" }}>Virtual Reality Development</div>
          <ul>
            <li>computer-generated environments or simulations that users can interact with, often using specialized hardware</li>
          </ul>
          </div>

          <div style={{marginTop:15, marginLeft:10}}>
          <div  style={{fontSize:18, fontWeight:"bold", color:"#007ca7" }}>Natural Language Processing (NLP)</div>
          <ul>
            <li>Refers to a network of interconnected devices embedded with sensors, software, and other technologies</li>
          </ul>
          </div>

          <div style={{marginTop:15, marginLeft:10}}>
          <div  style={{fontSize:18, fontWeight:"bold", color:"#007ca7" }}>Image Processing</div>
          <ul>
            <li>Image processing involves the manipulation and analysis of digital images using algorithms and computational techniques</li>
          </ul>
          </div>

        </article>
      </div>
    </div>
  );
};

export default Statistics;
