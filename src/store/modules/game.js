const state = {
    game: {
        timestamp: 1485634083977,
        players: [
            {
                id: "xc3ocpLFcPPw9N7GeuZ6x4iLdaj1",
                type: "human",
                name: "Rosen Kunev",
                scoresheet: [
                    { id: "1pXBEDWdO3tjnhKepeUN5aO2E2lU", current: 100, next: 500 },
                    { id: "3Ok4dcLFW62L6TadJOAVKi0Dk4BS", current: 600, next: null },
                ]
            },
            {
                id: "UN5aO2E2lUDCV0dzY9jYy5S1EM2a",
                type: "robot",
                name: "Disco Robot",
                scoresheet: [
                    { id: "1pXBEDWdO3tjnhKepeUN5aO2E2lU", current: 500, next: 0 },
                    { id: "3Ok4dcLFW62L6TadJOAVKi0Dk4BS", current: 500, next: null },
                ]
            },
        ],

        // 1st: active player; 2nd: next player; change active player by moving first el to last position
        turns: ["xc3ocpLFcPPw9N7GeuZ6x4iLdaj1", "UN5aO2E2lUDCV0dzY9jYy5S1EM2a"],
        dice: [
            { id: 1, value: 1, checked: false },
            { id: 2, value: 2, checked: false },
            { id: 3, value: 3, checked: false },
            { id: 4, value: 4, checked: false },
            { id: 5, value: 5, checked: false },
            { id: 6, value: 6, checked: false },
        ],
    }
};

export const mutations = {
    // dice
    UPDATE_DIE_VALUE(state, { index, value }) {
        state.game.dice[index].value = value;
    },
    UPDATE_DIE_CHECKED(state, { index, checked }) {
        state.game.dice[index].checked = checked;
    },
    TOGGLE_DIE_CHECKED(state, index) {
        state.game.dice[index].checked = !state.game.dice[index].checked;
    },

    // turn
    UPDATE_TURN(state) {
        const last = state.game.turns.shift();

        state.game.turns.push(last);
    },

    // scoresheet
    ADD_SCORE(state, { index, points }) {
        const lastScore = state.game.players[index].scoresheet[state.game.players[index].scoresheet.length - 1];

        lastScore.next = points;

        // @todo generate uid
        state.game.players[index].scoresheet.push({
            id: '3Ok4dcLFW62L6TadJOAVKi0Dk4B1',
            current: lastScore.current + points,
            next: null
        });
    },
};

export const actions = {
    // dice
    toggleDie: ({ commit }, id) => {
        const index = state.game.dice.findIndex(d => d.id === id);

        commit('TOGGLE_DIE_CHECKED', index);
    },
    rollUncheckedDice: ({ commit }) => {
        state.game.dice.forEach(({ checked }, index) => {
            if (!checked) {
                commit('UPDATE_DIE_VALUE', {
                    index,
                    value: (Math.random() * 5 | 0) + 1
                });
            }
        });
    },
    resetDice: ({ commit }) => {
        state.game.dice.forEach((die, index) => {
            commit('UPDATE_DIE_VALUE', { index, value: index + 1 });
            commit('UPDATE_DIE_CHECKED', { index, checked: false });
        });
    },

    // turn
    changeTurn: ({ commit }, playerId) => { commit('UPDATE_TURN') },

    // scoresheet
    addPoints: ({ commit }, { playerId, points }) => {
        const index = state.game.players.findIndex(p => p.id === playerId);

        commit('ADD_SCORE', { index, points });
    },
};

const getters = {
    // dice
    dice: state => state.game.dice,
    diceByRows: state => [state.game.dice.slice(0, 3), state.game.dice.slice(3)],

    // turn
    playerInTurn: (state, getters) => {
        const player = state.game.players.find(p => p.id === state.game.turns[0]);
        const points = getters.playerPoints(player.id);

        return Object.assign({ points }, player);
    },

    // scoresheet
    scoresheets: state => {
        const scoresheets = new Map();

        state.game.players.forEach(p => scoresheets.set(p.id, p.scoresheet));

        return scoresheets;
    },
    scoresheetByPlayerId: (state, getters) => playerId => getters.scoresheets.get(playerId),
    playerPoints: (state, getters) => playerId => {
        const scoresheet = getters.scoresheetByPlayerId(playerId);

        return scoresheet[scoresheet.length - 1].current;
    },
};

export default {
    state, mutations, actions, getters
}
