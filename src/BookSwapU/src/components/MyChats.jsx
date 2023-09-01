import React, { useState, useEffect } from 'react'
import { ChatState } from '../Context/ChatProvider'
import axios from 'axios'
import { Box, Button, Stack, Text, useToast } from '@chakra-ui/react'
import ChatLoading from './ChatLoading'
import getSender from './ChatLogic'


const MyChats = ({ fetchAgain }) => {
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
        // console.log(data)
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
    }, [fetchAgain])

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      background="white"
      width={{ base: "100", md: "31%"}}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px"}}
        display="flex"
        width="100"
        justifyContent="space-between"
        alignItems="center"
      >
        My Messages
      </Box>
      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        width="100%"
        height="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflowY='scroll'>
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
              >
                
                <Text>
                  {/* {console.log(loggedUser)}  */}
                  {chat.chatName = getSender(loggedUser, chat.users)}    
                    
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  )
}


export default MyChats