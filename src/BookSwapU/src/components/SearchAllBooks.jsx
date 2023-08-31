import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { getAllBooks } from './api'

const SearchAllBooks = () => {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (title, author) => {
    try {
      setSearchResults([]) // Clear previous results
      
      // Retrieve userInfo from local storage and then extract the token from it
      const userInfoStr = localStorage.getItem('userInfo');
      if (!userInfoStr) {
          throw new Error("User token is not available");
      }
      
      const userInfo = JSON.parse(userInfoStr); 

      if (!userInfo.token) {
          throw new Error("User token is not available");
      }

      console.log(title, author)

      const allBooksResults = await getAllBooks(title, author, userInfo.token);
      console.log('Search results in SearchAllBooks:', allBooksResults);
      setSearchResults(allBooksResults);
    } catch (error) {
      console.error('Error searching books:', error);
    }
}

  return (
    <div>
      <h2>Search Books</h2>
      <SearchBar onSearch={handleSearch} showAllButton={false} />
      <ul>
        {searchResults.map((result) => (
          <li key={result._id}>
            <h3>{result.book.title}</h3>
            <p>Author: {result.book.author}</p>
            <p>Condition: {result.book.condition}</p>
            <p>User: {result.user.username}</p>
            <p>Status: {result.book.status}</p>
            <p>Edition: {result.book.edition}</p>
            <p>Year: {result.year}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchAllBooks