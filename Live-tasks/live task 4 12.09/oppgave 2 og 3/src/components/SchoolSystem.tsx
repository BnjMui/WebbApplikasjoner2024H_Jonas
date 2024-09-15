/*
	Eksempel på formatet på dataen
	[{id: '1', name: 'Lars', teacher: false}]
*/

// Startkode
import { useState } from "react";
type StudentList = {
  id: number;
  name: string;
  teacher: boolean;
};
const SchoolSystem = () => {
  const [students, setStudents] = useState<StudentList[]>([]);

  const handleClick = (e: string) => {
    switch (e) {
      case "+":
        setStudents((prev) => [
          ...prev,
          {
            id: students.length,
            name: "ja",
            teacher: students.length % 2 != 0 ? true : false,
          },
        ]);
        break;
      case "-":
        setStudents((prev) => prev.slice(0, -1));
        break;
      default:
        setStudents([]);
    }
  };
  return (
    <div>
      <h2>Antall i listen: {students.length}</h2>
      <button
        onClick={() => {
          handleClick("+");
        }}
      >
        Legg til i listen
      </button>
      <button
        onClick={() => {
          handleClick("-");
        }}
      >
        Fjern fra siste fra listen
      </button>
      <button
        onClick={() => {
          handleClick("0");
        }}
      >
        Tøm listen
      </button>
    </div>
  );
};

export default SchoolSystem;
