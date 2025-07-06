import React from 'react';
import './index.css';
import java from './assets/java.png'
import spring  from './assets/Spring_logo.png'
import sql from './assets/sql.png'
import react from './assets/react_logo.png'
import './Registration.jsx'
import { Link } from 'react-router-dom';

function StudentPortal() {
  return (
    <div className="container">
    <div className="Navbar">
        <h4>Course Portal</h4>
        <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>
  Home
</button>
        <Link to="/registration">
  <button>Course Registration</button>
</Link>

        <Link to="/enroll"><button>Enrolled Students</button></Link>
        <Link to="/available"><button>Available Courses</button></Link>
        <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
  About
</button>

        
      </div>
      <div className="heading" id='home'>
        <h2>Welcome to Student Course Enrollment Portal</h2>
      </div>
      <div className="SubHeading">Easily register, manage, and explore available courses.</div>
      
      
      <div className="image-grid">
        <img src={java} alt="Java" />
        <img src={spring} alt="Spring" />
        <img src={sql} alt="Sql" />
        <img src={react} alt="Raect" />
      </div>
      <div className="Notice">
        <marquee scrollamount="20">Regsitration is going to close please select your course ASAP!</marquee>
      </div>
      <div className="about" id="about">
        <h2>About Course Portal</h2>
        <p>Our Student Course Enrollment Portal is designed to simplify the registration process, helping students easily browse, register, and manage their courses in one place. With a user-friendly interface and real-time updates, the portal ensures a seamless academic experience.</p>
      </div>
    </div>
  
  );
}

export default StudentPortal;