import axios from 'axios'

// Create a new axios instance with a predefined baseURL
const instance = axios.create({
  baseURL: 'http://localhost:3000' 
})

// Add a request interceptor to the axios instance
instance.interceptors.request.use(

  // This function gets executed before each request is sent
  (config) => {
    // Retrieve the user's token from local storage
    const token = JSON.parse(localStorage.getItem('userInfo')).token

    // Add token to the request headers as an Authorization header
    config.headers['Authorization'] = `Bearer ${token}`

    // Return the modified config object to let the request continue
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance