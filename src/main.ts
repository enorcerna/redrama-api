import {Hono} from "hono";
import {PORT} from "@/constants/main.ts";
import v1 from "@/routes/v1/index.ts";
const app = new Hono();
//routes
app.route("", v1);

Deno.serve({port: PORT}, app.fetch);
