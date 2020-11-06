import axios from 'axios'

const instance = axios.create({
    timeout:10000,
})

instance.interceptors.request.use((config)=>{
    return config
})

instance.interceptors.response.use(
    response => {
        // console.log(response)
        return response.data
    },
    error => {
        console.log("获取数据失败"+error)
        return new Promise(()=>{})
    }
)

export default instance