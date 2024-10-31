import TaskPage from "@/features/tasks/page/TaskPage";

export default async function TaskList({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <>
      <h1>Task {id}</h1>
      <TaskPage id={id} />
    </>
  );
}
