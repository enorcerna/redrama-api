import type {Context} from "hono";
import {ApiClient} from "@/services/api-client.ts";
// drama by slug
export const getDramaBySlugController = async (c: Context) => {
  const slug = c.req.param("slug") as string;
  const data = await ApiClient.getDramaBySlug(slug);
  return c.json(data);
};
// episodes by id
export const getDramaEpisodesByIdController = async (c: Context) => {
  const id = c.req.param("id");
  const data = await ApiClient.getDramaEpisodesById(id);
  return c.json(data);
};
// similar dramas by id
export const getDramasSimilarByIdController = async (c: Context) => {
  const id = c.req.param("id");
  const data = await ApiClient.getDramasSimilarById(id);
  return c.json(data);
};
