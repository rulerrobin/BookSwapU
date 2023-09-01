import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { getAllBooks } from './api'

const SearchAllBooks = () => {
  // State variable to store search results
  const [searchResults, setSearchResults] = useState([])

  // Function to handle the search process
  const handleSearch = async (title, author) => {
    try {
      setSearchResults([]) // Clear previous results
      
      // Retrieve userInfo from local storage and then extract the token from it
      const userInfoStr = localStorage.getItem('userInfo');
      if (!userInfoStr) {
          throw new Error("User token is not available");
      }
      
      const userInfo = JSON.parse(userInfoStr); 

      // Validate the token from the user info
      if (!userInfo.token) {
          throw new Error("User token is not available");
      }

      // Get all books matching the search criteria
      const allBooksResults = await getAllBooks(title, author, userInfo.token);
      setSearchResults(allBooksResults);
    } catch (error) {
      console.error('Error searching books:', error);
    }
}

  return (
    <div>
      <h2>Search Books</h2>
      <SearchBar onSearch={handleSearch} showAllButton={false} />
      <div className="row mt-4">
    {searchResults.map((result) => (
      <div key={result._id} className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{result.book.title}</h5>
            <p className="card-text">
              <strong>Author:</strong> {result.book.author}<br />
              <strong>Condition:</strong> {result.book.condition}<br />
              <strong>User:</strong> {result.user.username}<br />
              <strong>Status:</strong> {result.book.status}<br />
              <strong>Edition:</strong> {result.book.edition}<br />
              <strong>Year:</strong> {result.book.year}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
    </div>
  )
}

export default SearchAllBooks