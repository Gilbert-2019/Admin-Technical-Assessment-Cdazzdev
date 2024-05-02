import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  listEnrollments,
  removeEnrollmentDetail,
} from "../Redux/Actions/EnrollmentAction";

function EnrollmentManageScreen() {
  const EnrollmentList = useSelector((state) => state.EnrollmentList);
  const { loading, error, enrollments } = EnrollmentList;

  const removeEnrollment = useSelector((state) => state.removeEnrollment);
  const {
    loading: loadingRemoveEnrollment,
    error: errorRemoveEnrollment,
    success: successRemoveEnrollment,
  } = removeEnrollment;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listEnrollments());
  }, [dispatch]);

  const removeEnrollmentHandle = (id) => {
    alert("Enrollment Deleted successfully");
    setTimeout(function () {
      window.location.reload();
    }, 500);
    dispatch(removeEnrollmentDetail(id));
  };
  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title"> Enroll Management </h2>
          </div>

          <section className="content-main">
            <div className="content-header">
              <h2 className="content-title">Enrollment Details</h2>
              <div>
                <Link to="/createenrollment" className="btn btn-primary">
                  Create new
                </Link>
              </div>
            </div>

            <div>
              {loadingRemoveEnrollment && (
                <div>Please Wait for delete your Course</div>
              )}
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
                        <th>Field</th>
                        <th>Period</th>
                        <th>Enrollment</th>
                        <th>Description</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    {/* Table Data */}
                    <tbody>
                      {enrollments.map((enrollment) => (
                        <tr key={enrollment._id}>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                              />
                            </div>
                          </td>
                          <td>{enrollment._id}</td>
                          <td>
                            <b>{enrollment.student}</b>
                          </td>
                          <td>
                            <b>{enrollment.field}</b>
                          </td>

                          <td>
                            <b>{enrollment.period} Years</b>
                          </td>
                          <td>
                            <b>{enrollment.enrollment}</b>
                          </td>
                          <td>{enrollment.comment}</td>
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
                                  to={`/updateenrollment/${enrollment._id} `}
                                  className="dropdown-item"
                                >
                                  Edit info
                                </Link>
                                <Link
                                  className="dropdown-item text-danger"
                                  onClick={() =>
                                    removeEnrollmentHandle(enrollment._id)
                                  }
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
    </div>
  );
}

export default EnrollmentManageScreen;
