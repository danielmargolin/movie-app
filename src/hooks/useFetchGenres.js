import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const useFetchGenres = () => {
    const [categories,setCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await axios.get('https://dev-club-movie-server.vercel.app/genres')
      setCategories(res.data.data);
    }
    fetchGenres()
  },[])

  const handleSuggestionClick = (value) => {
    navigate(`/movies/${value}`)
  }

  return {categories, inputValue, setInputValue, handleSuggestionClick}
}

export default useFetchGenres