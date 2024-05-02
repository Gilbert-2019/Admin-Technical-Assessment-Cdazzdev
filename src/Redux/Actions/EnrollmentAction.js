import {
  ENROLLMENT_LIST_REQUEST,
  ENROLLMENT_LIST_SUCCESS,
  ENROLLMENT_LIST_FAIL,
  ENROLLMENT_DETAILS_REQUEST,
ENROLLMENT_DETAILS_SUCCESS,
ENROLLMENT_DETAILS_FAIL,
UPDATE_ENROLLMENT_DETAILS_REQUEST,
UPDATE_ENROLLMENT_DETAILS_SUCCESS,
UPDATE_ENROLLMENT_DETAILS_FAIL,
CREATE_ENROLLMENT_REQUEST,
CREATE_ENROLLMENT_SUCCESS,
CREATE_ENROLLMENT_FAIL,
CREATE_ENROLLMENT_RESET,
ENROLLMENT_REMOVE_REQUEST,
ENROLLMENT_REMOVE_SUCCESS,
ENROLLMENT_REMOVE_FAIL,
  } from "../Constants/EnrollmentConstants";
  import axios from "axios";

  // Get All Enrollment List
export const listEnrollments =
() =>
async (dispatch) => {
  try {
    dispatch({ type: ENROLLMENT_LIST_REQUEST });
    const { data } = await axios.get(
      "/api/v1/enrollment"
    );
    dispatch({ type: ENROLLMENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ENROLLMENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// SINGLE Enrollment Details
export const listEnrollmentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ENROLLMENT_DETAILS_REQUEST });
    const { data } = await axios.get( `/api/v1/enrollment/${id}`);
    dispatch({ type: ENROLLMENT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ENROLLMENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// UPDATE enrollment Details
export const updateEnrollmentDetails = (enrollment, id) => async (dispatch, getState) => {
try {
  dispatch({ type: UPDATE_ENROLLMENT_DETAILS_REQUEST });


  const { data } = await axios.put( `/api/v1/enrollment/${[enrollment.id]}`, enrollment);
  dispatch({ type: UPDATE_ENROLLMENT_DETAILS_SUCCESS, payload: data });
} catch (error) {
  dispatch({
    type: UPDATE_ENROLLMENT_DETAILS_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
}
};

// CREATE enrollment Details
export const createEnrollmentDetail =
(enrollment) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ENROLLMENT_REQUEST })

    await axios.post( `/api/v1/enrollment`,enrollment);
    dispatch({ type: CREATE_ENROLLMENT_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CREATE_ENROLLMENT_FAIL,
      payload: message,
    });
  }
};


  // enrollment Details REMOVE
export const removeEnrollmentDetail =
(id) =>
async (dispatch) => {
try {
  dispatch({ type: ENROLLMENT_REMOVE_REQUEST, });
  await axios.delete(
    `/api/v1/enrollment/${id}`,
  );
  dispatch({ type: ENROLLMENT_REMOVE_SUCCESS });
} catch (error) {
  dispatch({
    type: ENROLLMENT_REMOVE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
}
};



