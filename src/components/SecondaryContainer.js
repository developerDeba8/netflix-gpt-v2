import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-64 z-20 relative px-8">
          <MovieList title={"Playing Now"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          {/* <MovieList title={"Documentary"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Sports"} movies={movies.nowPlayingMovies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
