import axios from 'axios'

const axiosClient = axios.create({
    baseURL : 'https://dummyjson.com',
    timeout : 3000,
})

export default axiosClient;