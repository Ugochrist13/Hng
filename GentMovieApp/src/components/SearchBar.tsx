import React, { useState } from "react";

/**
 * Props for the SearchBar component.
 */
interface SearchBarProps {
  /**
   * Callback function to handle search when the user enters a query.
   * @param query - The search query entered by the user.
   */
  onSearch: (query: string) => void;
}

/**
 * A functional component representing a search bar for movies.
 * @param {SearchBarProps} props - The properties passed to the component.
 */
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  // State to store the user's search query
  const [query, setQuery] = useState("");

  /**
   * Handles the search action when the user clicks the search button.
   */
  const handleSearch = () => {
    // Call the provided onSearch callback with the current query
    onSearch(query);
  };

  return (
    <div className="search-bar">
      {/* Input field for entering search query */}
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Button to initiate the search */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
