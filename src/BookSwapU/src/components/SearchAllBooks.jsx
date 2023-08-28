// import React, { useState } from 'react'
// import SearchBar from './SearchBar'
// import { getAllBooksByCriteria } from './api'

// const SearchAllBooks = () => {
//   const [searchResults, setSearchResults] = useState([])

// //   const handleSearchAllBooks = async (title, author) => {
// //     try {
// //       const searchResults = await getAllBooksByCriteria(title, author)
// //       setSearchResults(searchResults)
// //     } catch (error) {
// //       console.error(`Error searching books: ${error.message}`)
// //     }
// //   }

// const handleSearchAllBooks = async (title, author) => {
//     try {
//       setSearchResults([])
//         const userId = '64e6da496c939f3eb875173b'
//       // Call the API function to search for all books based on title and author
//       const searchResults = await getAllBooksByCriteria(title, author)

//       // Fetch user-specific books based on their ID
//       const response = await fetch(`http://localhost:3000/user_inventory/search?title=${title}&author=${author}&userId=${userId}`)
//       if (response.ok) {
//         const userBooks = await response.json()
//         // Combine searchResults and userBooks as needed
//         const combinedResults = [...searchResults, ...userBooks]
//         setSearchResults(combinedResults)
//         // setFilteredEntries(combinedResults)
//       } else {
//         console.error('Error fetching user books:', response.statusText)
//       }
//     } catch (error) {
//       console.error('Error searching books:', error)
//     }
// }

//   return (
//     <div>
//       <h2>Search Books</h2>
//       <SearchBar onSearch={handleSearchAllBooks} />
//       <ul>
//         {searchResults.map((result) => (
//           <li key={result.book._id}>
//             <h3>{result.book.title}</h3>
//             <p>Author: {result.book.author}</p>
//             <p>Condition: {result.book.condition}</p>
//             <p>User: {result.user.username}</p>
//             <p>Status: {result.book.status}</p>
//             <p>Edition: {result.book.edition}</p>
//             <p>Year: {result.book.year}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default SearchAllBooks


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