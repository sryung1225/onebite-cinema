import MovieItem from "@/components/movie-item";
import movies from "@/mock/movies.json";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <section className="mt-5">
          <h2 className="mb-2 text-2xl font-bold">지금 가장 추천하는 영화</h2>
          <ul className="grid grid-cols-3 gap-2">
            {movies.slice(0, 3).map((movie) => (
              <MovieItem key={`recomovies-${movie.id}`} {...movie} />
            ))}
          </ul>
        </section>
        <section className="mt-5">
          <h2 className="mb-2 text-2xl font-bold">등록된 모든 영화</h2>
          <ul className="grid grid-cols-5 gap-2">
            {movies.map((movie) => (
              <MovieItem key={`allmovies-${movie.id}`} {...movie} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
