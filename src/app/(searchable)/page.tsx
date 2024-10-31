import MovieItem from "@/components/movie-item";
import fetchData from "@/lib/fetch-data";
import { MovieData } from "@/types";

async function AllMovies() {
  const movies = await fetchData<MovieData[]>(`movie`, []);
  return (
    <>
      {movies.map((movie) => (
        <MovieItem key={`allmovies-${movie.id}`} {...movie} />
      ))}
    </>
  );
}

async function RecoMovies() {
  const movies = await fetchData<MovieData[]>(`movie/random`, []);
  return (
    <>
      {movies.map((movie) => (
        <MovieItem key={`recomovies-${movie.id}`} {...movie} />
      ))}
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <section className="mt-5">
          <h2 className="mb-2 text-2xl font-bold">지금 가장 추천하는 영화</h2>
          <ul className="grid grid-cols-3 gap-2">
            <RecoMovies />
          </ul>
        </section>
        <section className="mt-5">
          <h2 className="mb-2 text-2xl font-bold">등록된 모든 영화</h2>
          <ul className="grid grid-cols-5 gap-2">
            <AllMovies />
          </ul>
        </section>
      </div>
    </>
  );
}
