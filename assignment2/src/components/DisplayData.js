import '../index.css'
export default function DisplayData({students, handleDelete}){
  
  return (
    <>
      <h2>Student List:</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <table className='detailTable'>
          <thead>
            <tr>
              <th>Registration Number</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>GPA</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <td>
                  <strong>
                    {student.regno}
                  </strong>
                </td>
                <td>
                  {student.sname}
                </td>
                <td>
                  {student.age}
                </td>
                <td>
                  {student.course}
                </td>
                <td>
                  <span
                    className={`gpa-${parseFloat(student.gpa) >= 3.5 ? 'first' : parseFloat(student.gpa) >= 3? 'second-upper'
                        : 'second-lower'
                    }`}
                  >
                    {student.gpa}
                  </span>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}