import { useDispatch } from "react-redux";
import { MOVIE_LIST_API_URL, API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const movieData = await fetch(MOVIE_LIST_API_URL, API_OPTIONS);
    const jsonData = await movieData.json();
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
