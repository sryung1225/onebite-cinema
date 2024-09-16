import { ReactNode } from "react";
import { InferGetServerSidePropsType } from "next";
import SearchableLayout from "@/components/searchable-layout";
import movies from "@/dummy.json";
import MovieItem from "@/components/movie-item";
import fetchMovies from "@/lib/fetch-movies";

export const getServerSideProps = async () => {
  const allMovies = await fetchMovies();
  return {
    props: {
      allMovies,
    },
  };
};

export default function Home({
  allMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(allMovies);
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
          {allMovies.map((movie) => (
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
