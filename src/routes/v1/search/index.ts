import {Hono} from "hono";
import {getSearchController} from "@/controllers/search/get.ts";

const app = new Hono();
// /search?q={value}
app.get("/search", getSearchController);

export default app;
