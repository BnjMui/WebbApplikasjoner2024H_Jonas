import { z } from "zod";

export const taskSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  status: z.enum(["pending", "completed", "progress"]),
});
