import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
import MovieItem from "@/components/movie-item";
import fetchMovies from "@/lib/fetch-movies";
import { MovieData } from "@/types";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  const [movies, setMovies] = useState<MovieData[]>([]);
  useEffect(() => {
    const fetchSearchResult = async () => {
      const data = await fetchMovies(q as string);
      setMovies(data);
    };
    if (q) fetchSearchResult();
  }, [q]);

  return q ? (
    <ul className="grid grid-cols-3 gap-2 mt-5">
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </ul>
  ) : null;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
