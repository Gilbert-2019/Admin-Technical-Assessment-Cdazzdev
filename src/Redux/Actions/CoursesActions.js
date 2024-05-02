import {
    COURSES_LIST_REQUEST,
    COURSES_LIST_SUCCESS,
    COURSES_LIST_FAIL,
    COURSES_DETAILS_REQUEST,
    COURSES_DETAILS_SUCCESS,
    COURSES_DETAILS_FAIL, 
    UPDATE_COURSES_DETAILS_REQUEST,
    UPDATE_COURSES_DETAILS_SUCCESS,
    UPDATE_COURSES_DETAILS_FAIL,
    CREATE_COURSES_REQUEST,
    CREATE_COURSES_SUCCESS,
    CREATE_COURSES_FAIL,
    COURSE_REMOVE_REQUEST,
    COURSE_REMOVE_SUCCESS,
    COURSE_REMOVE_FAIL,

  } from "../Constants/CoursesConstants";
  import axios from "axios";

  // Get All Courses List
export const listCourses =
() =>
async (dispatch) => {
  try {
    dispatch({ type: COURSES_LIST_REQUEST });
    const { data } = await axios.get(
      "/api/v1/course"
    );
    dispatch({ type: COURSES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COURSES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// SINGLE Course Details
export const listCourseDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: COURSES_DETAILS_REQUEST });
      const { data } = await axios.get( `/api/v1/course/${id}`);
      dispatch({ type: COURSES_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: COURSES_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  // UPDATE Course Details
export const updateCourseDetails = (course, id) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_COURSES_DETAILS_REQUEST });

 
    const { data } = await axios.put( `/api/v1/course/${[course.id]}`, course);
    dispatch({ type: UPDATE_COURSES_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_COURSES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// CREATE Course Details
export const createCourseDetail =
  (course) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_COURSES_REQUEST })

      await axios.post( `/api/v1/course`,course);
      dispatch({ type: CREATE_COURSES_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: CREATE_COURSES_FAIL,
        payload: message,
      });
    }
  };


    // Course Details REMOVE
export const removeCourseDetail =
(id) =>
async (dispatch) => {
  try {
    dispatch({ type: COURSE_REMOVE_REQUEST });
    await axios.delete(
      `/api/v1/course/${id}`,
    );
    dispatch({ type: COURSE_REMOVE_SUCCESS });
  } catch (error) {
    dispatch({
      type: COURSE_REMOVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
