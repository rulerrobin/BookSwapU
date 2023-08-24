import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchTitle, setSearchTitle] = useState('')
  const [searchAuthor, setSearchAuthor] = useState('')

  const handleSearch = () => {
    onSearch(searchTitle, searchAuthor)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by Author"
        value={searchAuthor}
        onChange={(e) => setSearchAuthor(e.target.value)}
      />
      <button className="btn btn-primary mt-3" onClick={handleSearch}>
        Search
      </button>
      <button className="btn btn-secondary mt-3" onClick={() => onSearch('', '')}>
                Show All
            </button>
    </div>
  )
}

export default SearchBar