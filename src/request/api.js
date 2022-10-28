import axios from './index'
const api = {
    
}
export default function(app){
    app.config.globalProperties.$api = api;
}