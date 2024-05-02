import React from "react";
import TotalElements from "./TotalElements";
import NewCourses from "./NewCourses";
import Statistics from "./Statistics";

const Main = () => {

  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
        </div>
   <TotalElements />

        <div className="row">
          <NewCourses />
          <Statistics />
        </div>
      </section>
    </>
  );
};

export default Main;
