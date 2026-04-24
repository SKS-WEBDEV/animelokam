import { fetchHiAnime } from "./client.js";

export const getHomePage = () => {
  return fetchHiAnime("/ajax/home");
};