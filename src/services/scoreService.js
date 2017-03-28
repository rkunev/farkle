import uniq from 'lodash/uniq';
import countBy from 'lodash/countBy';
import findKey from 'lodash/findKey';
import toPairs from 'lodash/toPairs';

const primitives = {
   1: { 1: 0, 2: 0, 3: 1000, 4: 2000, 5: 4000, 6: 8000 },
   2: { 1: 0, 2: 0, 3: 200, 4: 400, 5: 800, 6: 1600 },
   3: { 1: 0, 2: 0, 3: 300, 4: 600, 5: 1200, 6: 2400 },
   4: { 1: 0, 2: 0, 3: 400, 4: 800, 5: 1600, 6: 3200 },
   5: { 1: 0, 2: 0, 3: 500, 4: 1000, 5: 2000, 6: 4000 },
   6: { 1: 0, 2: 0, 3: 600, 4: 1200, 5: 2400, 6: 4800 },
}

export const getPrimitives = dice => {
    return dice
        .filter(d => d === 5 || d === 1)
        .map(d => d === 5 ? d * 10 : d * 100)
        .reduce((acc, next) => acc + next, 0);
};

export const getStraight = dice => dice.length === 6 ? uniq(dice).length === 6 ? 1500 : 0 : 0;

export const getThreePairs = dice => {
    if (dice.length < 6) return 0;

    const sorted = dice.slice().sort();
    const groupA = sorted.slice(0, 2);
    const groupB = sorted.slice(2, 4);
    const groupC = sorted.slice(4, 6);

    return (groupA[0] == groupA[1] && groupB[0] == groupB[1] && groupC[0] == groupC[1])
        ? 1500
        : 0;
};

export const getRepeatedPrimitives = dice => {
    if (dice.length < 3) return 0;

    const counted = countBy(dice);
    const mapped = Object.keys(counted).map(die => primitives[die][counted[die]]);

    return Math.max(...mapped);
};

export const getFullHouse = dice => {
    if (dice.length < 5) return 0;

    const counted = countBy(dice);
    const keys = Object.keys(counted);
    const values = Object.values(counted);
    const hasPair = values.includes(2);
    const hasThreeOfAKind = values.includes(3);
    const hasFourOfAKind = values.includes(4);

    let result = 0;

        if (keys.length === 2 && hasThreeOfAKind) {
            // [1, 1, 1, 2, 2, 2]
            result = getRepeatedPrimitives(dice) + 250;
        } else if (hasPair && (hasThreeOfAKind || hasFourOfAKind)) {
            // [1, 1, 1, 2, 2, 3]
            // [1, 1, 1, 1, 2, 2]
            const repeatedDie = findKey(counted, v => v > 2);
            result = primitives[repeatedDie][counted[repeatedDie]] + 250;
        }


    return result;
};

export const getLuckyRoll = dice => {
    if (dice.length < 6) return 0;

    return (!getPrimitives(dice)         &&
            !getStraight(dice)           &&
            !getThreePairs(dice)         &&
            !getRepeatedPrimitives(dice) &&
            !getFullHouse(dice))
        ? 500
        : 0;
};

export const getMixed = dice => {
    if (dice.length < 3) return getPrimitives(dice);

    const counted = countBy(dice);
    const pairs = toPairs(counted);

    // @todo maybe move to a separate fn
    const bestRepeated = pairs
        .filter(([, repetition]) => repetition > 2)
        .map(([die, repetition]) => [die, primitives[die][repetition]])
        .reduce((current, next) => {
            if (!current) return next;

            return current[1] > next[1] ? current : next;
        }, null);

    if (!bestRepeated) return getPrimitives(dice);

    const repeatedDie = +bestRepeated[0];
    const plucked = dice.filter(d => d !== repeatedDie);
    const repeatedDice = Array(dice.length - plucked.length).fill(repeatedDie);

    return getRepeatedPrimitives(repeatedDice) +
        Math.max(getRepeatedPrimitives(plucked), getPrimitives(plucked));
};

export const getAllUniqueCombos = dice => {
    const combos = [];
    const setCount = 1 << dice.length; // There are 2^N unique combinations

    // starting from 0 will add an empty array to the combos
    for (let mask = 1; mask < setCount; mask++) {
        let combo = [];

        for (let j = 0; j < dice.length; j++) {
            let pos = 1 << j;

            if ((mask & pos) == pos) {
                combo.push(dice[j]);
            }
        }

        combos.push(combo);
    }

    return combos;
};

export const getBestScore = dice => {
    const allScores = [
        getPrimitives(dice),
        getStraight(dice),
        getThreePairs(dice),
        getRepeatedPrimitives(dice),
        getFullHouse(dice),
        getLuckyRoll(dice),
        ...getAllUniqueCombos(dice).map(getMixed)
    ];

    return Math.max(...allScores);
}

export default {
    getPrimitives, getStraight,
    getThreePairs, getRepeatedPrimitives,
    getFullHouse, getLuckyRoll,
    getMixed, getAllUniqueCombos,
    getBestScore
}
