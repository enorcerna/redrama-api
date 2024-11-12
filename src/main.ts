import {logger} from "hono/logger";
import {cors} from "hono/cors";
import {Hono} from "hono";
import {PORT} from "@/constants/main.ts";
import v1 from "@/routes/v1/index.ts";
import labels from "@/routes/v1/label/index.ts";
import countries from "@/routes/v1/country/index.ts";
import search from "@/routes/v1/search/index.ts";
import home from "@/routes/v1/home/index.ts";
import drama from "@/routes/v1/drama/index.ts";
import episode from "@/routes/v1/episode/index.ts";
const app = new Hono();
// middleware
app.use(logger(), cors());
//routes
app.route("", v1);
app.route("", labels);
app.route("", countries);
app.route("", search);
app.route("", home);
app.route("", drama);
app.route("", episode);

Deno.serve({port: PORT}, app.fetch);
