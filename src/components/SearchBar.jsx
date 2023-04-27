import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={handleInput}
      value={searchTerm}
      className="border-2 border-gray-200 rounded-md py-2 my-3 px-4 w-full"
    />
  );
};

export default SearchBar;
