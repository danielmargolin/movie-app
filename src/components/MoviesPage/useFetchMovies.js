import axios from "axios";
import { useEffect, useState } from "react";

const useFetchMovies = (genre) => {
    
    const [movies, setMovies] = useState([
    ]);
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchMovies = async () => {
        setIsLoading(true)
        const res = await axios.get(`https://dev-club-movie-server.vercel.app/genresMovies?category=${genre}`)
        setMovies(res.data.data)
        setIsLoading(false)
      }

    useEffect(() => {
      fetchMovies()
    }, [])
  
    return {movies, isLoading, fetchMovies}
}

export default useFetchMovies