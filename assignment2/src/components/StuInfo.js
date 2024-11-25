import '../index.css';
import '../assets/css/main.css';

export default function StuInfo({stuData, handleSubmit,errorMessage, getStudent}){
  
  return (
    <>
      <div className="container">
        <h1>Student Details</h1>
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
        </form>
      </div>
    </>
  );
}