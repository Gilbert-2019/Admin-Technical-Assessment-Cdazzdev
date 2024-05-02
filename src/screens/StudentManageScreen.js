import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "./../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { listStudents, removeStudentDetail } from "../Redux/Actions/StudenstAction";


function StudentManageScreen() {
    const studentsList = useSelector((state) => state.studentsList);
    const { loading, error, students } = studentsList;

    const removeStudent = useSelector((state) => state.removeStudent);
    const {
      loading: loadingRemoveStudent,
      error: errorRemoveStudent,
      success: successRemoveStudent,
    } = removeStudent;
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listStudents());
    }, [dispatch]);
  
    const removeStudentHandle = (id) => {
      alert("Student Deleted successfully");
      setTimeout(function () {
        window.location.reload();
      }, 500);
      dispatch(removeStudentDetail(id));
    };
  
    console.log("students", students);
    console.log("students", students);
  return (
    <>
    <Sidebar />
    <main className="main-wrap">
      <Header />
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Student Management </h2>
        </div>
        <section className="content-main">
            <div className="content-header">
              <h2 className="content-title">Student Details</h2>
              <div>
                <Link to="/createstudent" className="btn btn-primary">
                  Add Student
                </Link>
              </div>
            </div>

            <div>
            {loadingRemoveStudent && <div>Please Wait for delete your Student Details</div>}
              {loading ? (
                <div>Loading</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                <>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                          </div>
                        </th>
                        <th>ID</th>
                        <th>Student Name</th>
                        <th>Course</th>
                        <th>Period</th>
                        <th>Faculty</th>
                        <th>Description</th>
                        <th>Enrollment</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    {/* Table Data */}
                    <tbody>
                    {students.map((student) => (
                      <tr key={student._id}>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                          </div>
                        </td>
                        <td>{student._id}</td>
                        <td>
                          <b>{student.student}</b>
                        </td>
                        <td>
                          <b>{student.course}</b>
                        </td>
                        <td>
                          <b>{student.period} Years</b>
                        </td>
                        <td>
                          <b>{student.faculty}</b>
                        </td>
                        <td>
                          <b>{student.comment}</b>
                        </td>
                        <td>
                        {student.enrollment.map((enrollment) => (
                                <ul key={enrollment._id}>
                                <li >
                                  Field: {enrollment.field}                                  
                                </li>
                                <li > 
                                  Project:{" "}{enrollment.project}
                                </li>
                                <li >Comment:{" "} {enrollment.comment}
                                </li>
                                </ul>
                              ))}</td>
                        <td className="text-end">
                          <div className="dropdown">
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              className="btn btn-light"
                            >
                              <i className="fas fa-ellipsis-h"></i>
                            </Link>
                            <div className="dropdown-menu">
                              <Link
                                to={`/updatestudent/${student._id} `}
                                className="dropdown-item"
                              >
                                Edit info
                              </Link>
                              <Link
                                className="dropdown-item text-danger"
                                onClick={() => removeStudentHandle(student._id)}
                              >
                                Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>     
                        ))}                                    
                    </tbody>
                  </table>{" "}
                </>
              )}
            </div>
          </section>
      </section>
    </main>
  </>
  )
}

export default StudentManageScreen