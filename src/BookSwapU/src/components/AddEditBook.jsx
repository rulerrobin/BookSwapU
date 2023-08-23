import React from 'react'
import NewEntry from './NewEntry'

const AddEditBook = ({ addEntry }) => {
  return (
    <div>
      <h2>Add New Book</h2>
      <NewEntry addEntry={addEntry} />
    </div>
  )
}

export default AddEditBook