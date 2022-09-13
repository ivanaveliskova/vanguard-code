import React from "react";

import Search from "../../assets/svgs/search.svg";

import "./SearchBar.scss";

const SearchBar = () => {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="SearchBar">
      <input
        className="SearchBar__input"
        type="text"
        placeholder="Lorem ipsum..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Search className="SearchBar__icon" aria-hidden={true} />
    </div>
  );
};

export default SearchBar;
