import axios from 'axios'
import { baseURL, timeout } from "./setting";

const instance = axios.create({
  baseURL,
  timeout
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(res => {
  return res.data
}, console.log)

export default instance
