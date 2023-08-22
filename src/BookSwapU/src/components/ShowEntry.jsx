import React from 'react'

function ShowEntry({ entry }) {
  return (
    <div>
      <h2>{entry.title}</h2>
      <p>Author: {entry.author}</p>
    </div>
  )
}

export default ShowEntry