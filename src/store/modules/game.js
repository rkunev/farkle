import scoreService from 'services/scoreService';

const state = {
    game: {
        timestamp: 1485634083977,
        players: [
            {
                id: "xc3ocpLFcPPw9N7GeuZ6x4iLdaj1",
                type: "human",
                name: "Rosen Kunev",
                scoresheet: [
                    { id: "1pXBEDWdO3tjnhKepeUN5aO2E2lU", current: 0, next: null },
                ]
            },
            {
                id: "UN5aO2E2lUDCV0dzY9jYy5S1EM2a",
                type: "robot",
                name: "Disco Robot",
                scoresheet: [
                    { id: "1pXBEDWdO3tjnhKepeUN5aO2E2lU", current: 0, next: null },
                ]
            },
        ],

        // 1st: active player; 2nd: next player; change active player by moving first el to last position
        turns: ["xc3ocpLFcPPw9N7GeuZ6x4iLdaj1", "UN5aO2E2lUDCV0dzY9jYy5S1EM2a"],
        dice: [
            { id: 1, value: 1, isSaved: true, isSelected: false },
            { id: 2, value: 1, isSaved: true, isSelected: false },
            { id: 3, value: 1, isSaved: true, isSelected: false },
            { id: 4, value: 1, isSaved: true, isSelected: false },
            { id: 5, value: 1, isSaved: true, isSelected: false },
            { id: 6, value: 1, isSaved: true, isSelected: false },
        ],
    }
};

export const mutations = {
    // dice
    ROLL_ALL_DICE(state) {
        state.game.dice.forEach(die => {
            die.value = (Math.random() * 5 | 0) + 1;
            die.isSaved = false;
            die.isSelected = false;
        });
    },
    ROLL_FREE_DICE(state, freeDice) {
        freeDice.forEach(die => {
            die.value = (Math.random() * 5 | 0) + 1;
            die.isSelected = false;
        });
    },
    LOCK_ALL_DICE(state) {
        state.game.dice.forEach(die => {
            die.isSaved = true;
        });
    },
    UNLOCK_DICE(state, dice) { dice.forEach(die => die.isSaved = false) },
    SAVE_SELECTED_DICE(state, dice) { dice.forEach(die => die.isSaved = true) },
    UPDATE_DIE_VALUE(state, { index, value }) { state.game.dice[index].value = value },
    UPDATE_DIE_SELECTED(state, { index, isSelected }) { state.game.dice[index].isSelected = isSelected },
    TOGGLE_DIE_SELECTED(state, i) { state.game.dice[i].isSelected = !state.game.dice[i].isSelected },
    UPDATE_DIE_SAVED(state, { index, isSaved }) { state.game.dice[index].isSaved = isSaved },

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
        commit('TOGGLE_DIE_SELECTED', state.game.dice.findIndex(d => d.id === id));
    },
    rollFreeDice: ({ commit, getters }) => commit('ROLL_FREE_DICE', getters.unSavedDice),
    rollAllDice: ({ commit }) => commit('ROLL_ALL_DICE'),
    lockAllDice: ({ commit }) => commit('LOCK_ALL_DICE'),
    saveSelectedDice: ({ commit, getters }) => {
        commit('SAVE_SELECTED_DICE', getters.unSavedDice.filter(d => d.isSelected))
    },
    saveAllDice: ({ commit, getters }) => {
        commit('SAVE_SELECTED_DICE', getters.dice);
    },
    unlockUnselectedDice: ({ commit, getters }) => {
        commit('UNLOCK_DICE', getters.unSelectedDice);
    },

    // player
    changeTurn: ({ commit }, playerId) => commit('UPDATE_TURN'),
    addPoints: ({ commit }, { playerId, points }) => {
        const index = state.game.players.findIndex(p => p.id === playerId);

        commit('ADD_SCORE', { index, points });
    },
};

const getters = {
    // dice
    dice: state => state.game.dice,
    diceByRows: state => [state.game.dice.slice(0, 3), state.game.dice.slice(3)],
    unSavedDice: state => state.game.dice.filter(d => !d.isSaved),
    unSelectedDice: state => state.game.dice.filter(d => !d.isSelected),
    selectedDice: state => state.game.dice.filter(d => d.isSelected),
    selectedDicePoints: (state, getters) => {
        const availableDice = getters.unSavedDice
            .filter(d => d.isSelected)
            .map(d => d.value);

        return scoreService.getBestScore(availableDice);
    },
    rolledDicePoints(state, getters) {
        const dice = getters.unSavedDice.map(d => d.value);

        return scoreService.getBestScore(dice);
    },

    // player
    playerInTurn: (state, getters) => {
        const player = state.game.players.find(p => p.id === state.game.turns[0]);
        const points = getters.playerPoints(player.id);

        return Object.assign({ points }, player);
    },
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
    lastSavedScore: (state, getters) => {
        const scoresheets = getters.scoresheetByPlayerId(state.game.turns[state.game.turns.length - 1]);

        return scoresheets.length > 1
            ? scoresheets[scoresheets.length - 2].next
            : 0;
    },
    playerHasZilched: (state, getters) => playerId => {
        const lastThreeScores = getters.scoresheetByPlayerId(playerId)
            .map(s => s.next)
            .slice(-4);

        if (lastThreeScores.length < 4) {
            return false;
        }

        return lastThreeScores.some(e => e !== 0);
    },
    isLastRound: state => {
        return state.game.players
            .map(p => {
                return {
                    name: p.name,
                    turns: p.scoresheet.length,
                    points: p.scoresheet[p.scoresheet.length - 1].current
                };
            })
            .some(p => p.points >= 10000)
    }
};

export default {
    state, mutations, actions, getters
}
