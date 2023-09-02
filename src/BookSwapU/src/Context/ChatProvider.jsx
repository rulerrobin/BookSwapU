import React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"



const ChatContext = createContext()

const ChatProvider = ({children}) => {
   const [ user, setUser ] = useState()
   const [ selectedChat, setSelectedChat] = useState()
   const [ chats, setChats ] = useState()

   const location = useLocation()
   const navigate = useNavigate()

   useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))
      setUser(userInfo)

      // Determine if the current route requires authentication
      const requiresAuth = !["/", "/login"].includes(location.pathname)

      // If userInfo missing and the route requires authentication, redirect user to login page
      if (!userInfo && requiresAuth) {
      navigate("/login")
      }
   }, [navigate, location.pathname])

   return <ChatContext.Provider value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}>
      {children}
   </ChatContext.Provider>
} 

export const ChatState = () => {
   return useContext(ChatContext)
}

export default ChatProvider