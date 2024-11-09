import {Hono} from "hono";
import {PORT} from "@/constants/main.ts";
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

Deno.serve({port: PORT}, app.fetch);
