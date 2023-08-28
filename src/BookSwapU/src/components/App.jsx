import React, { useEffect, useState } from "react"
import { Routes, Route, useParams, useNavigate } from "react-router-dom"
import Messages from "./Messages"
import ShowEntry from "./ShowEntry"
import UsersBooks from "./UsersBooks"
import Home from "./Home"
import Profile from "./Profile"
import Search from "./Search"
import NewEntry from "./NewEntry"
import NavBar from "./NavBar"
import AddEditBook from "./AddEditBook"
import LoginRegister from "./LoginRegister"
// import "./App.css"
import UpdateEntry from "./UpdateEntry"

const seedEntries = [
  { title: "Book 1", author: "Author 1", condition: "New", user: "John", status: "Approved", edition: "4", year: "2003" },
  { title: "Book 2", author: "Author 2", condition: "Used", user: "Peter", status: "Pending", edition: "3", year: "1999" },
  { title: "Book 3", author: "Author 3", condition: "Good", user: "Andrew", status: "Approved", edition: "1", year: "1985" },
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

  function UpdateEntryWrapper() {
    const { index } = useParams()
    const entry = entries[index]
    
    return <UpdateEntry entry={entry} updateEntry={(updatedInfo) => {
      updateEntry(index, updatedInfo)
      nav('/usersbooks')
    }} />
  }

  async function addEntry(title, author, condition, user, status, edition, year) {
    const newEntry = { title, author, condition, user, status, edition, year }
    setEntries([...entries, newEntry])
    nav('/usersbooks')
  }

  async function removeEntry(index) {
    const updatedEntries = [...entries]
    updatedEntries.splice(index, 1)
    setEntries(updatedEntries)
  }

  const shouldRenderNavBar = location.pathname !== "/login"

  async function updateEntry(index, updatedInfo) {
    const updatedEntries = [...entries]
    updatedEntries[index] = { ... updatedEntries[index], ...updatedInfo }
      setEntries(updatedEntries)
      nav('/usersbooks')
    }
  
  return (
    <>
    {shouldRenderNavBar &&<NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/search" element={<Search />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/usersbooks" element={<UsersBooks entries={entries} addEntry={addEntry} removeEntry={removeEntry} updateEntry={updateEntry} navigate={nav} />} />
        <Route path="/entry" element={<ShowEntryWrapper entries={entries} />} />
        <Route path="/newentry" element={<NewEntry addEntry={addEntry} />} />
        <Route path="updateentry/:index" element={<UpdateEntryWrapper entries={entries} updateEntry={updateEntry} />} />
        <Route path="*" element={<h3>Page not found</h3>} /> 
      </Routes>
    </>
  )
}

export default App
