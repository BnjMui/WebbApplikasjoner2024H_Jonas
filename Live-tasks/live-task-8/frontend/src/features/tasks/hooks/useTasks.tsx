"use client";
import { useState } from "react";

const initialTasks: Task[] = [
  {
    id: "1",
    name: "Exam 1",
    status: "pending",
  },
  {
    id: "2",
    name: "Exam 2",
    status: "pending",
  },
  {
    id: "3",
    name: "Exam 3",
    status: "pending",
  },
  {
    id: "4",
    name: "Exam 4",
    status: "pending",
  },
];

export type Task = {
  id: string;
  name: string;
  status: "pending" | "completed" | "progress";
};

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return tasks;
}
