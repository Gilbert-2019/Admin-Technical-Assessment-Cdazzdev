import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  listStudentDetails,
  updateStudentDetails,
} from "../../Redux/Actions/StudenstAction";

function StudentsSingleDetails() {
  const { id } = useParams();

  const [student, setStudent] = useState("");
  const [course, setCourse] = useState("");
  const [faculty, setFaculty] = useState("");
  const [period, setPeriod] = useState(0);
  const [comment, setComment] = useState("");
  const [enrollments, setEnrollments] = useState([
    { field: "", project: 0, comment: "" },
  ]);

  const StudentDetails = useSelector((state) => state.StudentDetails);
  const { loading, error, singleStudent } = StudentDetails;

  const UpdateStudentDetails = useSelector(
    (state) => state.UpdateStudentDetails
  );
  const { loading: loadingUpdateStudent, error: errorUpdateStudent } =
    UpdateStudentDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listStudentDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (singleStudent) {
      setStudent(singleStudent.student);
      setCourse(singleStudent.course);
      setFaculty(singleStudent.faculty);
      setPeriod(singleStudent.period);
      setComment(singleStudent.comment);
      if (singleStudent.enrollment) {
        setEnrollments([
          {
            field: singleStudent.enrollment[0].field || "",
            project: singleStudent.enrollment[0].project || 0,
            comment: singleStudent.enrollment[0].comment || "",
          },
        ]);
      }
    }
  }, [singleStudent]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateStudentDetails({
        id: singleStudent._id,
        student,
        course,
        faculty,
        period,
        comment,
        enrollments,
      })
    );
    setTimeout(function () {
      window.location.href = "/student";
    }, 500);
  };

  const handleEnrollmentChange = (index, field, value) => {
    const updatedEnrollments = [...enrollments];
    updatedEnrollments[index][field] = value;
    setEnrollments(updatedEnrollments);
  };

  const addEnrollment = () => {
    setEnrollments([...enrollments, { field: "", project: 0, comment: "" }]);
  };

  //   const removeEnrollment = (index) => {
  //     const updatedEnrollments = [...enrollments];
  //     updatedEnrollments.splice(index, 1);
  //     setEnrollments(updatedEnrollments);
  //   };

  console.log("singleStudent", singleStudent.enrollment);
  //   console.log("Enrollment fields:", singleStudent.enrollment.map(enrollment => enrollment.field));

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
              <h2 className="content-title">Single Student Details</h2>
            </div>
            <section className="content-main" style={{ maxWidth: "1200px" }}>
              <form onSubmit={submitHandler}>
                <div className="content-header">
                  <Link to="/student" className="btn btn-danger text-white">
                    Go to Student
                  </Link>
                  <h2 className="content-title">Update your details</h2>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
                {loadingUpdateStudent && <div>Please wait for Submit</div>}
                {errorUpdateStudent && <div>Couldn't Submit</div>}
                <div className="row mb-4">
                  <div className="col-xl-8 col-lg-8">
                    <div className="card mb-4 shadow-sm">
                      <div className="card-body">
                        {loading ? (
                          <div>Loading</div>
                        ) : error ? (
                          <div>{error}</div>
                        ) : (
                          <>
                            <div className="mb-4">
                              <label
                                htmlFor="product_title"
                                className="form-label"
                              >
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
                              <label
                                htmlFor="product_title"
                                className="form-label"
                              >
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
                              <label
                                htmlFor="product_title"
                                className="form-label"
                              >
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
                              <label
                                htmlFor="product_price"
                                className="form-label"
                              >
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
                                <label
                                  style={{ fontSize: 20, fontWeight: "bold" }}
                                  className="form-label"
                                >
                                  Enrollments
                                </label>

                                <div className="mb-4">
                                  <label className="form-label">Field</label>
                                  <input
                                    type="text"
                                    placeholder="Field"
                                    className="form-control"
                                    required
                                    value={enrollment.field}
                                    onChange={(e) =>
                                      handleEnrollmentChange(
                                        index,
                                        "field",
                                        e.target.value
                                      )
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
                                      handleEnrollmentChange(
                                        index,
                                        "comment",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            ))}
                            <div style={{ right: 0 }} className="col-md-12">
                              <button
                                className="btn btn-icon col-md-12"
                                style={{
                                  backgroundColor: "#007ca7",
                                  color: "white",
                                }}
                                type="button"
                                onClick={addEnrollment}
                              >
                                Add Enrollment
                              </button>
                            </div>
                          </>
                        )}
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

export default StudentsSingleDetails;
