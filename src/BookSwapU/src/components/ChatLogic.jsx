
export const getSender =(loggedUser, users) => {
   // console.log("users in array for getSender", users)
   return users[0]._id === loggedUser?._id ? users[1].username : users[0].username
   
}

export default getSender