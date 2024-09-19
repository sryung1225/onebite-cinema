import fetchData from "./fetch-data";
import { MovieData } from "@/types";

export default async function fetchOneMovie(
  id: number
): Promise<MovieData | null> {
  const endpoint = `movie/${id}`;
  return fetchData<MovieData | null>(endpoint, null);
}
