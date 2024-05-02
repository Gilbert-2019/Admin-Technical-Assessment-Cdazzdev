import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCourses } from "../../Redux/Actions/CoursesActions";
import { listEnrollments } from "../../Redux/Actions/EnrollmentAction";
import { listStudents } from "../../Redux/Actions/StudenstAction";

function TotalElements() {
    const CourseList = useSelector((state) => state.CourseList);
    const { courses } = CourseList;

    const EnrollmentList = useSelector((state) => state.EnrollmentList);
    const { enrollments } = EnrollmentList;

    const studentsList = useSelector((state) => state.studentsList);
    const { students } = studentsList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCourses()); 
        dispatch(listEnrollments()); 
        dispatch(listStudents()); 
    }, [dispatch]);

    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-primary">
                            <i className="text-primary fas fa-paperclip"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Total Enrollments</h6>{" "}
                            {enrollments && (
                                <span> {enrollments.length}</span>
                            )}
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-success">
                            <i className="text-success fas fa-book-open"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Total Courses</h6>
                            {courses && (
                                <span> {courses.length}</span>
                            )}
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-warning">
                            <i className="text-warning fas fa-user"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Total Students</h6>
                            {students && (
                                <span> {students.length}</span>
                            )}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default TotalElements;
