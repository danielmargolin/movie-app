import css from "./MoviesPage.module.css";

import MovieCard from "../MovieCard";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import useFetchMovies from "./useFetchMovies";
import { useParams } from "react-router";

const MoviesPage = () => {
  const {genre} = useParams()
  const {movies, isLoading} = useFetchMovies(genre)

  return (
    <div className={css["container"]}>
      <div className={css["search-bar-container"]}>
        <SearchBar />
      </div>
      <div className={css["movies-container"]}>
        <Loader isLoading={isLoading}>
        {movies.map((movie) => (
          <MovieCard key={movie.name} {...movie} />
        ))}
        </Loader>
      </div>
    </div>
  );
};

export default MoviesPage;
