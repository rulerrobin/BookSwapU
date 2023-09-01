import React, { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Messages from "./Messages"
import UsersBooks from "./UsersBooks"
import Home from "./Home"
import Profile from "./Profile"
import NewEntry from "./NewEntry"
import NavBar from "./NavBar"
import LoginRegister from "./LoginRegister"
import { addBookForUser, removeBookForUser, updateBook } from './api'
import SearchAllBooks from "./SearchAllBooks"
import UpdateEntryWrapper from "./UpdateEntryWrapper"

function App() {
  const nav = useNavigate()
  const [userToken, setUserToken] = useState(null);

  async function addEntry(bookData) {
    try {
      const token = JSON.parse(localStorage.getItem('userInfo')).token;
  
      // Call the addBookForUser API function to add the book for the logged-in user
      await addBookForUser(token, bookData);
  
      // Navigate to the user's books page
      nav('/usersbooks');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }

async function removeEntry(token, entry) {
  try {
      // Pass the token and book ID to the removeBookForUser function
      await removeBookForUser(token, entry._id);
      return true
  } catch (error) {
      console.error('Error removing entry:', error);
      return false
  }
}

  const shouldRenderNavBar = location.pathname !== "/login"

  async function updateEntry(id, updatedInfo) {
    const userInfoStr = localStorage.getItem('userInfo');
    if (!userInfoStr) {
        console.error("User token is not available");
        return;
    }

    const userInfo = JSON.parse(userInfoStr); 
    const token = userInfo.token;

    try {
        // Now, update the book in the backend using the token.
        await updateBook(id, updatedInfo, token);
    } catch (error) {
        console.error('Error updating the book entry:', error);
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
        <Route path="/search" element={<SearchAllBooks />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/usersbooks"
          element={
            <UsersBooks
              token={userToken}
              addEntry={addEntry}
              removeEntry={removeEntry}
              updateEntry={updateEntry}
              navigate={nav}
            />
          }
        />
        <Route path="/newentry" element={<NewEntry addEntry={addEntry} />} />
        <Route
          path="updateentry/:id"
          element={
            <UpdateEntryWrapper
            updateEntry={updateEntry} />
          }
        />
        <Route path="*" element={<h3>Page not found</h3>} />
      </Routes>
    </>
  )
}

export default App
