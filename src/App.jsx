import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentPortal from './StudentPortal.jsx';
import Registration from './Registration.jsx';
import Enrolled from './Enroll.jsx';
import AvailableCourses from './AvailableCourse.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentPortal />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/enroll" element={<Enrolled />} />
        <Route path="/available" element={<AvailableCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
