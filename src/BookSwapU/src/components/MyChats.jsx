import React, { useState, useEffect } from 'react'
import { ChatState } from '../Context/ChatProvider'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'


const MyChats = () => {
  const [ loggedUser, setLoggedUser ] = useState()
  const {  selectedChat, setSelectedChat, user, chats, setChats } = ChatState()

  const toast = useToast()

    const fetchChats = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }

        const { data } = await axios.get('http://localhost:5000/api/chat', config)
        setChats(data)
      } catch (error) {
        toast({
          title: "Error Occurred",
          description: "Failed to Load messages",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
       })
      }
    }

    useEffect(() => {
      setLoggedUser(JSON.parse(localStorage.getItem("userInfo")))
      fetchChats()
    }, [])

  return (
    <div>MyChats</div>
  )
}

export default MyChats