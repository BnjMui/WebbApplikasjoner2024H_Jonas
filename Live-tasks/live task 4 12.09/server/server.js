import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { cors } from "hono/cors";

const app = new Hono();

const dadJokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    answer: "Because they make up everything!",
  },
  {
    id: 2,
    title: "What do you call a fake noodle?",
    answer: "An impasta!",
  },
  {
    id: 3,
    title: "Why did the scarecrow win an award?",
    answer: "He was outstanding in his field!",
  },
  {
    id: 4,
    title: "How do you organize a space party?",
    answer: "You planet!",
  },
  {
    id: 5,
    title: "What do you call a bear with no teeth?",
    answer: "A gummy bear!",
  },
];

app.use("/*", cors());

app.use("statics/*", serveStatic({ root: ":/" }));

app.get("/dad-jokes", (c) => {
  return c.json(dadJokes);
});

app.post("/check-id", (c) => {
  const body = c.req.json();
  const newJoke = { id: dadJokes.length + 1, ...body };
  dadJokes.push(newJoke);
  return c.json({ newJoke }, 201);
});

const port = 3999;
console.log(`Server is running on port: ${port}`);

serve({
  fetch: app.fetch,
  port,
});