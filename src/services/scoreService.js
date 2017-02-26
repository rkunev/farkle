import uniq from 'lodash/uniq';
import countBy from 'lodash/countBy';
import findKey from 'lodash/findKey';

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
    const primitives = {
        1: 1000,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
    };
    const counted = countBy(dice);

    const mapped = Object.keys(counted).map(die => {
        const repetitionCount = counted[die];
        const basePoints = primitives[die];
        let value = 0;

        if (repetitionCount === 3) {
            value = basePoints;
        } else if (repetitionCount === 4) {
            value = basePoints * 2;
        } else if (repetitionCount === 5) {
            value = (basePoints * 2) * 2;
        } else if (repetitionCount === 6) {
            value = ((basePoints * 2) * 2) * 2;
        }

        return value;
    });

    return Math.max(...mapped);
};



// We have full house if the hash has only 2 entries or if 3 entries && hash.values include(3)
// 1, 1, 2, 2, 3, 3
// rolledScore = scoreService.calculate([1, 1, 1, 2, 2, 3]); // 1000 + 250 = 1250
export const getFullHouse = dice => {
    const primitives = {
        1: 1000,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
    };
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

export default {
    getPrimitives, getStraight, getThreePairs, getRepeatedPrimitives, getFullHouse
}
