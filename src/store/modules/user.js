const state = {
    user: {
        displayName: '',
        email: '',
    }
};

export const mutations = {
    UPDATE_USER_NAME(state, name) {
        state.user.displayName = name;
    },
    UPDATE_USER_EMAIL(state, email) {
        state.user.email = email;
    },
    UPDATE_USER(state, user) {
        state.user = user;
    },
};

export const actions = {
    updateUserName: ({ commit }, name) => commit('UPDATE_USER_NAME', name),
    updateUserEmail: ({ commit }, email) => commit('UPDATE_USER_EMAIL', email),
    updateUser: ({ commit }, user) => {
        commit('UPDATE_USER_EMAIL', user.email);
        commit('UPDATE_USER_NAME', user.displayName);
    },
};

const getters = {
    userName: state => state.user.displayName,
    userEmail: state => state.user.email,
    user: state => state.user,
}

export default {
    state, mutations, actions, getters
}
