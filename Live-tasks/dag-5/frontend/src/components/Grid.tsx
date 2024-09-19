import Student, { StudentProps as StudentType } from "./Student";
import AddStudentForm from "./AddStudentForm";
type GridProps = {
  students: StudentType[];
  setStudents: any;
};

export default function Grid({ students, setStudents }: GridProps) {
  const onAddStudent = (student: { name: string }) => {
    setStudents((prev: StudentType[]) => [
      ...prev,
      { id: JSON.stringify(students.length + 1), ...student },
    ]);
  };
  return (
    <section>
      <article className="grid">
        {students.map((student, index) => (
          <Student key={index} id={student.id} name={student.name} />
        ))}
      </article>
      <AddStudentForm onAddStudent={onAddStudent} />
    </section>
  );
}
