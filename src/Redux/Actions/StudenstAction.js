import {
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_DETAILS_REQUEST,
  STUDENT_DETAILS_SUCCESS,
  STUDENT_DETAILS_FAIL,
  UPDATE_STUDENT_DETAILS_REQUEST,
  UPDATE_STUDENT_DETAILS_SUCCESS,
  UPDATE_STUDENT_DETAILS_FAIL,
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAIL,
  CREATE_STUDENT_RESET,
  STUDENT_REMOVE_REQUEST,
  STUDENT_REMOVE_SUCCESS,
  STUDENT_REMOVE_FAIL,
  } from "../Constants/StudentsConstants";
  import axios from "axios";

  // Get All Students List
export const listStudents =
() =>
async (dispatch) => {
  try {
    dispatch({ type: STUDENT_LIST_REQUEST });
    const { data } = await axios.get(
      "/api/v1/student"
    );
    dispatch({ type: STUDENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STUDENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// SINGLE Students Details
export const listStudentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_DETAILS_REQUEST });
    const { data } = await axios.get( `/api/v1/student/${id}`);
    dispatch({ type: STUDENT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STUDENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// UPDATE Students Details
export const updateStudentDetails = (student, id) => async (dispatch, getState) => {
try {
  dispatch({ type: UPDATE_STUDENT_DETAILS_REQUEST });


  const { data } = await axios.put( `/api/v1/student/${[student.id]}`, student);
  dispatch({ type: UPDATE_STUDENT_DETAILS_SUCCESS, payload: data });
} catch (error) {
  dispatch({
    type: UPDATE_STUDENT_DETAILS_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
}
};

// CREATE Students Details
export const createStudentDetail =
(student) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_STUDENT_REQUEST })

    await axios.post( `/api/v1/student`,student);
    dispatch({ type: CREATE_STUDENT_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CREATE_STUDENT_FAIL,
      payload: message,
    });
  }
};


  // Students Details REMOVE
export const removeStudentDetail =
(id) =>
async (dispatch) => {
try {
  dispatch({ type: STUDENT_REMOVE_REQUEST });
  await axios.delete(
    `/api/v1/student/${id}`,
  );
  dispatch({ type: STUDENT_REMOVE_SUCCESS });
} catch (error) {
  dispatch({
    type: STUDENT_REMOVE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
}
};
