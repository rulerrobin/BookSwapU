import React, { useState } from 'react'

const SearchBar = ({ onSearch, showAllButton = true }) => {
  // State for the search by title input field
  const [searchTitle, setSearchTitle] = useState('')
  // State for the search by author input field
  const [searchAuthor, setSearchAuthor] = useState('')

  const handleSearch = () => {
    // Basic validation: Ensure that at least one of the fields (title or author) is filled out
    if (!searchTitle && !searchAuthor) {
      // Notify the user with a simple alert if no data is entered
      alert("Please enter a title or author to search.");
      return;
    }
    // Invoke the onSearch callback with the entered title and author values
    onSearch(searchTitle, searchAuthor)
  }

  return (
    <div>
      <div>
      <input
        type="text"
        placeholder="Search by Title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      </div>
      <div>
      <input
        type="text"
        placeholder="Search by Author"
        value={searchAuthor}
        onChange={(e) => setSearchAuthor(e.target.value)}
      />
      </div>
      <div>
      <button className="btn btn-primary mt-3" onClick={handleSearch}>
        Search
      </button>
      </div>
      <div>
      {showAllButton && <button className="btn btn-secondary mt-3" onClick={() => onSearch('', '')}>
                Show All
            </button>}
            </div>
    </div>
  )
}

export default SearchBar