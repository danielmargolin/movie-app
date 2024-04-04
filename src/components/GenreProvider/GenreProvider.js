import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";

export const genreContext = createContext({})

const GenreProvider = ({children}) => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
      const fetchGenres = async () => {
        const genresResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/genres`
        );
        console.log(genresResponse)
        setGenres(genresResponse.data.data);
      };
  
      fetchGenres();
    }, []);

    return <genreContext.Provider value={genres}>{children}</genreContext.Provider>
}

export default GenreProvider