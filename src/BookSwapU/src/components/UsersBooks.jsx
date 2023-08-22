import React, { useState } from 'react'
import NewEntry from './NewEntry'

const UsersBooks = ({ entries, addEntry }) => {
  return (
    <>
    <NewEntry addEntry={addEntry} />
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
              <button className="btn btn-primary mt-3">Update</button>
              <button className="btn btn-primary mt-3">Remove</button>
            </div>
          </li>
        ))}
    </ul>
    </>
  )
}

export default UsersBooks