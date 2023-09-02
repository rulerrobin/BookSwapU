import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

// Used to render loading for sidedrawer
const ChatLoading = () => {
  return (
   <>
      <Stack>
         <Skeleton height='20px' />
         <Skeleton height='20px' />
         <Skeleton height='20px' />
         <Skeleton height='20px' />
         <Skeleton height='20px' />
         <Skeleton height='20px' />
         <Skeleton height='20px' />
         <Skeleton height='20px' />
         <Skeleton height='20px' />
         <Skeleton height='20px' />
         <Skeleton height='20px' />
         <Skeleton height='20px' />
      </Stack>
    </>
  )
}

export default ChatLoading