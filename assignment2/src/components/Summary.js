import '../index.css'
import '../assets/css/main.css';

export default function Summary({students, calculateAverage}){
  
  return (
    <>
      <div className='summary'>
        <h3>Summary:</h3>
        <p>Total Students: {students.length}</p>
        <p>Average Age: {calculateAverage(students, 'age')}</p>
        <p>Average GPA: {calculateAverage(students, 'gpa')}</p>
      </div>
    </>
  );
}