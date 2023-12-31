import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box, FormControl, IconButton, Input, Spinner, Text, useToast } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { getSender } from './ChatLogic'
import axios from 'axios'
import ScrollableChat from './ScrollableChat'
import io from "socket.io-client"
import Lottie from "lottie-react"
import animationData from "../animation/typing.json"

// Define the endpoint for the socket.io server
const ENDPOINT = "https://bookswapu-api.onrender.com"
var socket, selectedChatCompare

const SingleChat = ({fetchAgain, setfetchAgain}) => {
   // Get state from the ChatProvider
   const { user, chat, selectedChat, setSelectedChat} = ChatState()

   // Define component state variables
   const [messages, setMessages] = useState([])
   const [loading, setLoading] = useState(false)
   const [ newMessage, setNewMessage] = useState()
   const [socketConnected, setSocketConnected] = useState(false)
   const [typing, setTyping] = useState(false)
   const [isTyping, setIsTyping] = useState(false)

   // Initialize the toast notification system
   const toast = useToast()
  
   // Lottie animation options
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
         preserverAspectRation: "xMidYMid slice"
      }
   }

   // Function to fetch messages for the selected chat
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
            `https://bookswapu-api.onrender.com/api/message/${selectedChat._id}`,
            config
         ) 

         // console.log("message:",  messages, '/n chatID', selectedChat._id)
         // console.log("Retrieved from ChatId:", data ,selectedChat._id)
         setMessages(data)
         setLoading(false)

         // Emit a 'join chat' event to the socket.io server
         socket.emit('join chat', selectedChat._id)
          

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

   // Initialize the socket.io connection and set up event listeners
   useEffect(() => {
      socket = io(ENDPOINT)
      socket.emit("setup", user)
      socket.on("connected", () => setSocketConnected(true))
      socket.on("typing", ()=> setIsTyping(true))
      socket.on("stop typing", ()=> setIsTyping(false))
   }, [])

   // Fetch messages when the selected chat changes
   useEffect(() => {
      fetchMessages()
      
      selectedChatCompare = selectedChat
   }, [selectedChat],)

   // Function to send a new message
   const sendMessage = async (event) => {
      if(event.key==="Enter" && newMessage) {
         socket.emit("stop Typing", selectedChat._id)
         try {
            const config = {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${user.token}`
               }
            }
            setNewMessage("")
            const { data } = await axios.post(`https://bookswapu-api.onrender.com/api/message/`, 
            {
               content: newMessage,
               chatId: selectedChat._id,
            },
            config
         )
         // console.log("sent to chat ID:", selectedChat._id),

         console.log(data)

         socket.emit('new message', data)
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


   // Listen for incoming messages from the socket.io server
   useEffect(() => {
      socket.on("message recieved", (newMessageReceived) => {
         if (!selectedChatCompare || selectedChatCompare._id !== newMessageReceived.chat._id){
            // Give Notification (Current under development)
         } else {
            setMessages([...messages, newMessageReceived])
         }
      })
   })
   
   // Function to handle typing indicator and emit typing events
   const typinghandler = (e) => {
      setNewMessage(e.target.value)

      // Typing Indicator Logic
      if(!socketConnected) return

      if (!typing) {
         setTyping(true)
         socket.emit("typing", selectedChat._id)
      }
      let lastTypingTime = new Date().getTime()
      var timerLength = 3000
      setTimeout(() => {
         var timeNow = new Date().getTime()
         var timeDiff = timeNow - lastTypingTime

         if(timeDiff >= timerLength && typing){
            socket.emit('stop typing', selectedChat._id)
            setTyping(false)
         }
      }, timerLength)
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
                  <div 
                     display="flex"
                     flex-direction="column"
                     overflow-y="scroll"
                     scrollbar-width="none"
                  >
                        <ScrollableChat messages={messages} />
                  </div>
               )}

               <FormControl onKeyDown={sendMessage} isRequired marginTop={3}>
                  {isTyping ? <div>
                     Typing...
                  </div> : <></>}
                  
                  <Input 
                     variant="filled" 
                     bg="#E0E0E0"
                     placeholder="Enter a message"
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