import {logger} from "hono/logger";
import {Hono} from "hono";
import {PORT} from "@/constants/main.ts";
import v1 from "@/routes/v1/index.ts";
import labels from "@/routes/v1/label/index.ts";
import countries from "@/routes/v1/country/index.ts";
import search from "@/routes/v1/search/index.ts";
const app = new Hono();
// middleware
app.use(logger());
//routes
app.route("", v1);
app.route("", labels);
app.route("", countries);
app.route("", search);

Deno.serve({port: PORT}, app.fetch);
