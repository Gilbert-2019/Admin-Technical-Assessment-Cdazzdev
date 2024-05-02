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
  
  // Enrollment LIST
  export const EnrollmentListReducer = (state = { enrollments: [] }, action) => {
    switch (action.type) {
      case ENROLLMENT_LIST_REQUEST:
        return { loading: true };
      case ENROLLMENT_LIST_SUCCESS:
        return {
          loading: false,
          enrollments: action.payload,
        };
      case ENROLLMENT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
// Single Enrollment Details
export const EnrollmentDetailsReducer = (state = { singleEnrollment: {} }, action) => {
  switch (action.type) {
    case ENROLLMENT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ENROLLMENT_DETAILS_SUCCESS:
      return { loading: false, singleEnrollment: action.payload };
    case ENROLLMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// UPDATE Enrollment Details
export const UpdateEnrollmentDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ENROLLMENT_DETAILS_REQUEST:
      return { loading: true };
    case UPDATE_ENROLLMENT_DETAILS_SUCCESS:
      return { loading: false, success: true, enrollment: action.payload };
    case UPDATE_ENROLLMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// CREATE Enrollment Details
export const EnrollmentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ENROLLMENT_REQUEST:
      return { loading: true };
    case CREATE_ENROLLMENT_SUCCESS:
      return { loading: false, success: true, enrollment: action.payload };
    case CREATE_ENROLLMENT_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_ENROLLMENT_RESET:
      return {};
    default:
      return state;
  }
};

// REMOVE Enrollment Details
export const removeEnrollmentReducer = (state = {}, action) => {
  switch (action.type) {
    case ENROLLMENT_REMOVE_REQUEST:
      return { loading: true };
    case ENROLLMENT_REMOVE_SUCCESS:
      return { loading: false, success: true, enrollment: action.payload };
    case ENROLLMENT_REMOVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};