import React from "react";
import MovieItem from "@/components/movie-item";
import { MovieData } from "@/types";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/movie/search?q=${searchParams.q || ""}`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const movies: MovieData[] = await response.json();
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
