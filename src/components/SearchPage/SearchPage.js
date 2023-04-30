import css from "./SearchPage.module.css";

import InputWithSuggestions from "../InputWithSuggestions";
import Button from "../Button";
import Logo from "../Logo";

const SearchPage = () => {
  return (
    <div className={css["container"]}>
      <div className={css["logo-container"]}>
        <Logo />
      </div>
      <form className={css["search-form"]} onSubmit={() => {}}>
        <InputWithSuggestions placeholder="Search for a movie..." />
        <Button className={css["search-button"]} type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchPage;
