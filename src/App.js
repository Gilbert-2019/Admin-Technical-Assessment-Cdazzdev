import React, { useState } from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import StudentManageScreen from './screens/StudentManageScreen';
import EnrollmentManageScreen from './screens/EnrollmentManageScreen';
import LoginScreen from './screens/LoginScreen';
import CoursesManageScreen from './screens/CoursesManageScreen';
import CoursesCreate from './components/courseLayouts/CoursesCreate';
import CourseSingleDetail from './components/courseLayouts/CourseSingleDetail';
import StudentsCreate from './components/studentsLayouts/StudentsCreate';
import StudentsSingleDetails from './components/studentsLayouts/StudentsSingleDetails';
import EnrollmentCreate from './components/enrollmentLayouts/EnrollmentCreate';
import EnrollmentSIngleDetails from './components/enrollmentLayouts/EnrollmentSIngleDetails';



function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  return (
    
    <div>
<BrowserRouter>
      <Routes>
      {!userInfo ? (
            <Route path="/" element={<LoginScreen />} />
          ) : (
            <>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/student" element={<StudentManageScreen />} />
        <Route path="/enroll" element={<EnrollmentManageScreen />} />
        <Route path="/courses" element={<CoursesManageScreen />} />
        <Route path="/createcourses" element={<CoursesCreate />} />
        <Route path="/updatecourses/:id" element={<CourseSingleDetail />} />
        <Route path="/createstudent" element={<StudentsCreate />} />
        <Route path="/updatestudent/:id" element={<StudentsSingleDetails />} />
        <Route path="/createenrollment" element={<EnrollmentCreate />} />
        <Route path="/updateenrollment/:id" element={<EnrollmentSIngleDetails />} />
         </> )}

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
