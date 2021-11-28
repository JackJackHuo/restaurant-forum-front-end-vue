import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'
const axiosInstance = axios.create({
  baseURL
})
// axios每一筆向後端的request幾乎都要在第三的參數config中帶入token驗證，但是透過axios interceptors可以在每一筆request或response之前預先帶入想設定的config
axiosInstance.interceptors.request.use( 
  config => {
    const token = localStorage.getItem('token')
    if(token){
      // 原本api request的config要加入 headers: { Authorization: 'Bearer <token>' }
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  }, 
  err => Promise.all(err))
export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})