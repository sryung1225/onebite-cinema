import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
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

  return (
    <>
      <Head>
        <title>한입씨네마 | 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입씨네마 | 검색결과" />
        <meta
          property="og:description"
          content="한입씨네마에 등록된 영화들을 만나보세요🎥"
        />
      </Head>
      {movies.length > 0 ? (
        <ul className="grid grid-cols-3 gap-2 mt-5">
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </ul>
      ) : (
        <p className="my-5">검색 결과가 없습니다.</p>
      )}
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
