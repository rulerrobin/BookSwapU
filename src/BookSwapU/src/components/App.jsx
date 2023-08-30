import React, { useEffect, useState } from "react"
import { Routes, Route, useParams, useNavigate } from "react-router-dom"
import Messages from "./Messages"
import ShowEntry from "./ShowEntry"
import UsersBooks from "./UsersBooks"
import Home from "./Home"
import Profile from "./Profile"
import NewEntry from "./NewEntry"
import NavBar from "./NavBar"
import LoginRegister from "./LoginRegister"
import UpdateEntry from "./UpdateEntry"
import { getAllBooks, addBookForUser, removeBookForUser } from './api'
import SearchAllBooks from "./SearchAllBooks"

function App() {
  const nav = useNavigate()
  const [entries, setEntries] = useState([])
  const [userToken, setUserToken] = useState(null);

  function ShowEntryWrapper() {
    const { id } = useParams()
    return <ShowEntry entry={entries[id]} />
  }

  function UpdateEntryWrapper() {
    const { index } = useParams()
    const entry = entries[index]

    return (
      <UpdateEntry
        entry={entry}
        updateEntry={(updatedInfo) => {
          updateEntry(index, updatedInfo)
          nav("/usersbooks")
        }}
      />
    )
  }

  async function addEntry(bookData) {
    try {
      const token = JSON.parse(localStorage.getItem('userInfo')).token;
  
      // Call the addBookForUser API function to add the book for the logged-in user
      const addedBook = await addBookForUser(token, bookData);
  
      // Update the state with the newly added book
      setEntries([...entries, addedBook]);
  
      // Navigate to the user's books page
      nav('/usersbooks');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }

async function removeEntry(token, entry) {
  // Debug logs to check the structure of entry and book._id
  console.log("Entry:", entry);
  console.log("Book ID:", entry.book._id);

  try {
      // Pass the token and book ID to the removeBookForUser function
      const removed = await removeBookForUser(token, entry.book._id);

      if (removed) {
          // Update the state by removing the entry
          const updatedEntries = entries.filter((_, i) => i !== entry._id);
          setEntries(updatedEntries);
      }
  } catch (error) {
      console.error('Error removing entry:', error);
  }
}

  const shouldRenderNavBar = location.pathname !== "/login"

  async function updateEntry(index, updatedInfo) {
    const updatedEntries = [...entries]
    updatedEntries[index] = { ...updatedEntries[index], ...updatedInfo }
    setEntries(updatedEntries)
    nav("/usersbooks")
  }

  const handleSearchAllBooks = async () => {
    try {
      // Call the API function to search for all books based on title and author
      const allBooksResults = await getAllBooks()
      // Update your state or perform any other action with the search results
      console.log('All Books:', allBooksResults)
    } catch (error) {
      console.error('Error searching books:', error)
    }
  }

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem('userInfo'))?.token;
    if (storedToken) {
      setUserToken(storedToken);
    }
  }, []);

  return (
    <>
    {shouldRenderNavBar &&<NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/search" element={<SearchAllBooks onSearch={handleSearchAllBooks}/>} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/usersbooks"
          element={
            <UsersBooks
              token={userToken}
              entries={entries}
              addEntry={addEntry}
              removeEntry={removeEntry}
              updateEntry={updateEntry}
              navigate={nav}
            />
          }
        />
        <Route path="/entry" element={<ShowEntryWrapper entries={entries} />} />
        <Route path="/newentry" element={<NewEntry addEntry={addEntry} />} />
        <Route
          path="updateentry/:index"
          element={
            <UpdateEntryWrapper entries={entries} updateEntry={updateEntry} />
          }
        />
        <Route path="*" element={<h3>Page not found</h3>} />
      </Routes>
    </>
  )
}

export default App
