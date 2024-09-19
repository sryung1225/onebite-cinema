import fetchData from "./fetch-data";
import { MovieData } from "@/types";

export default async function fetchRandomMovies(): Promise<MovieData[]> {
  const endpoint = `movie/random`;
  return fetchData<MovieData[]>(endpoint, []);
}
