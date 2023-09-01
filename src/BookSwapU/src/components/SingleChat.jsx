import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box, FormControl, IconButton, Input, Spinner, Text, useToast } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import getSender from './ChatLogic'
import axios from 'axios'

const SingleChat = ({fetchAgain, setfetchAgain}) => {
   const { user, chat, selectedChat, setSelectedChat} = ChatState()
   const [messages, setMessages] = useState([])
   const [loading, setLoading] = useState(false)
   const [ newMessage, setNewMessage] = useState()

   const toast = useToast()
  
   const fetchMessages = async() => {
      if(!selectedChat) return

      try {
         const config = {
            headers: {
               Authorization: `Bearer ${user.token}`
            }
         }

         setLoading(true)

         const { data } = await axios.get(
            `http://localhost:5000/api/message/${selectedChat._id}`,
            config
         ) 

         console.log("message:",  messages, '/n chatID', selectedChat._id)
         // console.log("Retrieved from ChatId:", data ,selectedChat._id)
         setMessages(data)
         setLoading(false)
          

      } catch (error) {
         toast({
            title: "Error occurred",
            description: "Failed to load messages",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom"
         })
      }
   }

   useEffect(() => {
      fetchMessages()
   }, [selectedChat])

   const sendMessage = async (event) => {
      if(event.key==="Enter" && newMessage) {
         try {
            const config = {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${user.token}`
               }
            }
            setNewMessage("")
            const { data } = await axios.post(`http://localhost:5000/api/message/`, 
            {
               content: newMessage,
               chatId: selectedChat._id,
            },
            config
         )
         console.log("sent to chat ID:", selectedChat._id),

         console.log(data)

         
         setMessages([...messages, data])
         } catch (error) {
            toast({
               title: "Error occurred",
               description: "Failed to send message",
               status: "error",
               duration: 5000,
               isClosable: true,
               position: "bottom"
            })
            
         }
      }
   }
   const typinghandler = (e) => {
      setNewMessage(e.target.value)

      // Typing Indicator Logic
   }
  
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
               {loading ? (
                  <Spinner 
                     size="xl"
                     width={20}
                     height={20}
                     alignSelf="center"
                     margin="auto"
                  />
               ) : (
                  <div>{/* Messages */}</div>
               )}

               <FormControl onKeyDown={sendMessage} isRequired marginTop={3}>
                  <Input 
                     variant="filled" 
                     bg="#E0E0E0"
                     placeholder="Enter a messaage"
                     onChange={typinghandler}
                     value={newMessage}
                  />
               </FormControl>
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