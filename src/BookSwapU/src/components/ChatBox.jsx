import React from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box } from '@chakra-ui/react'
import SingleChat from './SingleChat'

const ChatBox = ({ fetchAgain, setfetchAgain }) => {

  // Get the selectedChat from the ChatState context
  const { selectedChat } = ChatState()


  return (
    // Container for the chat box
    <Box
    display={{ base: selectedChat ? "flex" : "none", md: "flex"}}
    alignItems="center"
    flexDir="column"
    padding={3}
    background="white"
    width={{ base: "100%", md: "68%"}}
    borderRadius="lg"
    borderWidth="1px"
    >
      {/* Render the SingleChat component inside the chat box */}
      <SingleChat fetchAgain={fetchAgain} setfetchAgain={setfetchAgain} />
    </Box>
  )
}

export default ChatBox