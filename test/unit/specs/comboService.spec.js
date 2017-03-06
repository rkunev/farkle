// import { getCombos } from 'services/comboService';

// describe('getCombos', () => {
//     it('[5, 2, 3, 4, 4, 6] should get [50] points', () => {
//         const dice = [5, 2, 3, 4, 4, 6];
//         const expected = [50];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[1, 2, 3, 4, 4, 6] should get [100] points', () => {
//         const dice = [1, 2, 3, 4, 4, 6];
//         const expected = [100];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[1, 2, 3, 3, 5, 6] should get [150, 100, 50] points', () => {
//         const dice = [1, 2, 3, 3, 5, 6];
//         const expected = [150, 100, 50];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[1, 2, 3, 4, 5, 6] should get [1500, 150, 100, 50] points', () => {
//         const dice = [1, 2, 3, 4, 5, 6];
//         const expected = [1500, 150, 100, 50];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[1, 1, 2, 2, 3, 3] should get [1500, 200, 100] points', () => {
//         const dice = [1, 1, 2, 2, 3, 3];
//         const expected = [1500, 200, 100];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[1, 1, 1, 2, 2, 3] should get [1250, 1000, 200, 100] points', () => {
//         const dice = [1, 1, 1, 2, 2, 3];
//         const expected = [1250, 1000, 200, 100];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[1, 1, 1, 1, 2, 2] should get [2000, 1500, 1250, 1000, 200, 100] points', () => {
//         const dice = [1, 1, 1, 1, 2, 2];
//         const expected = [2000, 1500, 1250, 1000, 200, 100];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[2, 2, 3, 4, 6, 6] should get [500] points', () => {
//         const dice = [2, 2, 3, 4, 6, 6];
//         const expected = [500];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[2, 2, 3, 4, 6, 6] should get [500] points', () => {
//         const dice = [2, 2, 3, 4, 6, 6];
//         const expected = [500];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[3, 3, 3] should get [300] points', () => {
//         const dice = [3, 3, 3];
//         const expected = [300];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[3, 3, 3, 3] should get [600, 300] points', () => {
//         const dice = [3, 3, 3, 3];
//         const expected = [600, 300];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[3, 3, 3, 1] should get [700, 600, 300, 100] points', () => {
//         const dice = [3, 3, 3, 1];
//         const expected = [700, 600, 300, 100];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[3, 3, 3, 3, 3] should get [1200, 600, 300] points', () => {
//         const dice = [3, 3, 3, 3, 3];
//         const expected = [1200, 600, 300];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });

//     it('[3, 3, 3, 3, 3, 3] should get [2400, 1200, 600, 300] points', () => {
//         const dice = [3, 3, 3, 3, 3, 3];
//         const expected = [2400, 1200, 600, 300];
//         const result = getCombos(dice);

//         expect(result).to.eql(expected);
//     });
// });
