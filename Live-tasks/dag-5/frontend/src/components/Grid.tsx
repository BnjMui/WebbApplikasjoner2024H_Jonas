import Student, { StudentProps } from "./Student";
import AddStudentForm from "./AddStudentForm";
type GridProps = {
  students: StudentProps[];
  setStudents: any;
  onRemoveStudent: (id: string) => void;
};

export default function Grid({
  students,
  setStudents,
  onRemoveStudent,
}: GridProps) {
  const onAddStudent = (student: { name: string }) => {
    setStudents((prev: StudentProps[]) => [
      ...prev,
      { id: crypto.randomUUID(), ...student },
    ]);
  };
  return (
    <section>
      <article className="grid">
        {students.map((student, index) => (
          <Student
            key={index}
            id={student.id}
            name={student.name}
            onRemoveStudent={onRemoveStudent}
          />
        ))}
      </article>
      <AddStudentForm onAddStudent={onAddStudent} />
    </section>
  );
}
