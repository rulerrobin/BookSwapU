import { Container, Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Login from '../components/Authentication/Login'
import Register from '../components/Authentication/Register'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
   const navigate = useNavigate()

   useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))

      // If userInfo missing redirect user to login page
      if(userInfo) {
         navigate('/search')
      }
   }, [navigate])


  return (
   <Container maxW='xl' centerContent>
      <Box  
        display='flex'
        justifyContent='center'
        padding={3}
        background={'white'}
        width="100%"
        margin="40px 0 15px 0"
        borderRadius='lg'
        borderWidth='1px'
      >   
         <Text 
         fontSize='4xl'
         color='black'
         >BookSwapU</Text>
      </Box>
      <Box
      background="white"
      width="100%"
      padding={4}
      borderRadius="lg"
      borderWidth="1px"
      color="black"
      >
      <Tabs variant='soft-rounded'>
         <TabList marginbottom='1em'>
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