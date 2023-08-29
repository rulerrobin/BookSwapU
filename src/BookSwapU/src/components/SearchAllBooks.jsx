import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { getAllBooksByCriteria } from './api'

const SearchAllBooks = () => {
  const [searchResults, setSearchResults] = useState([])

  const handleSearchAllBooks = async (title, author) => {
    try {
      setSearchResults([]) // Clear previous results
      // Call the API function to search for all books based on title and author
      const allBooksResults = await getAllBooksByCriteria(title, author)
      console.log('Search results in SearchAllBooks:', allBooksResults)
      setSearchResults(allBooksResults);
    } catch (error) {
      console.error('Error searching books:', error)
    }
  }

  return (
    <div>
      <h2>Search Books</h2>
      <SearchBar onSearch={handleSearchAllBooks} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.book._id}>
            <h3>{result.book.title}</h3>
            <p>Author: {result.book.author}</p>
            <p>Condition: {result.book.condition}</p>
            <p>User: {result.user.username}</p>
            <p>Status: {result.book.status}</p>
            <p>Edition: {result.book.edition}</p>
            <p>Year: {result.book.year}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchAllBooks