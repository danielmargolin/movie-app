import { Link } from "react-router-dom";

import css from "./SearchBar.module.css";

import { SEARCH_PAGE_PATH } from "../../constants/routes.constants";

import Button from "../Button";
import InputWithSuggestions from "../InputWithSuggestions";
import Logo from "../Logo";

const SearchBar = () => {

  return (
    <div className={css["container"]}>
      <div className={css["logo-container"]}>
        <Link to={SEARCH_PAGE_PATH}>
          <Logo width={150} />
        </Link>
      </div>
      <InputWithSuggestions placeholder="Search for a movie..." />
      <Button
        className={css["search-button"]}>
        Try Again
      </Button>
    </div>
  );
};

export default SearchBar;
