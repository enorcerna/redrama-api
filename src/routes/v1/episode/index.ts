import {Hono} from "hono";
import {
  getEpisodeBySlugController,
  getEpisodeLinksByIdController,
  getEpisodeNextByIdController,
  getEpisodePrevByIdController
} from "@/controllers/episode/get.ts";

const app = new Hono();
// episode/{slug}
app.get("/episode/:slug", getEpisodeBySlugController);
// episode/next/{id}
app.get("/episode/next/:id", getEpisodeNextByIdController);
// episode/prev/{id}
app.get("/episode/prev/:id", getEpisodePrevByIdController);
// episode/links/{id}
app.get("/episode/links/:id", getEpisodeLinksByIdController);

export default app;
