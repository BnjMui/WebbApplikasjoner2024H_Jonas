import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import { StudentProps } from "./components/Student";
import Total from "./components/Total";
import Filter from "./components/Filter";
import AddStudentForm from "./components/AddStudentForm";
import Title from "./components/Title";

const initialStudents = [
  {
    id: "1",
    name: "Jonas Evensen",
  },
  {
    id: "2",
    name: "Erlend",
  },
  { id: "3", name: "Tiril" },
];
function App() {
  const [filter, setFilter] = useState<string>("-");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [students, setStudents] = useState<StudentProps[]>(
    initialStudents ?? []
  );

  const filteredStudents = students.filter((student) =>
    filter != "-" ? student.name.toLowerCase().includes(filter) : true
  );

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3999/api/students");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
        setError("Feilet ved henting av studenter");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    const AddStudent = async () => {
      try {
        const response = await fetch(`http://localhost:3999/api/students/:id`, {
          method: "REMOVE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: "Kurt" }),
        });
      } catch (error) {
        console.log("feil da");
      }
    };
    AddStudent();
  }, []);

  const options = Array.from(
    students
      .reduce((acc, student: StudentProps) => {
        const name = student.name.trim().split(" ")[0];
        if (acc.has(name)) return acc;
        return acc.set(name, {
          ...student,
          value: name.toLowerCase(),
          label: name,
        });
      }, new Map())
      .values()
  );

  const onFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const onAddStudent = (student: Omit<StudentProps, "id">) => {
    setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
  };

  const onRemoveStudent = (id: string) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const total = students.length;

  return (
    <>
      <header>
        <Title title={"Klasseliste"} />
      </header>
      <main>
        <Filter
          filter={filter}
          onFilterChange={onFilterChange}
          options={Object.values(options)}
        />
        <Grid
          students={filteredStudents}
          setStudents={setStudents}
          onRemoveStudent={onRemoveStudent}
        >
          <AddStudentForm onAddStudent={onAddStudent} />
        </Grid>
        <Total total={total} />
      </main>
    </>
  );
}

export default App;
