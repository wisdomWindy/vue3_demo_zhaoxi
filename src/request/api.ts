import axios from './index'
const api = {
    
}
export default {
    install:function(app:any){
        app.config.globalProperties.$api = api;
    }
}