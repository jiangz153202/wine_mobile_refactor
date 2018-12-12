import Vue from 'vue'
import Vuex from 'vuex'

import contextBasic from './modules/IndexBasic';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    state:{
        userinfo:{ age : 'xxx'}
    },
    actions:{},
    mutations:{},
    modules:{
        contextBasic
    },
    strict:debug,
    plugins:[]
})