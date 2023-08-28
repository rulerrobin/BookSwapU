import React, { useState } from 'react'
import { Stack, HStack, VStack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/form-control'

const Login = () => {
   const [show, setShow] = useState(false)
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

   const handleClick = () => setShow(!show)

   const submitHandler = () => {}

  return (

   <VStack spacing='5px'>
      {/* User email input */}
      <FormControl id='email' isRequired>
         <FormLabel>Email</FormLabel>
         <Input 
            placeholder='Enter Your Email'
            onChange={(e) => setEmail(e.target.value)}
         />
      </FormControl>
      {/* User password input */}
      <FormControl id='password' isRequired>
         <FormLabel>Password</FormLabel>
         <InputGroup size="md">
         <Input 
            type={show?"text" : 'password'}
            placeholder='Enter Your Password'
            onChange={(e) => setPassword(e.target.value)}
         />
         <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
               {show ? 'Hide' : 'Show'}
            </Button>
         </InputRightElement>
         </InputGroup>
      </FormControl>

      <Button 
      colorScheme='blue'
      width='100%'
      style={{ marginTop: 15}}
      onClick={submitHandler}
      >
         Login
      </Button>

      {/* Guest login for testing purposes also possibly keep for users to look around, currently does not work will try to fix later */}
      {/* <Button 
      variant='solid'
      colorScheme='red'
      width='100%'
      onClick={() => {
         setEmail("guest@example.com")
         setPassword("123456")
         console.log(email, password)
      }}
      >
         Guest User
      </Button> */}

   </VStack>
  )
}

export default Login