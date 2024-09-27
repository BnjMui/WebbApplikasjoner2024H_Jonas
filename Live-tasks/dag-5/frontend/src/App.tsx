import { useState } from "react";
import Grid from "./components/Grid";
import { StudentProps } from "./components/Student";
import Total from "./components/Total";

function App() {
  const [students, setStudents] = useState<StudentProps[]>([
    {
      id: "1",
      name: "Jonas",
    },
    {
      id: "2",
      name: "Erlend",
    },
    { id: "3", name: "Tiril" },
  ]);

  const onRemoveStudent = (id: string) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const total = students.length;

  return (
    <main>
      <Grid
        students={students}
        setStudents={setStudents}
        onRemoveStudent={onRemoveStudent}
      />
      <Total total={total} />
    </main>
  );
}

export default App;
