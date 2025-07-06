import React, { useEffect } from 'react';

const AvailableCourses = () => {
  useEffect(() => {
    const showCourses = async () => {
      try {
        const response = await fetch("http://localhost:8080/courses"); // Assuming an endpoint for courses
        const courses = await response.json();
        const courseTable = document.getElementById("courseTable");
        courseTable.innerHTML = ''; // Clear existing content
        courses.forEach(course => {
          const row = `
            <tr>
              <td>${course.courseId}</td>
              <td>${course.courseName}</td>
              <td>${course.trainer}</td>
              <td>${course.durationInWeeks}</td>
            </tr>`;
          courseTable.innerHTML += row;
        });
      } catch (error) {
        console.error('Error fetching courses data:', error);
      }
    };

    showCourses();
  }, []);

  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #e6f0fa, #f0f2f5)',
      minHeight: '100vh',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#1a3c6d',
      fontSize: '32px',
      fontWeight: '600',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
    },
    table: {
      width: '90%',
      margin: '0 auto',
      borderCollapse: 'collapse',
      backgroundColor: '#ffffff',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      borderRadius: '12px',
      overflow: 'hidden',
    },
    th: {
      padding: '15px 20px',
      textAlign: 'left',
      background: 'linear-gradient(90deg, #004aad, #00c6ff)',
      color: 'white',
      fontWeight: '600',
      fontSize: '16px',
      textTransform: 'uppercase',
    },
    td: {
      padding: '15px 20px',
      textAlign: 'left',
      borderBottom: '1px solid #e0e0e0',
      fontSize: '14px',
      color: '#333',
    },
    tr: {
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    trEven: {
      backgroundColor: '#f9fafb',
    },
    trHover: {
      backgroundColor: '#e6f0fa',
      transform: 'translateY(-2px)',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Available Courses</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Course ID</th>
            <th style={styles.th}>Course Name</th>
            <th style={styles.th}>Trainer</th>
            <th style={styles.th}>Duration in Weeks</th>
          </tr>
        </thead>
        <tbody id="courseTable" style={{ fontFamily: "'Poppins', sans-serif" }}></tbody>
      </table>
    </div>
  );
};

export default AvailableCourses;