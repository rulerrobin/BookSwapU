import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { getUserBooks } from "./api";

const UsersBooks = ({ token,
  // entries,
  removeEntry, navigate }) => {
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [allEntries, setAllEntries] = useState([]);

  console.log("filteredentries", filteredEntries)

  useEffect(() => {
    // This function fetches the books for the logged-in user
    const fetchUserBooks = async () => {
      try {
        const userBooks = await getUserBooks();// No filters since we're getting all books
        setAllEntries(userBooks);
        setFilteredEntries(userBooks) // Populate filteredEntries with all user books
      } catch (error) {
        console.error("Error fetching user books:", error);
      }
    };

    fetchUserBooks();
  }, [])
  
const handleSearch = (searchTitle, searchAuthor) => {
  if (!searchTitle && !searchAuthor) {
      setFilteredEntries(allEntries);
      return;
  }

  const results = allEntries.filter(entry => { 
      const titleMatch = searchTitle ? entry.title.toLowerCase().includes(searchTitle.toLowerCase()) : true;
      const authorMatch = searchAuthor ? entry.author.toLowerCase().includes(searchAuthor.toLowerCase()) : true;
      return titleMatch && authorMatch;
  });

  setFilteredEntries(results);
};

const handleRemove = async (entry) => {
  const isRemoved = await removeEntry(token, entry);

  if (isRemoved) {
  const updatedAllEntries = allEntries.filter(e => e._id !== entry._id);
    setAllEntries(updatedAllEntries);
    setFilteredEntries(updatedAllEntries);
}
}
  
  return (
    <>
      <h2>My Books</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="d-grid gap-2">
        <Link to="/newentry" className="btn btn-primary btn-lg" type="button">
          Add New Book
        </Link>
      </div>
      <ul>
        {filteredEntries.map((entry) => (
          <li key={entry._id}>
            <div>
              <p>
                <strong>Title:</strong> {entry ? entry.title : "N/A"}
              </p>
              <p>
                <strong>Author:</strong>{" "}
                {entry ? entry.author : "N/A"}
              </p>
              <p>
                <strong>Condition:</strong>{" "}
                {entry ? entry.condition : "N/A"}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {entry ? entry.status : "N/A"}
              </p>
              <p>
                <strong>Edition:</strong>{" "}
                {entry ? entry.edition : "N/A"}
              </p>
              <p>
                <strong>Year:</strong> {entry ? entry.year : "N/A"}
              </p>
              <button
                className="btn btn-primary mt-3"
                onClick={() => handleRemove(entry)}
              >
                Remove
              </button>
              <button
                className="btn btn-primary mt-3"
                onClick={() => navigate(`/updateentry/${entry._id}`)}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersBooks

