import Avatar from "./Avatar";
export type StudentProps = {
  id: string;
  name: string;
};
export default function Student(props: StudentProps) {
  const { id: id, name: name } = props;
  return (
    <div>
      <Avatar name={name} />
      <p className="student-name">{name}</p>
    </div>
  );
}
