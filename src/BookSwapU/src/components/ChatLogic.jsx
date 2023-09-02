// Function to determine the sender's username
const getSender =(loggedUser, users) => {
   // console.log("users in array for getSender", users)
   return users[0]._id === loggedUser?._id ? users[1].username : users[0].username
   
}

// Function to check if the sender of a message is different from the next one
const isSameSender = (messages, m, i, userId) => {
   return (
      i < messages.length - 1 &&
      (messages[ i + 1 ].sender._id !== m.sender._id || 
         messages[ i + 1 ].sender._id === undefined) &&
         messages[i].sender._id !== userId
   )
}

// Function to check if a message is the last one from a different sender
const isLastMessage = (messages, i, userId) => {
   return (
      i === messages.length - 1 &&
      messages[messages.length - 1].sender._id !== userId &&
      messages[messages.length - 1].sender._id
   )
}

// Function to determine the margin for messages from the same sender
const isSameSenderMargin = (messages, m, i, userId) => {
 
   if (
     i < messages.length - 1 &&
     messages[i + 1].sender._id === m.sender._id &&
     messages[i].sender._id !== userId
   )
     return 33 // Set a specific margin when messages are from the same sender
   else if (
     (i < messages.length - 1 &&
       messages[i + 1].sender._id !== m.sender._id &&
       messages[i].sender._id !== userId) ||
     (i === messages.length - 1 && messages[i].sender._id !== userId)
   )
     return 0 // No margin when messages are from different senders or it's the last message
   else return "auto" // Use default margin value
 }
 
// Function to check if a message is from the same sender as the previous one
const isSameUser = (messages, m, i) => {
   return i > 0 && messages[i - 1].sender._id === m.sender._id
 }

export { getSender, isSameSender, isLastMessage, isSameSenderMargin, isSameUser }