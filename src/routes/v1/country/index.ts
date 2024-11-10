import {Hono} from "hono";
import {getCountriesController} from "@/controllers/country/get.ts";

const app = new Hono();
//  /countries
app.get("/countries", getCountriesController);

export default app;
