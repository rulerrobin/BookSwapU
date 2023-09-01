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
import ResponsiveWrapper from "./ResponsiveWrapper"

function App() {
  const nav = useNavigate()
  const [userToken, setUserToken] = useState(null);

  // Function to add a new book entry
  async function addEntry(bookData) {
    try {
      const token = JSON.parse(localStorage.getItem('userInfo')).token;
      
      // Check if the token is available. If not, throw an error
      if (!token) {
        throw new Error("User is not authenticated");
      }

      // Call the addBookForUser API function to add the book for the logged-in user
      await addBookForUser(token, bookData);
  
      // Navigate to the user's books page
      nav('/usersbooks');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }

// Function to remove a book entry
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

// Check whether NavBar should render
  const shouldRenderNavBar = location.pathname !== "/login"

  // Function to update a book entry
  async function updateEntry(id, updatedInfo) {
    const userInfoStr = localStorage.getItem('userInfo');
    
    // Check if user info string is available
    if (!userInfoStr) {
        console.error("User token is not available");
        return;
    }

    const userInfo = JSON.parse(userInfoStr); 
    const token = userInfo.token;

    try {
        await updateBook(id, updatedInfo, token);
    } catch (error) {
        console.error('Error updating the book entry:', error);
    }
}

  // Effect to set the user token if available in localStorage
  useEffect(() => {
    try {
    const storedToken = JSON.parse(localStorage.getItem('userInfo'))?.token;
    if (storedToken) {
      setUserToken(storedToken);
    }
  } catch (error) {
    ("Error retrieving token:", error)
  }
  }, []);

  return (
    <>
    {shouldRenderNavBar &&<NavBar />}
      <Routes>
        <Route path="/" element={<ResponsiveWrapper><Home /></ResponsiveWrapper>} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/search" element={<ResponsiveWrapper><SearchAllBooks /></ResponsiveWrapper>} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/usersbooks"
          element={
            <ResponsiveWrapper>
            <UsersBooks
              token={userToken}
              addEntry={addEntry}
              removeEntry={removeEntry}
              updateEntry={updateEntry}
              navigate={nav}
            />
            </ResponsiveWrapper>
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
