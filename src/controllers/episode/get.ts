import type {Context} from "hono";
import {ApiClient} from "@/services/api-client.ts";
// get episode by slug
export const getEpisodeBySlugController = async (c: Context) => {
  const slug = c.req.param("slug");
  const data = await ApiClient.getEpisodesBySlug(slug);
  return c.json(data);
};

// get episode next by id
export const getEpisodeNextByIdController = async (c: Context) => {
  const id = c.req.param("id");
  const data = await ApiClient.getEpisodeNextById(id);
  return c.json(data.nextEpisode);
};

// get episode prev by id
export const getEpisodePrevByIdController = async (c: Context) => {
  const id = c.req.param("id");
  const data = await ApiClient.getEpisodePrevById(id);
  return c.json(data.prevEpisode);
};
// get episode links by id
export const getEpisodeLinksByIdController = async (c: Context) => {
  const id = c.req.param("id");
  const data = await ApiClient.getEpisodeLinksById(id);
  return c.json(data.getEpisodeLinks.links_online);
};
