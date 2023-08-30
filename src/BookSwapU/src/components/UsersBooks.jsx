import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import UpdateEntry from "./UpdateEntry";
import { getUserBooks } from "./api";

const UsersBooks = ({ token, entries, removeEntry, updateEntry, navigate }) => {
  console.log("Entries in UsersBooks:", entries);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedEntryIndex, setSelectedEntryIndex] = useState(null);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [allEntries, setAllEntries] = useState([]);
 
  useEffect(() => {
    setFilteredEntries(entries);
  }, [entries]);

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
      const titleMatch = searchTitle ? entry.book.title.toLowerCase().includes(searchTitle.toLowerCase()) : true;
      const authorMatch = searchAuthor ? entry.book.author.toLowerCase().includes(searchAuthor.toLowerCase()) : true;
      return titleMatch && authorMatch;
  });

  setFilteredEntries(results);
};

const handleRemove = (entry) => {
  removeEntry(token, entry);

  const updatedAllEntries = allEntries.filter(e => e._id !== entry._id);
    setAllEntries(updatedAllEntries);
    setFilteredEntries(updatedAllEntries);
}

  const handleUpdate = (index) => {
    setSelectedEntryIndex(index);
    setShowUpdateForm(true);
    navigate(`/updateentry/${index}`);
  };
  
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
                <strong>Title:</strong> {entry.book ? entry.book.title : "N/A"}
              </p>
              <p>
                <strong>Author:</strong>{" "}
                {entry.book ? entry.book.author : "N/A"}
              </p>
              <p>
                <strong>Condition:</strong>{" "}
                {entry.book ? entry.book.condition : "N/A"}
              </p>
              <p>
                <strong>User:</strong>{" "}
                {entry.user ? entry.user.username : "N/A"}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {entry.book ? entry.book.status : "N/A"}
              </p>
              <p>
                <strong>Edition:</strong>{" "}
                {entry.book ? entry.book.edition : "N/A"}
              </p>
              <p>
                <strong>Year:</strong> {entry.book ? entry.book.year : "N/A"}
              </p>
              <button
                className="btn btn-primary mt-3"
                onClick={() => handleRemove(entry)}
              >
                Remove
              </button>
              <button
                className="btn btn-primary mt-3"
                onClick={() => handleUpdate(index)}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showUpdateForm && selectedEntryIndex !== null && (
        <UpdateEntry
          entry={entries[selectedEntryIndex]}
          updateEntry={(updatedInfo) => {
            updateEntry(selectedEntryIndex, updatedInfo);
            setShowUpdateForm(false);
          }}
          index={selectedEntryIndex}
        />
      )}
    </>
  );
};

export default UsersBooks

