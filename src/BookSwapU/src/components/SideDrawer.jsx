import { Box, Button, Input, Menu, MenuButton, Spinner, Text, Toast, Tooltip, useDisclosure, useToast } from '@chakra-ui/react'
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import {
   Drawer,
   DrawerBody,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
 } from '@chakra-ui/react'
import axios from 'axios'
import ChatLoading from './ChatLoading'
import { ChatState } from '../Context/ChatProvider'
import UserListItem from './UserAvatar/UserListitem'


const SideDrawer = () => {
   const [search, setSearch] = useState("")
   const [searchResult, setSearchResult] = useState([])
   const [loading, setLoading] = useState(false)
   const [loadingChat, setLoadingChat] = useState()

   const { user, setSelectedChat, chats, setChats} = ChatState()

   const { isOpen, onOpen, onClose } = useDisclosure()

   const toast = useToast()

   const handleSearch = async() => {
      if(!search) {
         toast({
            title: "Please Enter something in search",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "top-left",
         })
         return
      }

      try {
         setLoading(true)

         const config = {
            headers: {
               Authorization:`Bearer ${user.token}`,
            }
         }

         // console.log(config)

         const { data } = await axios.get(`http://localhost:5000/api/user?search=${search}`, config)
         setLoading(false)

         setSearchResult(data)

         console.log("users", data)

      } catch (error) {
         toast({
            title: "Error Occurred",
            description: "Failed to Load Search Results",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom-left",
         })
         console.log(error)
      }
   }

   const accessChat = async (userId) => {
      console.log("Accessing chat for user:", userId);

      
      try {
         setLoadingChat(true)
         console.log("loadingChat:", loadingChat)
         const config = {
            headers: {
               "Content-type":"application/json",
               Authorization:`Bearer ${user.token}`,
            },
         }
            const { data } = await axios.post('http://localhost:5000/api/chat', { userId }, config)

            if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats])
            setSelectedChat(data)
            setLoadingChat(false)
            onClose()
      } catch (error) {
         toast({
            title: "Error fetching messages",
            description: error.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom-left",
         })
      }
   }

   return (
      <>
         <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            background="white"
            width="100%"
            padding="5px 10px 5px 10px"
            borderWidth="5px"
         >
            <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
               <Button variant="ghost" onClick={onOpen}>
                  <i class="fas fa-search"></i>
                  <Text 
                  display={{ base: "none", md: "flex" }} px="4">
                     Search User
                  </Text>
               </Button>
            </Tooltip>
               <div>
                  <Menu>
                     <MenuButton  margin={1}>
                        <BellIcon fontSize="2x1" margin={1}/>
                     </MenuButton>
                  </Menu>
               </div>
         </Box>
         <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
               <DrawerHeader borderBottomWidth='1px'>Search Users</DrawerHeader>
               <DrawerBody>
                  <Box
                     display='flex'
                     padding={2}
                  >
                     <Input
                        placeholder="Search by name or email"
                        marginRight={2}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                     />
                     <Button onClick={handleSearch}>Go</Button>
               </Box>
               {loading ? (
                  <ChatLoading />
               ) : (
                  searchResult?.map((user) => (
                     <UserListItem
                        key={user._id}
                        user={user}
                        handleFunctions={()=>accessChat(user._id)}
                     />
                  ))
               )}
               {loadingChat && <Spinner marginLeft='auto' display='flex' />}
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </>
  )
}

export default SideDrawer