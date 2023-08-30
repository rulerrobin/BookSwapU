import { Box, Button, Menu, MenuButton, MenuList, Text, Tooltip } from '@chakra-ui/react'
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'

const SideDrawer = () => {
   const [search, setSearch] = useState("")
   const [searchResult, setSearchResult] = useState([])
   const [loading, setLoading] = useState(false)
   const [loadingChat, setLoadingChat] = useState()


   return (
      <>
         <Text>
            Messages
         </Text>
         
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
               <Button variant="ghost">
                  <i class="fas fa-search"></i>
                  <Text 
                  display={{ base: "none", md: "flex" }} px="4">
                     Search User
                  </Text>
                  <div>
                     <Menu>
                        <MenuButton  margin={1}>
                           <BellIcon fontSize="2x1" margin={1}/>
                        </MenuButton>
                        {/* <MenuList> </MenuList> */}
                     </Menu>
                  </div>
               </Button>
            </Tooltip>
         </Box>
      </>
  )
}

export default SideDrawer