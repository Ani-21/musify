import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  console.log(searchTerm);

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus:within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>

      <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-4 h-4 ml-4" />
        <input
          name="search-field"
          type="text"
          autoComplete="off"
          id="search-term"
          value={searchTerm}
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 placeholder-gray-500 text-base border-none outline-none bg-transparent p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
