import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { combineReducers } from 'redux';
import { StudentCreateReducer, StudentDetailsReducer, UpdateStudentDetailsReducer, removeStudentReducer, studentsListReducer } from './Reducers/StudentReducers';
import { EnrollmentCreateReducer, EnrollmentDetailsReducer, EnrollmentListReducer, UpdateEnrollmentDetailsReducer, removeEnrollmentReducer } from './Reducers/EnrollmentReducers';
import { CourseCreateReducer, CourseDetailsReducer, CourseListReducer, UpdateCourseDetailsReducer, removeCourseReducer } from './Reducers/CoursesReducer';
import { userLoginReducer } from './Reducers/UserReducers';

const rootReducer = combineReducers({
  studentsList: studentsListReducer,
  StudentDetails:StudentDetailsReducer,
  UpdateStudentDetails:UpdateStudentDetailsReducer,
  StudentCreate:StudentCreateReducer,
  removeStudent:removeStudentReducer,

  EnrollmentList:EnrollmentListReducer,
  EnrollmentDetails:EnrollmentDetailsReducer,
  UpdateEnrollmentDetails:UpdateEnrollmentDetailsReducer,
  EnrollmentCreate:EnrollmentCreateReducer,
  removeEnrollment:removeEnrollmentReducer,


  CourseList:CourseListReducer,
  CourseDetails:CourseDetailsReducer,
  UpdateCourseDetails:UpdateCourseDetailsReducer,
  CourseCreate:CourseCreateReducer,
  removeCourse:removeCourseReducer,
  userLogin: userLoginReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware), 
});

export default store;
