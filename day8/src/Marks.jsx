import React from 'react';
import "./Marks.css";
import DisplayMarks from './DisplayMarks';

const Marks = ({name,roll,m1,m2,m3}) => {
  return (
    <div>
      <h1>Student Profile : </h1>
        <h1>Name : {name}</h1>
        <h3>Roll No:  {roll}</h3>
        <h3>Semester 1 : {m1}</h3>
        <h3>Semester 2 : {m2}</h3>
        <h3>Semester 3 : {m3}</h3>
    </div>
  )
}

export default Marks;