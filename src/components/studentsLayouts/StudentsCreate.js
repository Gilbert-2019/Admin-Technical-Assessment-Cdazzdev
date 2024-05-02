import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../sidebar";
import { CREATE_STUDENT_RESET } from "../../Redux/Constants/StudentsConstants";
import { createStudentDetail } from "../../Redux/Actions/StudenstAction";
import { useDispatch, useSelector } from "react-redux";



function StudentsCreate() {

    const StudentCreate = useSelector((state) => state.StudentCreate);
    const {
      loading: loadingStudentCreate,
      error: errorStudentCreate,
      success: successStudentCreate,
    } = StudentCreate;

    const [student, setStudent] = useState("");
    const [course, setCourse] = useState("");
    const [faculty, setFaculty] = useState("");
    const [period, setPeriod] = useState(0);
    const [comment, setComment] = useState("");
    const [enrollments, setEnrollments] = useState([
      { field: "", project: 0, comment: "" },
    ]);

    
  const dispatch = useDispatch();

    useEffect(() => {
        if (successStudentCreate) {
          alert("Student Added successfully");
          setStudent("");
          setCourse("");
          setFaculty("");
          setPeriod(0);
          setComment("");
          setEnrollments([
            { field: "", project: 0, comment: "" },
          ]);
          dispatch({ type: CREATE_STUDENT_RESET });
        }
      }, [dispatch, successStudentCreate]);

      
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
        createStudentDetail({
            student,
            course,
            faculty,
            period,
            comment,
            enrollments,
      }),
      setTimeout(function () {
        // window.location.reload();
        window.location.href = "/student";
      }, 500)
    );
  };

  const handleEnrollmentChange = (index, field, value) => {
    const updatedEnrollments = [...enrollments];
    updatedEnrollments[index][field] = value;
    setEnrollments(updatedEnrollments);
  };

  const addEnrollment = () => {
    setEnrollments([...enrollments, { field: "", project: 0, comment: "" }]);
  };

  const removeEnrollment = (index) => {
    const updatedEnrollments = [...enrollments];
    updatedEnrollments.splice(index, 1);
    setEnrollments(updatedEnrollments);
  };

  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title"> Student Management </h2>
          </div>

          <div className="row"></div>

          <section className="content-main">
            <div className="content-header">
              <h2 className="content-title">Add Student</h2>
            </div>
            <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/student" className="btn btn-danger text-white">
              Go to Students
            </Link>
            <h2 className="content-title">Fill your details</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                
                <div className="mb-4">
                          <label htmlFor="product_title" className="form-label">
                            Student Name
                          </label>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="form-control"
                            id="product_title"
                            required
                            value={student}
                            onChange={(e) => setStudent(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="product_title" className="form-label">
                            Course
                          </label>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="form-control"
                            id="product_title"
                            required
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="product_title" className="form-label">
                            Faculty
                          </label>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="form-control"
                            id="product_title"
                            required
                            value={faculty}
                            onChange={(e) => setFaculty(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="product_price" className="form-label">
                            Period
                          </label>
                          <input
                            type="number"
                            placeholder="Type here"
                            className="form-control"
                            id="product_price"
                            required
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label">Description</label>
                          <textarea
                            placeholder="Type here"
                            className="form-control"
                            rows="7"
                            required                            
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></textarea>
                        </div>
                        {enrollments.map((enrollment, index) => (
                  <div key={index}>
                    <label style={{fontSize:20, fontWeight:"bold"}} className="form-label">Enrollments</label>

                    <div className="mb-4">
                          <label className="form-label">Field</label>
                    <input
                      type="text"
                      placeholder="Field"
                      className="form-control"
                      required
                      value={enrollment.field}
                      onChange={(e) =>
                        handleEnrollmentChange(index, "field", e.target.value)
                      }
                    />
                    </div>
                    <div className="mb-4">
                          <label className="form-label">Project</label>
                    <input
                      type="number"
                      placeholder="Project"
                      className="form-control"
                      required
                      value={enrollment.project}
                      onChange={(e) =>
                        handleEnrollmentChange(
                          index,
                          "project",
                          parseInt(e.target.value)
                        )
                      }
                    />
                    </div>
                    <div className="mb-4">
                          <label className="form-label">Comment</label>
                    <textarea
                      type="text"
                      placeholder="Comment"
                      className="form-control"
                      required
                      value={enrollment.comment}
                      onChange={(e) =>
                        handleEnrollmentChange(index, "comment", e.target.value)
                      }
                    />
                  </div>
                  </div>
                ))}
                <div>
               
                </div>
                <div style={{right:0,}} className="col-md-12">
                <button className="btn btn-icon col-md-12" style={{backgroundColor:"#007ca7", color:"white" }} type="button" onClick={addEnrollment}>
                   Add Enrollment
                </button>
                </div>
             
                
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
          </section>

          <div className="card mb-4 shadow-sm"></div>
        </section>
      </main>
    </div>
  );
}

export default StudentsCreate;
