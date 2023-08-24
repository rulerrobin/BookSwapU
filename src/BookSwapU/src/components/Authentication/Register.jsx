import React, { useState } from 'react'
import { Stack, HStack, VStack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/form-control'

const Register = () => {
   const [show, setShow] = useState(false)
   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const [confirmPassword, setConfirmPassword] = useState()
   const [pic, setPic] = useState()

   const handleClick = () => setShow(!show)

   const postDetails = (pics) => {}

   const submitHandler = () => {}

  return (

   <VStack spacing='5px'>
      {/* User name input */}
      <FormControl id='username' isRequired>
         <FormLabel>Name</FormLabel>
         <Input 
            placeholder='Enter Your Name'
            onChange={(e) => setName(e.target.value)}
         />
      </FormControl>
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
      {/* User password confirmation input */}
      <FormControl id='password' isRequired>
         <FormLabel>Confirm Password</FormLabel>
         <InputGroup size="md">
         <Input 
            type={show?"text" : 'password'}
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
         />
         <InputRightElement>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
               {show ? 'Hide' : 'Show'}
            </Button>
         </InputRightElement>
         </InputGroup>
      </FormControl>
      {/* User profile pic input */}
      <FormControl id='pic' isRequired>
         <FormLabel>Upload your picture</FormLabel>
         <Input 
            type='file'
            p={1.5}
            accept='image/*'
            onChange={(e) => postDetails(e.target.files[0])}
         />
      </FormControl>

      <Button 
      colorScheme='blue'
      width='100%'
      style={{ marginTop: 15}}
      onClick={submitHandler}
      >
         Register
      </Button>

   </VStack>
  )
}

export default Register