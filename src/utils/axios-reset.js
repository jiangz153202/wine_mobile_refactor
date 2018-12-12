import axios from 'axios'
import $store from '../store'

//拦截request 设置全局请求为ajax
axios.interceptors.request.use((config) => {
    config.withCredentials = true
    config.headers['Coent-Type'] = 'application/x-www-form-urlencoded';
    // console.log('是否为登录的',$store.state.isLogin);
    // if ($store.state.isLogin) {
    //     //如果登录 就传入头部
    //     config.headers['Authorization'] = sessionStorage.getItem('jk-access-token');
    // }
    //console.log('2发起请求', config);
   
    return config
})



axios.install = (Vue) => {
    Vue.prototype.$axios = axios
}

export default axios;