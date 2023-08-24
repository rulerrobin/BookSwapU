import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar"
import UpdateEntry from "./UpdateEntry"

const UsersBooks = ({ entries, removeEntry, updateEntry, navigate }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [selectedEntryIndex, setSelectedEntryIndex] = useState(null)
  const [filteredEntries, setFilteredEntries] = useState(entries)

  useEffect(() => {
    setFilteredEntries(entries)
  }, [entries])

const handleSearch = (searchTitle, searchAuthor) => {
    const cleanSearchTitle = searchTitle.toLowerCase().replace(/\s/g, '')
    const cleanSearchAuthor = searchAuthor.toLowerCase().replace(/\s/g, '')

    const filteredEntries = entries.filter((entry) => {
    const cleanEntryTitle = entry.title.toLowerCase().replace(/\s/g, '')
    const cleanEntryAuthor = entry.author.toLowerCase().replace(/\s/g, '')

    const matchesTitle = cleanEntryTitle.includes(cleanSearchTitle)
    const matchesAuthor = cleanEntryAuthor.includes(cleanSearchAuthor)

      if (cleanSearchTitle && cleanSearchAuthor) {
        return matchesTitle && matchesAuthor
      } else if (cleanSearchTitle) {
        return matchesTitle
      } else if (cleanSearchAuthor) {
        return matchesAuthor
      }
      return true
    })

    setFilteredEntries(filteredEntries)
  }

  const handleRemove = (index) => {
    removeEntry(index)
    setFilteredEntries(filteredEntries.filter((_, i) => i !== index))
  }

  const handleUpdate = (index) => {
    setSelectedEntryIndex(index)
    setShowUpdateForm(true)
    navigate(`/updateentry/${index}`)
  }

  return (
    <>
      <h2>My Books</h2>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredEntries.map((entry, index) => (
          <li key={index}>
            <div>
              <p>
                <strong>Title:</strong> {entry.title}
              </p>
              <p>
                <strong>Author:</strong> {entry.author}
              </p>
              <p>
                <strong>Condition:</strong> {entry.condition}
              </p>
              <p>
                <strong>User:</strong> {entry.user}
              </p>
              <p>
                <strong>Status:</strong> {entry.status}
              </p>
              <p>
                <strong>Edition:</strong> {entry.edition}
              </p>
              <p>
                <strong>Year:</strong> {entry.year}
              </p>
              <button
                className="btn btn-primary mt-3"
                onClick={() => handleRemove(index)}
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
      <Link to="/newentry" className="btn btn-primary mt-3">
        Add New Book
      </Link>
      {showUpdateForm && selectedEntryIndex !== null && (
        <UpdateEntry
          entry={entries[selectedEntryIndex]}
          updateEntry={(updatedInfo) => {
            updateEntry(selectedEntryIndex, updatedInfo)
            setShowUpdateForm(false)
          }}
          index={selectedEntryIndex}
        />
      )}
    </>
  )
}

export default UsersBooks