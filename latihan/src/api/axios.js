import axios from 'axios'

const instance =  axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/"
})

const token = localStorage.getItem("access_token")

instance.interceptors.request.use(
    (config) => {
        if(token){
            config.headers["Authorization"] = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance

