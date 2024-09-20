import { ReactNode } from "react";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import SearchableLayout from "@/components/searchable-layout";
import MovieItem from "@/components/movie-item";
import fetchMovies from "@/lib/fetch-movies";
import fetchRandomMovies from "@/lib/fetch-random-movies";

export const getStaticProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);
  return {
    props: {
      allMovies,
      recoMovies,
    },
    revalidate: 3,
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입씨네마</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입씨네마" />
        <meta
          property="og:description"
          content="한입씨네마에 등록된 영화들을 만나보세요🎥"
        />
      </Head>
      <div className="flex flex-col gap-5">
        <section className="mt-5">
          <h2 className="mb-0 text-lg font-bold">지금 가장 추천하는 영화</h2>
          <ul className="grid grid-cols-3 gap-2">
            {recoMovies.map((movie) => (
              <MovieItem key={`recomovies-${movie.id}`} {...movie} />
            ))}
          </ul>
        </section>
        <section className="mt-5">
          <h2 className="mb-0 text-lg font-bold">등록된 모든 영화</h2>
          <ul className="grid grid-cols-5 gap-2">
            {allMovies.map((movie) => (
              <MovieItem key={`allmovies-${movie.id}`} {...movie} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
