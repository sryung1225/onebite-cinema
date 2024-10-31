import React from "react";
import MovieItem from "@/components/movie-item";
import { MovieData } from "@/types";
import fetchData from "@/lib/fetch-data";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const movies = await fetchData<MovieData[]>(
    `movie/search?q=${searchParams.q || ""}`,
    []
  );
  return (
    <>
      {movies.length > 0 ? (
        <ul className="grid grid-cols-3 gap-2 mt-5">
          {movies.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </ul>
      ) : (
        <p className="my-5">검색 결과가 없습니다.</p>
      )}
    </>
  );
}
