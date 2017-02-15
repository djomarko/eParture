import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const mutations = {
    initData(state, payload) {
        state.data = payload;
    } 
};

export const store = new Vuex.Store({
    state: {
        data: {}
    }, 
    mutations
});