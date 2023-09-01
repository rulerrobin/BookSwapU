import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx'
// import './index.css'

import { ChakraProvider } from '@chakra-ui/react'
import ChatProvider from './Context/ChatProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ChakraProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ChakraProvider>
  </BrowserRouter>
)
