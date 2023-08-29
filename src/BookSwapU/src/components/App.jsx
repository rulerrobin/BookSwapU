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
import { getAllBooksByCriteria } from './api'
import SearchAllBooks from "./SearchAllBooks"


const seedEntries = [
  {
    _id: "64ec193a24792af0964fb2aa",
    book: {
      _id: "64ec193924792af0964fb29f",
      title: "Scrum For Dummies",
      author: "Mark C. Layton",
      condition: "Good",
      edition: "2nd Edition",
      status: "Available",
      year: "2018",
    },
    user: {
      _id: "64ec193724792af0964fb297",
      username: "SolarWarden",
      email: "defender@gmail.com",
      password: "password123",
    },
    __v: 0,
  },
  {
    _id: "some_other_id",
    book: {
      _id: "book_id_1",
      title: "Introduction to React",
      author: "Jane Doe",
      condition: "New",
      edition: "1st Edition",
      status: "Available",
      year: "2022",
    },
    user: {
      _id: "user_id_1",
      username: "ReactEnthusiast",
      email: "react@example.com",
      password: "react123",
    },
    __v: 0,
  },
  {
    _id: "yet_another_id",
    book: {
      _id: "book_id_2",
      title: "JavaScript Basics",
      author: "John Smith",
      condition: "Used",
      edition: "3rd Edition",
      status: "Pending",
      year: "2020",
    },
    user: {
      _id: "user_id_2",
      username: "JSDeveloper",
      email: "js@example.com",
      password: "js456",
    },
    __v: 0,
  },
]

function App() {
  const nav = useNavigate()
  const [entries, setEntries] = useState([])

  useEffect(() => {
    setEntries(seedEntries);
  }, [])

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

  async function addEntry(
    title,
    author,
    condition,
    user,
    status,
    edition,
    year
  ) {
    const newEntry = {
      _id: "new_id", // Generate a new ID here
      book: {
        _id: "book_new_id", // Generate a new book ID here
        title,
        author,
        condition,
        edition,
        status,
        year,
      },
      user: {
        _id: "user_new_id", // Generate a new user ID here
        username: user,
        email: `${user.toLowerCase()}@example.com`, // Generate an email based on username
        password: "password123", // You can generate a random password here
      },
      __v: 0,
    };
    setEntries([...entries, newEntry]);
    nav("/usersbooks");
  }
  

  async function removeEntry(index) {
    const updatedEntries = [...entries]
    updatedEntries.splice(index, 1)
    setEntries(updatedEntries)
  }

  const shouldRenderNavBar = location.pathname !== "/login"

  async function updateEntry(index, updatedInfo) {
    const updatedEntries = [...entries]
    updatedEntries[index] = { ...updatedEntries[index], ...updatedInfo }
    setEntries(updatedEntries)
    nav("/usersbooks")
  }

  const handleSearchAllBooks = async (title, author) => {
    try {
      // Call the API function to search for all books based on title and author
      const searchResults = await getAllBooksByCriteria(title, author)
      // Update your state or perform any other action with the search results
      console.log('Search results:', searchResults)
    } catch (error) {
      console.error('Error searching books:', error)
    }
  }

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
