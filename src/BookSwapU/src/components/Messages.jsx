import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ChatState } from '../Context/ChatProvider'
import SideDrawer from './SideDrawer'
import MyChats from './MyChats'
import ChatBox from './ChatBox'
import { Box } from '@chakra-ui/react'


const Messages = () => {
  const { user } = ChatState()
  const [fetchAgain, setfetchAgain] = useState()

  return (
    <div style ={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent='space-between'
        width='100%'
        height='91.5vh'
        padding='10px'
      >
        { user && (<MyChats fetchAgain={fetchAgain} />
        )}
        { user && (<ChatBox fetchAgain={fetchAgain} setfetchAgain={setfetchAgain} />
        )}
      </Box>
    </div>
  )
}

export default Messages