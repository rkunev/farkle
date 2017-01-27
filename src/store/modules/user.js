const state = {
    user: {
        id: '',
        displayName: '',
        email: '',
    }
};

export const mutations = {
    UPDATE_USER_ID(state, id) {
        state.user.id = id;
    },
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
    updateUserId: ({ commit }, id) => commit('UPDATE_USER_ID', id),
    updateUser: ({ commit }, user) => {
        commit('UPDATE_USER_EMAIL', user.email);
        commit('UPDATE_USER_NAME', user.displayName);
        commit('UPDATE_USER_ID', user.uid);
    },
};

const getters = {
    userName: state => state.user.displayName,
    userEmail: state => state.user.email,
    userId: state => state.user.id,
    user: state => state.user,
}

export default {
    state, mutations, actions, getters
}
