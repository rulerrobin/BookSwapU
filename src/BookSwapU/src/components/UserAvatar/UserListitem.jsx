import { Avatar } from "@chakra-ui/avatar"
import { Box, Text } from "@chakra-ui/layout"
import React from "react"


const UserListItem = ({ user, handleFunction }) => {
  return (
    // Container for each user item
    <Box
      onClick={handleFunction}
      cursor="pointer"
      background="#e6e6e6"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      width="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      marginBottom={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.username}
      />
      <Box>
        <Text>{user.username}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  )
}

export default UserListItem