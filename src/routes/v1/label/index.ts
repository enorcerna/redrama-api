import {Hono} from "hono";
import {getLabelsController} from "@/controllers/label/get.ts";

const app = new Hono();
// /labels
app.get("/labels", getLabelsController);

export default app;
