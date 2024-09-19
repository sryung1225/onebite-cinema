import fetchData from "./fetch-data";
import { MovieData } from "@/types";

export default async function fetchMovies(q?: string): Promise<MovieData[]> {
  const endpoint = q ? `movie/search?q=${q}` : `movie`;
  return fetchData<MovieData[]>(endpoint, []);
}
