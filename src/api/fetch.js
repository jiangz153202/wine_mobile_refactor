import $axios from '../utils/axios-reset';
import constant from '../utils/constant';

//封装fetch函数
export function fecth(url,method = 'post',params){
    //console.log('当前的参数',params);
    return new Promise((resolve,reject) => {
        $axios({
            url:url,
            method:method,
            data:params
        })
        .then(response => {
            console.log('api-ok')
            resolve(response.data);
        })
        .catch((error)=>{
            console.log('api-error');
            reject(constant.RESULT.NO_DATA);
        })
    })
}

export default{
    axiosFetchApi(url,method,params){
        return fecth(url,method,params);
    }
}
