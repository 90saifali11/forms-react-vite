import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [fatherName, setFatherName] = useState('');

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = { name, rollNo, fatherName };
    setStudents([...students, newStudent]);
    setName('');
    setRollNo('');
    setFatherName('');
  };

  return (
    <div className="App">
      <h1>Students List</h1>
      
      <form onSubmit={handleAddStudent} className="student-form">
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Roll No:</label>
          <input 
            type="text" 
            value={rollNo} 
            onChange={(e) => setRollNo(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Father Name:</label>
          <input 
            type="text" 
            value={fatherName} 
            onChange={(e) => setFatherName(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Student</button>
      </form>

      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Father Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.fatherName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default App
