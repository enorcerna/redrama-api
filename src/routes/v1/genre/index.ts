import {Hono} from "hono";
import {
  getGenreBySlugController,
  getListGenreController,
  getPaginationDramasByGenreIdController
} from "@/controllers/genre/get.ts";

const app = new Hono();
// genre
app.get("/genre", getListGenreController);
// genre/{slug}
app.get("/genre/:slug", getGenreBySlugController);
// genre/page/{id}
app.get("/genre/page/:id", getPaginationDramasByGenreIdController);

export default app;
