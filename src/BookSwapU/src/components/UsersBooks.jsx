import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UpdateEntry from './UpdateEntry'

const UsersBooks = ({ entries, removeEntry, updateEntry, navigate }) => {
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [selectedEntryIndex, setSelectedEntryIndex] = useState(null)

    const handleRemove = (index) => {
        removeEntry(index)
    }

    const handleUpdate = (index) => {
        setSelectedEntryIndex(index)
        setShowUpdateForm(true)
        navigate(`/updateentry/${index}`)
  }

  return (
    <>
    <h2>Your Books</h2>
    <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <div>
              <p><strong>Title:</strong> {entry.title}</p>
              <p><strong>Author:</strong> {entry.author}</p>
              <p><strong>Condition:</strong> {entry.condition}</p>
              <p><strong>User:</strong> {entry.user}</p>
              <p><strong>Status:</strong> {entry.status}</p>
              <p><strong>Edition:</strong> {entry.edition}</p>
              <p><strong>Year:</strong> {entry.year}</p>
              <button className="btn btn-primary mt-3" onClick={() => handleRemove(index)}>Remove</button>
              <button className="btn btn-primary mt-3" onClick={() => handleUpdate(index)}>Update</button>
            </div>
          </li>
        ))}
    </ul>
    <Link to="/newentry" className="btn btn-primary mt-3">Add New Book</Link>
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