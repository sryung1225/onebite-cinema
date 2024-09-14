import { ReactNode } from "react";
import { useRouter } from "next/router";
import movies from "@/dummy.json";
import SearchableLayout from "@/components/searchable-layout";
import MovieItem from "@/components/movie-item";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return q ? (
    <>
      {/* <h2>검색 결과 : {q}</h2> */}
      <ul className="grid grid-cols-3 gap-2 mt-5">
        {movies.slice(0, 2).map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </ul>
    </>
  ) : null;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
