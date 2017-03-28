import {
    getPrimitives,
    getStraight,
    getThreePairs,
    getRepeatedPrimitives,
    getFullHouse
} from 'services/scoreService';

export const getCombos = dice => {
    const combos = [getPrimitives, getStraight, getThreePairs, getRepeatedPrimitives, getFullHouse];

    return combos
        .map(c => c(dice))
        .filter(r => r > 0)
        .sort(orderByDesc);
};

export const orderByDesc = (a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;

    return 0;
}

export default {
    getCombos
}

// Primitives only:
// [1, 2, 3, 1, 5, 6] -> [250, 200, 150, 100, 50]
// * Remove dice which are not 1 or 5. Dice are now [1, 1, 5]
// * Get best result and add it to the array [250]. Break if the dice.length === 1
// * Remove the die with the lowest value (could be 5 or 1). Dice are now [1, 1]
// * Get best result and add it to the array [250, 200]
// * Remove the die with the lowest value. Dice are now [1]
// * Get best result and add it to the array [250, 200, 100]
