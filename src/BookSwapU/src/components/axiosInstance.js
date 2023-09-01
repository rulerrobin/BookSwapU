import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000' 
})

// Request interceptor to add authorization header
instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('userInfo')).token
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance