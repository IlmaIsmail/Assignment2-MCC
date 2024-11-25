import React, { useState } from 'react';
import DisplayData from './DisplayData';
import StuInfo from './StuInfo';
import Summary from './Summary';
 

export default function StuForm() {
  const [students, setStudents] = useState([]);
  const [stuData, setStuData] = useState({
    regno: '',
    sname: '',
    age: '',
    course: '',
    gpa: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const getStudent = (e) => {
    const { name, value } = e.target;
    setStuData((prevStu) => ({
      ...prevStu,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!stuData.regno || !stuData.sname) {
      setErrorMessage('Registration number and Name can\'t left empty');
      return;
    }
    if (students.some((student) => student.regno === stuData.regno)) {
      setErrorMessage('Duplicate Registration number.');
      return;
    }
    setStudents([...students, { ...stuData }]);
    setStuData({ regno: '', sname: '', age: '', course: '', gpa: '' });
    setErrorMessage('');
  };

  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const calculateAverage = (data, property) => {
    if (data.length === 0) {
      return 0;
    }
    const total = data.reduce((sum, student) => sum + parseFloat(student[property]), 0);
    return (total / data.length).toFixed(2);
  };

  return (
    <div className="container">
      <StuInfo stuData={stuData} handleSubmit={handleSubmit} errorMessage={errorMessage} getStudent={getStudent} />
      {/* <h1>Student List</h1>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div>
          <label htmlFor="registrationNumber">Registration Number:</label>
          <input
            type="text"
            id="registrationNumber"
            name="regno"
            value={stuData.regno}
            onChange={getStudent}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="sname"
            value={stuData.sname}
            onChange={getStudent}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={stuData.age}
            onChange={getStudent}
          />
        </div>
        <div>
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={stuData.course}
            onChange={getStudent}
          />
        </div>
        <div>
          <label htmlFor="gpa">GPA:</label>
          <input
            type="number"
            id="gpa"
            name="gpa"
            value={stuData.gpa}
            onChange={getStudent}
          />
        </div>
        <button type="submit">Add Student</button>
      </form> */}

      <DisplayData students={students} handleDelete={handleDelete} />
      <Summary students={students} calculateAverage={calculateAverage} />
    </div>
  );
}