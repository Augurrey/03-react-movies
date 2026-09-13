import axios from "axios";
import type { Movie } from "../types/movie";

const token = import.meta.env.VITE_TMDB_TOKEN;
const url = "https://api.themoviedb.org/3/search/movie?query=";

export default async function searchMovies(query: string) {
  const response = await axios.get(`${url}${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.results as Movie[];
}
