import uniq from 'lodash/uniq';
import countBy from 'lodash/countBy';
import findKey from 'lodash/findKey';

const primitives = {
    1: 1000,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
};

export const getPrimitives = dice => {
    return dice
        .filter(d => d === 5 || d === 1)
        .map(d => d === 5 ? d * 10 : d * 100)
        .reduce((acc, next) => acc + next, 0);
};

export const getStraight = dice => uniq(dice).length == 6 ? 1500 : 0;

export const getThreePairs = dice => {
    const sorted = dice.slice().sort();
    const groupA = sorted.slice(0, 2);
    const groupB = sorted.slice(2, 4);
    const groupC = sorted.slice(4, 6);

    return (groupA[0] == groupA[1] && groupB[0] == groupB[1] && groupC[0] == groupC[1])
        ? 1500
        : 0;
};

export const getRepeatedPrimitives = dice => {
    const counted = countBy(dice);
    const multipliers = { 1: 0, 2: 0, 3: 1, 4: 2, 5: 4, 6: 8 };

    const mapped = Object.keys(counted).map(die => primitives[die] * multipliers[counted[die]]);

    return Math.max(...mapped);
};

export const getFullHouse = dice => {
    const counted = countBy(dice);
    const keys = Object.keys(counted);
    const values = Object.values(counted);
    const hasThreeOfAKind = values.includes(3);
    const hasFourOfAKind = values.includes(4);

    let result = 0;

    if (keys.length === 2 && hasThreeOfAKind) {
        // [1, 1, 1, 2, 2, 2]
        result = getRepeatedPrimitives(dice) + 250;
    } else if (hasThreeOfAKind || hasFourOfAKind) {
        // [1, 1, 1, 2, 2, 3]
        // [1, 1, 1, 1, 2, 2]
        const base = findKey(counted, v => v > 2);
        result = primitives[base] + 250;
    }

    return result;
};

export const getLuckyRoll = dice => {
    if (dice.length < 6) {
        return 0;
    }

    return (!getPrimitives(dice)         &&
            !getStraight(dice)           &&
            !getThreePairs(dice)         &&
            !getRepeatedPrimitives(dice) &&
            !getFullHouse(dice))
        ? 500
        : 0;
};

export default {
    getPrimitives, getStraight,
    getThreePairs, getRepeatedPrimitives,
    getFullHouse, getLuckyRoll,
}
