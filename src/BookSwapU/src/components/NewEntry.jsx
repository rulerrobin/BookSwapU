import React, { useState } from 'react'

const NewEntry = ({ addEntry }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [condition, setCondition] = useState('')
    const [user, setUser] = useState('')
    const [status, setStatus] = useState('')
    const [edition, setEdition] = useState('')
    const [year, setYear] = useState('')

    function submit(e) {
        e.preventDefault()
        addEntry(
            title,
            author,
            condition,
            user,
            status,
            edition,
            year,
        )
        setTitle('')
        setAuthor('')
        setCondition('')
        setUser('')
        setStatus('')
        setEdition('')
        setYear('')
    }

    return (
        <>
          <h5>User's Books</h5>
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
            <div>
          <input
            type="text"
            placeholder="Condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Edition"
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
            <button className="btn btn-primary mt-3">Add New Book</button>
          </form>
        </>
      )
    }

export default NewEntry