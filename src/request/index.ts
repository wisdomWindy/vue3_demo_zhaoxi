import axios from 'axios'

let instance = axios.create({
    baseURL:"",
});

instance.interceptors.request.use(function (config:any):any {
    return config;
});

instance.interceptors.response.use(function(response){
    let data = response.data;
    return data;
});
export default instance;