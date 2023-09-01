import React from 'react'
import ScrollableFeed from 'react-scrollable-feed'
import { isLastMessage, isSameSender } from './ChatLogic'
import { ChatState } from '../Context/ChatProvider'
import { Avatar, Tooltip } from '@chakra-ui/react'

const ScrollableChat = ({ messages }) => {

   const { user } = ChatState()

  return (
    <ScrollableFeed>
      {messages && messages.map((m, i) => (
         <div style={{ display: "flex " }} key={m._id}>
            {(isSameSender(messages,m,i,user._id)
               || isLastMessage(messages,i,user._id)) && (
                  <Tooltip
                     label={m.sender.username}
                     placement="bottom-start"
                     hasArrow
                  >
                     <Avatar 
                        marginTop="7px"
                     />
                  </Tooltip>
               )
            }
         </div>
      ))}
    </ScrollableFeed>
  )
}

export default ScrollableChat