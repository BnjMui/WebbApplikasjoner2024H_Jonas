import Task from "../components/Task";

export default function TaskPage({ id }: { id: string }) {
  return (
    <>
      <Task id={id} />
    </>
  );
}
