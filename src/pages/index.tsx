import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import movies from "@/dummy.json";
import MovieItem from "@/components/movie-item";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <section className="mt-5">
        <h2 className="mb-0 text-lg font-bold">지금 가장 추천하는 영화</h2>
        <ul className="grid grid-cols-3 gap-2">
          {movies.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </ul>
      </section>
      <section className="mt-5">
        <h2 className="mb-0 text-lg font-bold">등록된 모든 영화</h2>
        <ul className="grid grid-cols-5 gap-2">
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </ul>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
