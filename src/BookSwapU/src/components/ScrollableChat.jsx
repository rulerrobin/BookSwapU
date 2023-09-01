import React from 'react'
import ScrollableFeed from 'react-scrollable-feed'
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from './ChatLogic'
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
                        marginRight={1}
                        size="sm"
                        cursor="pointer"
                        name={m.sender.username}
                     />
                  </Tooltip>
               )}

               <span
                  style={{
                     backgroundColor: `${
                        m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                     }`,
                     borderRadius: "20px",
                     padding:"5px 15px",
                     maxWidth: "75%",
                     marginLeft: isSameSenderMargin(messages, m, i, user._id),
                     margintTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                  }}
               >
                  {m.content}
               </span>
         </div>
      ))}
    </ScrollableFeed>
  )
}

export default ScrollableChat