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

// Students LIST
export const studentsListReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_LIST_REQUEST:
      return { loading: true };
    case STUDENT_LIST_SUCCESS:
      return {
        loading: false,
        students: action.payload,
      };
    case STUDENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Single Student Details
export const StudentDetailsReducer = (state = { singleStudent: {} }, action) => {
  switch (action.type) {
    case STUDENT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case STUDENT_DETAILS_SUCCESS:
      return { loading: false, singleStudent: action.payload };
    case STUDENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// UPDATE student Details
export const UpdateStudentDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_STUDENT_DETAILS_REQUEST:
      return { loading: true };
    case UPDATE_STUDENT_DETAILS_SUCCESS:
      return { loading: false, success: true, student: action.payload };
    case UPDATE_STUDENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// CREATE student Details
export const StudentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STUDENT_REQUEST:
      return { loading: true };
    case CREATE_STUDENT_SUCCESS:
      return { loading: false, success: true, student: action.payload };
    case CREATE_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_STUDENT_RESET:
      return {};
    default:
      return state;
  }
};

// REMOVE student Details
export const removeStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_REMOVE_REQUEST:
      return { loading: true };
    case STUDENT_REMOVE_SUCCESS:
      return { loading: false, success: true, student: action.payload };
    case STUDENT_REMOVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
