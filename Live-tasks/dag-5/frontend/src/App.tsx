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

  const total = students.length;

  return (
    <main>
      <Grid students={students} setStudents={setStudents} />
      <Total total={total} />
    </main>
  );
}

export default App;
