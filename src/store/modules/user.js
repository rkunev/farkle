const state = {
    user: {
        id: '',
        name: '',
        email: '',
        avatar: ''
    }
};

export const mutations = {
    UPDATE_USER_ID(state, id) {
        state.user.id = id;
    },
    UPDATE_USER_NAME(state, name) {
        state.user.name = name;
    },
    UPDATE_USER_EMAIL(state, email) {
        state.user.email = email;
    },
    UPDATE_USER_AVATAR(state, avatar) {
        state.user.avatar = avatar;
    },
    UPDATE_USER(state, user) {
        state.user = user;
    },
};

export const actions = {
    updateUser: ({ commit }, user) => {
        commit('UPDATE_USER_ID', user.uid);
        commit('UPDATE_USER_NAME', user.displayName);
        commit('UPDATE_USER_EMAIL', user.email);
        commit('UPDATE_USER_AVATAR', user.photoURL);
    },
};

const getters = {
    userId: state => state.user.id,
    userName: state => state.user.name,
    userEmail: state => state.user.email,
    userAvatar: state => state.user.avatar,
    user: state => state.user,
};

export default {
    state, mutations, actions, getters
}
