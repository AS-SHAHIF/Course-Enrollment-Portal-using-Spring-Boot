import React, { useEffect } from 'react';

const Enrolled = () => {
  useEffect(() => {
    const showEnrolled = async () => {
      try {
        const response = await fetch("http://localhost:8080/courses/enrolled");
        const courses = await response.json();
        const dataTable = document.getElementById("enrolledTable");
        dataTable.innerHTML = ''; // Clear existing content
        courses.forEach(course => {
          const row = `
            <tr>
              <td>${course.username}</td>
              <td>${course.email}</td>
              <td>${course.courseName}</td>
            </tr>`;
          dataTable.innerHTML += row;
        });
      } catch (error) {
        console.error('Error fetching enrolled data:', error);
      }
    };

    showEnrolled();
  }, []);

  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'url(./assets/background.png)',
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
      width: '80%',
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
      <h2 style={styles.heading}>Enrolled Users</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Course Name</th>
          </tr>
        </thead>
        <tbody id="enrolledTable" style={{ fontFamily: "'Poppins', sans-serif" }}></tbody>
      </table>
    </div>
  );
};

export default Enrolled;