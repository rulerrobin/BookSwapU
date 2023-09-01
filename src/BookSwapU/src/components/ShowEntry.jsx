import React from 'react'

/**
 * ShowEntry component: A presentational component that displays details about a specific book entry.
 * 
 * Props:
 * - entry: An object containing details about a book and its associated user.
 */

function ShowEntry({ entry }) {
  return (
    <div>
      <h2>{entry.title}</h2>
      <p>Author: {entry.author}</p>
      <p>Condition: {entry.condition}</p>
      <p>User: {entry.user.username}</p>
      <p>Status: {entry.status}</p>
      <p>Edition: {entry.edition}</p>
      <p>Year: {entry.year}</p>
    </div>
  );
}

export default ShowEntry