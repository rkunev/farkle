const state = {
    dice: [
        { id: 1, value: 1, checked: false },
        { id: 2, value: 2, checked: false },
        { id: 3, value: 3, checked: false },
        { id: 4, value: 4, checked: false },
        { id: 5, value: 5, checked: false },
        { id: 6, value: 6, checked: false },
    ]
};

export const mutations = {
    UPDATE_DIE_VALUE(state, index, value) {
        state.dice[index].value = value;
    },
    UPDATE_DIE_CHECKED(state, index, checked) {
        state.dice[index].checked = checked;
    },
    TOGGLE_DIE_CHECKED(state, index) {
        state.dice[index].checked = !state.dice[index].checked;
    },
};

export const actions = {
    toggleDie: ({ commit }, id) => {
        const index = state.dice.findIndex(d => d.id === id);

        commit('TOGGLE_DIE_CHECKED', index);
    },
    updateDie: ({ commit }, die) => {
        const index = state.dice.findIndex(d => d.id === die.id);

        commit('UPDATE_DIE_VALUE', index, die.value);
        commit('UPDATE_DIE_CHECKED', index, die.checked);
    },
};

const getters = {
    dice: state => state.dice,
    diceByRows: state => [state.dice.slice(0, 3), state.dice.slice(3)]
};

export default {
    state, mutations, actions, getters
}
