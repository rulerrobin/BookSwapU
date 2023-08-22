import React, { useEffect, useState } from "react"
import { Routes, Route, useParams, useNavigate } from "react-router-dom"
import Messages from "./Messages"
import ShowEntry from "./ShowEntry"
import UsersBooks from "./UsersBooks"
import Home from "./Home"
import Profile from "./Profile"
import Search from "./Search"
import NavBar from "./NavBar"

const seedEntries = [
  { title: "Book 1", author: "Author 1" },
  { title: "Book 2", author: "Author 2" },
  { title: "Book 3", author: "Author 3" },
]

function App() {
  const nav = useNavigate()
  const [entries, setEntries] = useState([])

  useEffect(() => {
    setEntries(seedEntries)
  }, [])

  function ShowEntryWrapper() {
    const { id } = useParams()
    return <ShowEntry entry={entries[id]} />
  }

  async function addEntry(title, author) {
    const newEntry = { title, author }
    setEntries([...entries, newEntry])
    nav('/usersbooks')
  }

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/usersbooks" element={<UsersBooks entries={entries} addEntry={addEntry} />} />
        <Route path="/entry" element={<ShowEntryWrapper entries={entries} />} />
        <Route path="*" element={<h3>Page not found</h3>} /> 
      </Routes>
    </>
  )
}

export default App
