import axios from 'axios'

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params : {
        key : "AIzaSyA0QjxLiGFMu8PKKnd81KTkhJMn2ni0Ex8",
    },
})

export default request