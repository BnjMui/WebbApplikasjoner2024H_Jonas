"use client";
import useTasks from "../hooks/useTasks";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <>
      <h1>TaskList page</h1>
      <section>
        {tasks.map((task, index) => (
          <article key={index}>
            <h2>{task.name}</h2>
            <p>{task.status}</p>
            <a href={`/tasks/${task.id}`}>Mer</a>
          </article>
        ))}
      </section>
    </>
  );
}
