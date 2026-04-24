import { fetchHiAnime } from "./client.js";

export const searchAnime = (q: string, page = 1) => {
  return fetchHiAnime(`/ajax/search?q=${encodeURIComponent(q)}&page=${page}`);
};