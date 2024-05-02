import React from "react";

const NewCourses = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h2 style={{fontWeight:"bold"}} className="card-title">New Courses</h2>
   
          <div style={{marginTop:15, marginLeft:10}}>
          <div  style={{fontSize:18, fontWeight:"bold", color:"#007ca7" }}>Data Science and Machine Learning</div>
          <ul>
            <li>Focuses on extracting insights from large datasets using statistical techniques and algorithms</li>
          </ul>
          </div>

                    <div style={{marginTop:15, marginLeft:10}}>
          <div  style={{fontSize:18, fontWeight:"bold", color:"#007ca7" }}>Cybersecurity</div>
          <ul>
            <li>Concerned with protecting computer systems, networks, and data from unauthorized access, cyberattacks</li>
          </ul>
          </div>

          <div style={{marginTop:15, marginLeft:10}}>
          <div  style={{fontSize:18, fontWeight:"bold", color:"#007ca7" }}>Cloud Computing and Virtualization</div>
          <ul>
            <li>Involves the delivery of computing services over the internet, providing on-demand access to a shared pool of configurable computing resources</li>
          </ul>
          </div>

          <div style={{marginTop:15, marginLeft:10}}>
          <div  style={{fontSize:18, fontWeight:"bold", color:"#007ca7" }}>IoT (Internet of Things)</div>
          <ul>
            <li>Refers to a network of interconnected devices embedded with sensors, software, and other technologies</li>
          </ul>
          </div>

          <div style={{marginTop:15, marginLeft:10}}>
          <div  style={{fontSize:18, fontWeight:"bold", color:"#007ca7" }}>Big Data Analytics</div>
          <ul>
            <li>Focuses on analyzing and interpreting large and complex datasets to uncover patterns and trends</li>
          </ul>
          </div>

        </article>
      </div>
    </div>
  );
};

export default NewCourses;
