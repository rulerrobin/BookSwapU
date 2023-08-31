import React from 'react'

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