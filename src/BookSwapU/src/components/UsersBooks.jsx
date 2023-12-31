import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { getUserBooks } from "./api";

// UsersBooks Component: Responsible for displaying and managing the user's books
const UsersBooks = ({ token,
  
  // Local state for the filtered entries based on search and all the entries.
  removeEntry, navigate }) => {
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [allEntries, setAllEntries] = useState([]);

  // useEffect to fetch the user's books on component mount.
  useEffect(() => {
    // Asynchronous function to fetch user's books
    const fetchUserBooks = async () => {
      try {
        // Fetch the books without any filters to get all entries.
        const userBooks = await getUserBooks();
        setAllEntries(userBooks); // Set the fetched books in state
        setFilteredEntries(userBooks) // Initially, all entries are considered as "filtered".
      } catch (error) {
        console.error("Error fetching user books:", error);
      }
    };
    // Invoke the fetch function.
    fetchUserBooks();
  }, []) // Empty dependency array indicates this effect runs once on mount.

  // Handle search based on title and author.
const handleSearch = (searchTitle, searchAuthor) => {
  // If no search criteria, reset filtered entries to all.
  if (!searchTitle && !searchAuthor) {
      setFilteredEntries(allEntries);
      return;
  }

  // Filter entries based on search criteria.
  const results = allEntries.filter(entry => { 
      const titleMatch = searchTitle ? entry.title.toLowerCase().includes(searchTitle.toLowerCase()) : true;
      const authorMatch = searchAuthor ? entry.author.toLowerCase().includes(searchAuthor.toLowerCase()) : true;
      return titleMatch && authorMatch;
  });

  // Update the filtered entries state.
  setFilteredEntries(results);
};

// Handle removal of an entry.
const handleRemove = async (entry) => {
  const isRemoved = await removeEntry(token, entry);

  // If successfully removed, update the state by removing the entry.
  if (isRemoved) {
  const updatedAllEntries = allEntries.filter(e => e._id !== entry._id);
    setAllEntries(updatedAllEntries);
    setFilteredEntries(updatedAllEntries);
}
}
  // Render component.
  return (
    <div className="container mt-5">
      <h2>My Books</h2>
      <SearchBar onSearch={handleSearch} />
      
      <div className="d-grid gap-2 mt-3">
        <Link to="/newentry" className="btn btn-primary btn-lg">Add New Book</Link>
      </div>
      
      <div className="row mt-4">
        {filteredEntries.map((entry) => (
          <div key={entry._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{entry.title || "N/A"}</h5>
                <p className="card-text">
                  <strong>Author:</strong> {entry.author || "N/A"}<br />
                  <strong>Condition:</strong> {entry.condition || "N/A"}<br />
                  <strong>Status:</strong> {entry.status || "N/A"}<br />
                  <strong>Edition:</strong> {entry.edition || "N/A"}<br />
                  <strong>Year:</strong> {entry.year || "N/A"}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleRemove(entry)}
                >
                  Remove
                </button>
                <button
                  className="btn btn-secondary ms-2"
                  onClick={() => navigate(`/updateentry/${entry._id}`)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
  
export default UsersBooks;
