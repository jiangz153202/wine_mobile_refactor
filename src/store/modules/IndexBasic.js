
import api from '../../api/indexBasic';
import * as types from '../../utils/type';

const state = {
    IndexBasicData : []
}

const getters = {
}

const actions = {
    async getIndexBasicData({commit}){
        await api.IndexBasic()
        .then(res => {
            commit(types.GET_INDEX_DATA,res.data);
        })
        .catch(err => {
            commit(types.GET_INDEX_DATA,err);
        })
    }
}

const mutations = {
    [types.GET_INDEX_DATA](state,res){
        state.IndexBasicData = res;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}



