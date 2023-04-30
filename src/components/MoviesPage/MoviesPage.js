import { useState } from "react";

import css from "./MoviesPage.module.css";

import MovieCard from "../MovieCard";
import SearchBar from "../SearchBar/SearchBar";

const MoviesPage = () => {
  const [movies] = useState([
    {
      name: "The Dark Knight",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    },
  ]);

  return (
    <div className={css["container"]}>
      <div className={css["search-bar-container"]}>
        <SearchBar />
      </div>
      <div className={css["movies-container"]}>
        {movies.map((movie) => (
          <MovieCard key={movie.name} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
