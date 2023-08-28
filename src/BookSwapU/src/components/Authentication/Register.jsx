import React, { useState } from 'react'
import { useHistory } from "react-router"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { useToast } from "@chakra-ui/toast"
import axios from 'axios'

const Register = () => {
   // State variables
   const [show, setShow] = useState(false)
   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const [confirmPassword, setConfirmPassword] = useState()
   // const [pic, setPic] = useState()
   const [loading, setLoading] = useState(false)
   const history = useHistory()
   const toast = useToast()

   // Toggle password visibility
   const handleClick = () => setShow(!show)

   // Profile Pic Code if there is time will add as currently not working



   // const postDetails = (pics) => {
   //    setLoading(true)
   //    if(pics===undefined) {
   //       toast({
   //          title: 'Please Select an Image!',
   //          status: 'warning',
   //          duration: 5000,
   //          isClosable: true,
   //          position: "bottom",
   //        })
   //        // If Pic is undefined do not move forward
   //        return;
   //      }

   //       if(pics.type==="image/jpeg" || pics.type==="image/png") {
   //          const data = new FormData()
   //          data.append("file", pic)
   //          data.append("upload_preset", "BookSwapU")
   //          data.append("cloud_name", "dqrctbamt")
   //          fetch("https://api.cloudinary.com/v1_1/dqrctbamt/image/upload",  {
   //             method:'post',
   //             body: data,
   //       }).then((res) => res.json())
   //          .then((response) => {
   //             setPic(response.signature.toString())
   //             console.log(response)
   //             setLoading(false)
   //       })
   //       .catch((err) => {
   //          console.log(err)
   //          setLoading(false)
   //      })
   //       } else {
   //          toast({
   //             title: 'Please Select an Image!',
   //             status: 'warning',
   //             duration: 5000,
   //             isClosable: true,
   //             position: "bottom",
   //       })
   //       setLoading(false)
   //       return
   //    }
   // }

   // Submit handler (to be implemented)
   const submitHandler = async () => {
      // Implement registration logic here
      setLoading(true)
      if (!name || !email || !password || !!confirmPassword) {
         toast({
            title: "Please fill all the fields",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom"
         })
         setLoading(false)
         return
      }

         if (password !== confirmPassword) {
            toast({
               title: "Passwords do not match",
               status: "warning",
               duration: 5000,
               isClosable: true,
               position: "bottom"
            })
            return
         }
         console.log(name, email, password)

         try {
            const config = {
               headers: {
                  "Content-Type": "application/json"
               }
            }

            const { data } = await axios.post('/api/user', { name, email, password },
            config
            )
            toast({
               title: "Registration successful",
               status: "success",
               duration: 5000,
               isClosable: true,
               position: "bottom"
            })

            localStorage.setItem('userInfo', JSON.stringify(data))

            setLoading(false)
            history.push('/')
         } catch (error) {
            toast({
               title: "Error has occurred",
               description: error.response.data.message,
               status: "error",
               duration: 5000,
               isClosable: true,
               position: "bottom"
            })
            setLoading(false)
         }
   }

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
         <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
               {show ? 'Hide' : 'Show'}
            </Button>
         </InputRightElement>
         </InputGroup>
      </FormControl>

      {/* Profile pic to be added if time able */}

      {/* User profile pic input */}
      {/* <FormControl id='pic' isRequired>
         <FormLabel>Upload your picture</FormLabel>
         <Input 
            type='file'
            p={1.5}
            accept='image/*'
            onChange={(e) => postDetails(e.target.files[0])}
         />
      </FormControl> */}

      {/* Register button */}
      <Button 
      colorScheme='blue'
      width='100%'
      style={{ marginTop: 15}}
      onClick={submitHandler}
      isLoading={loading}
      >
         Register
      </Button>

   </VStack>
  )
}

export default Register