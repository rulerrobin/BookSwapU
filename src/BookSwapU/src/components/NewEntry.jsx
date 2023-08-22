import React, { useState } from 'react'

const NewEntry = ({ addEntry }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    function submit(e) {
        e.preventDefault()
        addEntry(title, author)
        setTitle('')
        setAuthor('')
    }

    return (
        <>
          <h5>Add New Book</h5>
          <form className="container" onSubmit={submit}>
            <div>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <button className="btn btn-primary mt-3">Add New Book</button>
          </form>
        </>
      )
    }

export default NewEntry