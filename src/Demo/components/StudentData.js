import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentData = () => {
  const [students, setStudents] = useState([]); // For GET task
  const [newStudent, setNewStudent] = useState({ name: '', course: '', fee: '' }); // For POST task

  // ✅ 1. GET Task: Fetch all students on page load
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios.get('http://localhost:3001/student')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error("GET Error - fetching students:", error);
      });
  };

  // ✅ 2. POST Task: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ 3. POST Task: Add a new student to the database
  const addStudent = (e) => {
    e.preventDefault();

    // Basic validation (optional)
    if (!newStudent.name || !newStudent.course || !newStudent.fee) {
      alert("All fields are required!");
      return;
    }

    axios.post('http://localhost:3001/student', newStudent)
      .then(response => {
        // Append new student to the list
        setStudents(prev => [...prev, response.data]);

        // Clear the form
        setNewStudent({ name: '', course: '', fee: '' });
      })
      .catch(error => {
        console.error("POST Error - adding student:", error);
      });
  };

  return (
    <div >
      

      {/* ✅ POST Task: Add Student Form */}
      <h3>Add New Student</h3>
      <form onSubmit={addStudent} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={newStudent.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={newStudent.course}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="fee"
          placeholder="Enter Fee"
          value={newStudent.fee}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Student</button>
      </form>

      {/* ✅ GET Task: Display Students */}
      <h3>All Students</h3>
      {students.length > 0 ? (
        <ul>
          {students.map(stu => (
            <li key={stu.id}>
              <strong>{stu.name}</strong> - {stu.course} - ₹{stu.fee}
            </li>
          ))}
        </ul>
      ) : (
        <p>No student data available.</p>
      )}
    </div>
  );
};

export default StudentData;