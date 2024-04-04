import css from "./SearchPage.module.css";

import InputWithSuggestions from "../InputWithSuggestions";
import Button from "../Button";
import Logo from "../Logo";

import useFetchGenres from "../../hooks/useFetchGenres";

const SearchPage = () => {
  const {categories, inputValue, setInputValue, handleSuggestionClick} = useFetchGenres();

  return (
    <div className={css["container"]}>
      <div className={css["logo-container"]}>
        <Logo />
      </div>
      <form className={css["search-form"]} onSubmit={() => {}}>
        <InputWithSuggestions
         value={inputValue}
         onSuggestionClick={handleSuggestionClick}
         suggestions={categories}
         onChange={(e) => setInputValue(e.target.value)} 
         placeholder="Search for a movie..." />
        <Button className={css["search-button"]} type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchPage;
