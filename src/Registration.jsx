import React from 'react';

const Register = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Register</h2>
        <form action="http://localhost:8080/courses/register" method="post">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="username"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="courseName"
            required
          >
            <option value="">Select Course</option>
            <option value="Spring Boot">Spring Boot</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;