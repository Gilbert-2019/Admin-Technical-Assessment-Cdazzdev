import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  listEnrollmentDetails,
  updateEnrollmentDetails,
} from "../../Redux/Actions/EnrollmentAction";

function EnrollmentSIngleDetails() {
  const { id } = useParams();

  window.scrollTo(0, 0);
  const [student, setStudent] = useState("");
  const [field, setField] = useState("");
  const [enrollment, setEnrollmnt] = useState("");
  const [period, setPeriod] = useState(0);
  const [comment, setComment] = useState("");

  const EnrollmentDetails = useSelector((state) => state.EnrollmentDetails);
  const { loading, error, singleEnrollment } = EnrollmentDetails;

  const UpdateEnrollmentDetails = useSelector(
    (state) => state.UpdateEnrollmentDetails
  );
  const { loading: loadingCreateEnroll, error: errorCreatEnroll } =
    UpdateEnrollmentDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listEnrollmentDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (singleEnrollment) {
      setStudent(singleEnrollment.student);
      setField(singleEnrollment.field);
      setEnrollmnt(singleEnrollment.enrollment);
      setPeriod(singleEnrollment.period);
      setComment(singleEnrollment.comment);
    }
  }, [dispatch, singleEnrollment]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateEnrollmentDetails({
        id: singleEnrollment._id,
        student,
        field,
        enrollment,
        period,
        comment,
      })
    );
    setTimeout(function () {
      // window.location.reload();
      window.location.href = "/enroll";
    }, 500);
  };

  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title"> Enrollment Management </h2>
          </div>

          <div className="row"></div>

          <section className="content-main">
            <div className="content-header">
              <h2 className="content-title">Single Enrollment Details</h2>
            </div>
            <section className="content-main" style={{ maxWidth: "1200px" }}>
              <form onSubmit={submitHandler}>
                <div className="content-header">
                  <Link to="/enroll" className="btn btn-danger text-white">
                    Go to Enroll
                  </Link>
                  <h2 className="content-title">Update your details</h2>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
                {loadingCreateEnroll && <div>Please wait for Submit</div>}
                {errorCreatEnroll && <div>Couldn't Submit</div>}
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
                                Field
                              </label>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="form-control"
                                id="product_title"
                                required
                                value={field}
                                onChange={(e) => setField(e.target.value)}
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="product_title"
                                className="form-label"
                              >
                                Enrollment
                              </label>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="form-control"
                                id="product_title"
                                required
                                value={enrollment}
                                onChange={(e) => setEnrollmnt(e.target.value)}
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

export default EnrollmentSIngleDetails;
