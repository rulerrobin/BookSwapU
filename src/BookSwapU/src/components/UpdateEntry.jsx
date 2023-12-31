import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateEntry = ({ entry, updateEntry }) => {
   // Hook to programmatically navigate to different routes
  const navigate = useNavigate()

  // Local state for form input fields, initialized with values from the `entry` prop or default empty strings
  const [title, setTitle] = useState(entry?.title || '')
  const [author, setAuthor] = useState(entry?.author || '')
  const [condition, setCondition] = useState(entry?.condition || '')
  const [user, setUser] = useState(entry?.user?.username || '')
  const [status, setStatus] = useState(entry?.status || '')
  const [edition, setEdition] = useState(entry?.edition || '')
  const [year, setYear] = useState(entry?.year || '')

  // useEffect to update local state when the `entry` prop changes
  useEffect(() => {
    setTitle(entry?.title || '')
    setAuthor(entry?.author || '')
    setCondition(entry?.condition || '')
    setStatus(entry?.status || '')
    setEdition(entry?.edition || '')
    setYear(entry?.year || '')
  }, [entry])

  const handleSubmit = (e) => {
    e.preventDefault()
      // Constructing the updated entry information from the local state
      const updatedInfo = {
          title,
          author,
          condition,
          edition,
          status,
          year,
    }
    // Invoking the passed-in `updateEntry` function to handle the update
    updateEntry(updatedInfo)
    // Navigating to the '/usersbooks' route after the update
    navigate('/usersbooks')
  }

  return (
    <>
    <h5>Update book</h5>
      <form className="container" onSubmit={handleSubmit}>
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
            disabled
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
        <button type="submit" className="btn btn-primary mt-3">Save Update</button>
      </form>
    </>
  )
}

export default UpdateEntry


