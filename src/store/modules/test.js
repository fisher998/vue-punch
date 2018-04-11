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
    increment (state) {
        state.count++;
    },
    decrement (state) {
        state.count--;
    }
};

// actions
const actions = {
    increment ({commit}) {
        commit('increment');
    },
    decrement ({commit}) {
        commit('decrement');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
