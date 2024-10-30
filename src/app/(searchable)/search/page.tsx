import React from "react";
import movies from "@/mock/movies.json";
import MovieItem from "@/components/movie-item";

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
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
