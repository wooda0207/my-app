import React from "react";

//key값 필요
const students = [
  { id: 1, name: "Inje" },
  { id: 2, name: "Steve" },
  { id: 3, name: "Bill" },
  { id: 4, name: "Jeff" },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
