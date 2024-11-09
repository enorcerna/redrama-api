import {logger} from "hono/logger";
import {Hono} from "hono";
import {PORT} from "@/constants/main.ts";
import v1 from "@/routes/v1/index.ts";
const app = new Hono();
// middleware
app.use(logger());
//routes
app.route("", v1);

Deno.serve({port: PORT}, app.fetch);
