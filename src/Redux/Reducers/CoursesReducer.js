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
  CREATE_COURSES_RESET,
  COURSE_REMOVE_REQUEST,
  COURSE_REMOVE_SUCCESS,
  COURSE_REMOVE_FAIL,
} from "../Constants/CoursesConstants";

// Course LIST
export const CourseListReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case COURSES_LIST_REQUEST:
      return { loading: true };
    case COURSES_LIST_SUCCESS:
      return {
        loading: false,
        courses: action.payload,
      };
    case COURSES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Single Course Details
export const CourseDetailsReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case COURSES_DETAILS_REQUEST:
      return { ...state, loading: true };
    case COURSES_DETAILS_SUCCESS:
      return { loading: false, course: action.payload };
    case COURSES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// UPDATE Course Details
export const UpdateCourseDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_COURSES_DETAILS_REQUEST:
      return { loading: true };
    case UPDATE_COURSES_DETAILS_SUCCESS:
      return { loading: false, success: true, course: action.payload };
    case UPDATE_COURSES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// CREATE Course Details
export const CourseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COURSES_REQUEST:
      return { loading: true };
    case CREATE_COURSES_SUCCESS:
      return { loading: false, success: true, course: action.payload };
    case CREATE_COURSES_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_COURSES_RESET:
      return {};
    default:
      return state;
  }
};

// REMOVE Course Details
export const removeCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_REMOVE_REQUEST:
      return { loading: true };
    case COURSE_REMOVE_SUCCESS:
      return { loading: false, success: true, course: action.payload };
    case COURSE_REMOVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
