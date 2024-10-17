import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { isNameValid } from "./lib/validators";

let students = [
  {
    id: "1",
    name: "Jonas Evensen",
  },
  {
    id: "2",
    name: "Erlend",
  },
  { id: "3", name: "Tirill" },
];

const app = new Hono();

app.use("/*", cors());

app.get("/api/students", (c) => {
  return c.json({ success: true, data: students }, { status: 201 });
});

app.get("/api/students/:id", (c) => {
  const id = c.req.param("id");
  const student = students.filter((student) => student.id === id);
  return c.json({ success: true, data: student }, { status: 201 });
});

app.post("/api/students", async (c) => {
  const data = await c.req.json();
  const { name } = data;
  if (!isNameValid(name)) {
    return c.json(
      {
        success: false,
        data: "Invalid names",
      },
      { status: 400 }
    );
  }
  students.push({ id: crypto.randomUUID(), name });
  return c.json({ success: true, data: students }, { status: 201 });
});

app.delete("/api/students/:id", (c) => {
  const id = c.req.param("id");
  students = students.filter((student) => student.id != id);
  return c.json({ success: true, data: students }, { status: 201 });
});

app.patch("api/student/:id", async (c) => {
  const id = c.req.param("id");
  const { name } = await c.req.json();
  students.map((student) => {
    student.id === id ? { ...student, name } : student;
  });
  return c.json({ success: true, data: students }, { status: 201 });
});

app.post();

const port = 3999;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
