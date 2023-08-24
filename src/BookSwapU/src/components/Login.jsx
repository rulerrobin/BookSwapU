import { Container, Box, Text, } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
   <Container maxW='xl' centerContent>
      <Box  
        d='flex'
        justifyContent='center'
        p={3}
        bg={'white'}
        width="100%"
        m="40px 0 15px 0"
        borderRadius='lg'
        borderWidth='1px'
      >   
         <Text 
         fontSize='4xl'
         color='black'
         >BookSwapU</Text>
      </Box>
      <Box> 
      </Box>
   </Container>
  )
}

export default Login