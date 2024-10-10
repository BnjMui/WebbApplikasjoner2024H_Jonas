import Student, { StudentProps } from "./Student";
import { PropsWithChildren } from "react";
type GridProps = {
  students: StudentProps[];
  setStudents: any;
  onRemoveStudent: (id: string) => void;
};

export default function Grid(props: PropsWithChildren<GridProps>) {
  const { students, onRemoveStudent, children } = props;
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
      {children}
    </section>
  );
}
