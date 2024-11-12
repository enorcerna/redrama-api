import {Hono} from "hono";
import {
  getDramaBySlugController,
  getDramaEpisodesByIdController,
  getDramasSimilarByIdController
} from "@/controllers/drama/get.ts";

const app = new Hono();
// drama/{slug}
app.get("/drama/:slug", getDramaBySlugController);
// episodes/{id}
app.get("/episodes/:id", getDramaEpisodesByIdController);
// similar/{id}
app.get("/similar/:id", getDramasSimilarByIdController);

export default app;
