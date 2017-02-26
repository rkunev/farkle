// export const getCombos = dice => {
//     let result = [50];

//     return result;
// };

// export const get50s = dice => {
//     return dice
//         .filter(d => d === 5)
//         .map((d, i) => (d * 10) * (i + 1))
// };

// export const get100s = dice => {
//     return dice
//         .filter(d => d === 1)
//         .map((d, i) => (d * 100) * (i + 1))
// };

// export const get50sAnd100s = dice => {
//     // comboService.getCombos([1, 2, 3, 3, 5, 6]); // [150, 100, 50]
//     // -> [1, 5] // [150, 100, 50]
//     // comboService.getCombos([1, 1, 5]); // [250, 200, 150, 100, 50]

//     return dice
//         .filter(d => d === 1 || d === 5)
//         .map((d, i) => {
//             // if (d) {}
//         })
//     // return [...get50s(dice), ...get100s(dice)];
// }

// export default {
//     getCombos, get50s, get100s, get50sAnd100s
// }
