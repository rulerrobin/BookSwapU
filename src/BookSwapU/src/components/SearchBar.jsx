import React, { useState } from 'react'

const SearchBar = ({ onSearch, showAllButton = true }) => {
  const [searchTitle, setSearchTitle] = useState('')
  const [searchAuthor, setSearchAuthor] = useState('')

  const handleSearch = () => {
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