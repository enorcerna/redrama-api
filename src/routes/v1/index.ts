import {Hono} from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Ready Api");
});

export default app;
