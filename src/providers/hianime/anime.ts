import { fetchHiAnime } from "./client.js";

export const getAnimeInfo = (id: string) => {
  return fetchHiAnime(`/ajax/anime/${id}`);
};

export const getEpisodes = (id: string) => {
  return fetchHiAnime(`/ajax/episode/list/${id}`);
};