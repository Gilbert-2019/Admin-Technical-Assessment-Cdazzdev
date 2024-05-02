import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../sidebar";
import { useDispatch, useSelector } from "react-redux";
import { listCourseDetails, updateCourseDetails } from "../../Redux/Actions/CoursesActions";

function CourseSingleDetail() {
  const { id } = useParams();

  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [period, setPeriod] = useState(0);
  const [comment, setComment] = useState("");

  const CourseDetails = useSelector((state) => state.CourseDetails);
  const { loading, error, course } = CourseDetails;

  const UpdateCourseDetails = useSelector((state) => state.UpdateCourseDetails);
  const {  loading: loadingCreateCourse,
    error: errorCreatCourse,} = UpdateCourseDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCourseDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (course) {
      setName(course.name);
      setPeriod(course.period);
      setComment(course.comment);
    }
  }, [dispatch, course]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
        updateCourseDetails({
        id: course._id,
        name,
        period,
        comment,
      })
    );
      setTimeout(function () {
        // window.location.reload();
        window.location.href = "/courses";
      }, 500);
  };

  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title"> Course Management </h2>
          </div>

          <div className="row"></div>

          <section className="content-main">
            <div className="content-header">
              <h2 className="content-title">Single Course Details</h2>
            </div>
            <section className="content-main" style={{ maxWidth: "1200px" }}>
              <form onSubmit={submitHandler}>
                <div className="content-header">
                  <Link to="/courses" className="btn btn-danger text-white">
                    Go to Courses
                  </Link>
                  <h2 className="content-title">Update your details</h2>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
                {loadingCreateCourse && <div>Please wait for Submit</div>}
                {errorCreatCourse && <div>Couldn't Submit</div>}
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
                          <label htmlFor="product_title" className="form-label">
                            Course Name
                          </label>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="form-control"
                            id="product_title"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        </div></>
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

export default CourseSingleDetail;
