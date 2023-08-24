import { Container, Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Login from '../components/Authentication/Login'
import Register from '../components/Authentication/Register'

const LoginRegister = () => {
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
      <Box
      bg="white"
      w="100%"
      p={4}
      borderRadius="lg"
      borderWidth="1px"
      color="black"
      >
      <Tabs variant='soft-rounded'>
         <TabList mb='1em'>
            <Tab width ='50%'>Login</Tab>
            <Tab width ='50%'>Register</Tab>
         </TabList>
         <TabPanels>
            <TabPanel>
            <Login />
         </TabPanel>
         <TabPanel>
            <Register />
         </TabPanel>
         </TabPanels>
    </Tabs>
    </Box>
   </Container>
  )
}

export default LoginRegister