import React from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box } from '@chakra-ui/react'
import SingleChat from './SingleChat'

const ChatBox = ({ fetchAgain, setfetchAgain }) => {

  const { selectedChat } = ChatState()


  return (

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
      <SingleChat fetchAgain={fetchAgain} setfetchAgain={setfetchAgain} />
    </Box>
  )
}

export default ChatBox