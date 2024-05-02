import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { listCourses, removeCourseDetail } from "../Redux/Actions/CoursesActions";

function CoursesManageScreen() {
  const CourseList = useSelector((state) => state.CourseList);
  const { loading, error, courses } = CourseList;

  const removeCourse = useSelector((state) => state.removeCourse);
  const {
    loading: loadingRemoveCourse,
    error: errorRemoveCourse,
    success: successRemoveCourse,
  } = removeCourse;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCourses());
  }, [dispatch]);

  const removeCourseHandle = (id) => {
    alert("Course Deleted successfully");
    setTimeout(function () {
      window.location.reload();
    }, 500);
    dispatch(removeCourseDetail(id));
  };

  console.log("courses", courses);

  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title"> Course Management </h2>
          </div>

          <section className="content-main">
            <div className="content-header">
              <h2 className="content-title">Courses Details</h2>
              <div>
                <Link to="/createcourses" className="btn btn-primary">
                  Create new
                </Link>
              </div>
            </div>

            <div>
            {loadingRemoveCourse && <div>Please Wait for delete your Course</div>}
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
                        <th>Course Name</th>
                        <th>Period</th>
                        <th>Description</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    {/* Table Data */}
                    <tbody>
                    {courses.map((course) => (
                      <tr key={course._id}>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                          </div>
                        </td>
                        <td>{course._id}</td>
                        <td>
                          <b>{course.name}</b>
                        </td>
                        <td>
                          <b>{course.period} Years</b>
                        </td>
                        <td>{course.comment}</td>
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
                                to={`/updatecourses/${course._id} `}
                                className="dropdown-item"
                              >
                                Edit info
                              </Link>
                              <Link
                                className="dropdown-item text-danger"
                                onClick={() => removeCourseHandle(course._id)}
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

          <div className="card mb-4 shadow-sm"></div>
        </section>
      </main>
    </div>
  );
}

export default CoursesManageScreen;
