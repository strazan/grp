import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Initiatives from "./Initiatives";
import InitiativeCard from "./InitiativeCard";

const initiatives = [];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = initiatives.filter((initiative) =>
      initiative.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
