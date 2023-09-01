import React from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box, IconButton, Text } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import getSender from './ChatLogic'

const SingleChat = ({fetchAgain, setfetchAgain}) => {
   const { user, chat, selectedChat, setSelectedChat} = ChatState()
  
  
   return <>
      { selectedChat ? (
         <>
            <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
            >
               <IconButton 
                  d={{ base: "flex", md: "none" }}
                  icon={ <ArrowBackIcon />}
                  onClick={() => setSelectedChat("")}
               />
               {getSender(user, selectedChat.users)}
            </Text>
            <Box
               display="flex"
               flexDir="column"
               justifyContent="flex-end"
               padding={3}
               background="#E8E8E8"
               width="100%"
               height="100%"
               borderRadius="lg"
               overflowY="hidden"
            >
               {/* Messages here */}
            </Box>
         </>
      ) : (
         <Box
         d="flex"
         alignItems="center"
         justifyContent="center"
         h="100%"
         >
            <Text
            fontSize="3x1"
            pb={3}
            >
               Click on a user to start chatting
            </Text>
         </Box>
      )}
   </>
}

export default SingleChat