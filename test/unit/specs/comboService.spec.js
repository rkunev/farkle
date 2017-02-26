// import comboService from 'services/comboService';

// describe('comboService', () => {
//     // describe('getCombos:', () => {
//     //     it('should return an array', () => {
//     //         const dice = [5, 2, 3, 4, 4, 6];

//     //         expect(comboService.getCombos(dice)).to.be.an('array');
//     //     });
//     // });

//     describe('get50s:', () => {
//         it('should include only 50 points', () => {
//             const dice = [5, 2, 3, 4, 4, 6];
//             const result = comboService.get50s(dice);

//             expect(result).to.eql([50]);
//         });

//         it('should have only 100 and 50 points', () => {
//             const dice = [5, 5, 3, 4, 4, 6];
//             const result = comboService.get50s(dice);

//             expect(result).to.eql([50, 100]);
//         });
//     });

//     describe('get100s:', () => {
//         it('should have only 100 points', () => {
//             const dice = [1, 2, 3, 4, 4, 6];
//             const result = comboService.get100s(dice);

//             expect(result).to.eql([100]);
//         });

//         it('should have only 200 and 100 points', () => {
//             const dice = [1, 1, 3, 4, 4, 6];
//             const result = comboService.get100s(dice);

//             expect(result).to.eql([100, 200]);
//         });
//     });

//     describe('get50sAnd100s:', () => {
//         it('should have only 150, 100 and 50 points', () => {
//             const dice = [1, 2, 3, 3, 5, 6];
//             const result = comboService.get50sAnd100s(dice);

//             expect(result).to.eql([50, 100, 150]);
//         });
//     });
// });

// // Test cases: scoreService calls comboService to get an array of all combos in DESC order (highest -> lowest)
// // comboService.getCombos([5, 2, 3, 4, 4, 6]); // [50]
// // comboService.getCombos([1, 2, 3, 4, 4, 6]); // [100]
// // comboService.getCombos([1, 2, 3, 3, 5, 6]); // [150, 100, 50]
// // comboService.getCombos([1, 2, 3, 4, 5, 6]); // [1500, 150, 100, 50]
// // comboService.getCombos([1, 1, 2, 2, 3, 3]); // [1500, 200, 100]
// // comboService.getCombos([1, 1, 1, 2, 2, 3]); // [1250, 1000, 200, 100]
// // comboService.getCombos([1, 1, 1, 1, 2, 2]); // [2000, 1250, 1000, 200, 100]
// // comboService.getCombos([2, 2, 3, 4, 6, 6]); // [500]
// // comboService.getCombos([3, 3, 3]);          // [300]
// // comboService.getCombos([3, 3, 3, 3]);       // [600, 300]
// // comboService.getCombos([3, 3, 3, 1]);       // [700, 600, 300, 100]
// // comboService.getCombos([3, 3, 3, 3, 3]);    // [1200, 600, 300]
// // comboService.getCombos([3, 3, 3, 3, 3, 3]); // [2400, 1200, 600, 300]
