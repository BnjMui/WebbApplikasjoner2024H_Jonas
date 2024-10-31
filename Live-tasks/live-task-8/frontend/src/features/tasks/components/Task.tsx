"use client";
import { useParams } from "next/navigation";
import useTasks from "../hooks/useTasks";

export default function Task() {
  const tasks = useTasks();
  const { id } = useParams();

  return (
    <>
      <article>
        {tasks.map((task) => {
          if (task.id === id) {
            return (
              <article key={task.id}>
                <h1>{task.name}</h1>
                <p>{task.status}</p>
              </article>
            );
          }
        })}
      </article>
    </>
  );
}
