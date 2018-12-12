
import fetchApi from './fetch';
import requestModelConfig from './api.config';
/**
 * 首页数据请求函数
 * @param null 
 */
const IndexBasic = (params) => {
    return fetchApi.axiosFetchApi(requestModelConfig.Index.basicInfoUrl,'get',params);
}

export default { IndexBasic }
