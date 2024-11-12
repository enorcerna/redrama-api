import type {Context} from "hono";
import {ApiClient} from "@/services/api-client.ts";
// list genres
export const getListGenreController = async (c: Context) => {
  const data = await ApiClient.getListGenre();
  return c.json(data);
};
// genre by slug
export const getGenreBySlugController = async (c: Context) => {
  const slug = c.req.param("slug");
  const data = await ApiClient.getGenreBySlug(slug);
  return c.json(data);
};
// pagination by genre id
export const getPaginationDramasByGenreIdController = async (c: Context) => {
  const page = c.req.query("page") ?? 1;
  const id = c.req.param("id");
  const data = await ApiClient.getPaginationDramasByGenreId(id, Number(page));
  return c.json(data);
};
