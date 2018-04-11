import {getPunchInfo} from 'api/start';

// initial state
const state = {
    count: 0
};

// getters
const getters = {
    count: state => state.count
};

// mutations
const mutations = {

};

// actions
const actions = {
    GetPunchInfo ({commit}, params) {
        return new Promise((resolve, reject) => {
            getPunchInfo(params).then(res => {
                resolve(res);
            });
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
