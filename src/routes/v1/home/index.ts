import {Hono} from "hono";
import {getlastListDramaController} from "@/controllers/home/get.ts";

const app = new Hono();
//  /last
app.get("/last", getlastListDramaController);

export default app;
