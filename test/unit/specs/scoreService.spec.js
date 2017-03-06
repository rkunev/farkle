import scoreService from 'services/scoreService';

describe('scoreService', () => {
    describe('getPrimitives:', () => {
        it('[5, 2, 3, 4, 4, 6] should get 50 points', () => {
            const dice = [5, 2, 3, 4, 4, 6];
            const result = scoreService.getPrimitives(dice);

            expect(result).to.equal(50);
        });

        it('[5, 5, 3, 4, 4, 6] should get 100 points', () => {
            const dice = [5, 5, 3, 4, 4, 6];
            const result = scoreService.getPrimitives(dice);

            expect(result).to.equal(100);
        });

        it('[1, 2, 3, 4, 4, 6] should get 100 points', () => {
            const dice = [1, 2, 3, 4, 4, 6];
            const result = scoreService.getPrimitives(dice);

            expect(result).to.equal(100);
        });

        it('[1, 1, 3, 4, 4, 6] should get 200 points', () => {
            const dice = [1, 1, 3, 4, 4, 6];
            const result = scoreService.getPrimitives(dice);

            expect(result).to.equal(200);
        });

        it('[1, 5, 3, 4, 4, 6] should get 150 points', () => {
            const dice = [1, 5, 3, 4, 4, 6];
            const result = scoreService.getPrimitives(dice);

            expect(result).to.equal(150);
        });

        it('[1, 5, 1, 4, 4, 6] should get 250 points', () => {
            const dice = [1, 5, 1, 4, 4, 6];
            const result = scoreService.getPrimitives(dice);

            expect(result).to.equal(250);
        });
    });

    describe('getStraight:', () => {
        it('[1, 2, 3, 4, 5, 6] should get 1500 points', () => {
            const dice = [1, 2, 3, 4, 5, 6];
            const result = scoreService.getStraight(dice);

            expect(result).to.equal(1500);
        });

        it('[1, 1, 3, 4, 5, 6] should get 0 points', () => {
            const dice = [1, 1, 3, 4, 5, 6];
            const result = scoreService.getStraight(dice);

            expect(result).to.equal(0);
        });
    });

    describe('getThreePairs:', () => {
        it('[1, 2, 1, 2, 3, 3] should get 1500 points', () => {
            const dice = [1, 2, 1, 2, 3, 3];
            const result = scoreService.getThreePairs(dice);

            expect(result).to.equal(1500);
        });

        it('[1, 2, 1, 2, 2, 2] should get 1500 points', () => {
            const dice = [1, 2, 1, 2, 2, 2];
            const result = scoreService.getThreePairs(dice);

            expect(result).to.equal(1500);
        });

        it('[1, 1, 3, 4, 5, 6] should get 0 points', () => {
            const dice = [1, 1, 3, 4, 5, 6];
            const result = scoreService.getThreePairs(dice);

            expect(result).to.equal(0);
        });
    });

    describe('getRepeatedPrimitives:', () => {
        it('[1, 1, 1, 3, 4, 3] should get 1000 points', () => {
            const dice = [1, 1, 1, 3, 4, 3];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(1000);
        });

        it('[1, 1, 1, 3, 4, 1] should get 2000 points', () => {
            const dice = [1, 1, 1, 3, 4, 1];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(2000);
        });

        it('[1, 1, 1, 1, 4, 1] should get 4000 points', () => {
            const dice = [1, 1, 1, 1, 4, 1];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(4000);
        });

        it('[1, 1, 1, 1, 1, 1] should get 8000 points', () => {
            const dice = [1, 1, 1, 1, 1, 1];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(8000);
        });

        it('[2, 2, 2, 3, 4, 3] should get 200 points', () => {
            const dice = [2, 2, 2, 3, 4, 3];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(200);
        });

        it('[2, 2, 2, 3, 2, 3] should get 400 points', () => {
            const dice = [2, 2, 2, 3, 2, 3];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(400);
        });

        it('[2, 2, 2, 2, 2, 3] should get 800 points', () => {
            const dice = [2, 2, 2, 2, 2, 3];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(800);
        });

        it('[2, 2, 2, 2, 2, 2] should get 1600 points', () => {
            const dice = [2, 2, 2, 2, 2, 2];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(1600);
        });

        it('[1, 2, 3, 3, 4, 3] should get 300 points', () => {
            const dice = [1, 2, 3, 3, 4, 3];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(300);
        });

        it('[3, 2, 3, 3, 4, 3] should get 600 points', () => {
            const dice = [3, 2, 3, 3, 4, 3];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(600);
        });

        it('[3, 3, 3, 3, 4, 3] should get 1200 points', () => {
            const dice = [3, 3, 3, 3, 4, 3];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(1200);
        });

        it('[3, 3, 3, 3, 3, 3] should get 2400 points', () => {
            const dice = [3, 3, 3, 3, 3, 3];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(2400);
        });

        // Should get 1500 for 3 pairs, but also has 700 for [4, 4, 4] and [3, 3, 3]
        it('[4, 4, 3, 3, 3, 4] should get 400 points', () => {
            const dice = [4, 4, 3, 3, 3, 4];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(400);
        });

        // Full House: [4, 4, 4, 3, 3] = 800 + 250 = 1050
        it('[4, 4, 4, 3, 3, 4] should get 800 points', () => {
            const dice = [4, 4, 4, 3, 3, 4];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(800);
        });

        it('[4, 4, 4, 3, 4, 4] should get 1600 points', () => {
            const dice = [4, 4, 4, 3, 4, 4];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(1600);
        });

        it('[4, 4, 4, 4, 4, 4] should get 3200 points', () => {
            const dice = [4, 4, 4, 4, 4, 4];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(3200);
        });

        it('[5, 5, 4, 5, 4, 4] should get 500 points', () => {
            const dice = [5, 5, 4, 5, 4, 4];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(500);
        });

        it('[5, 5, 4, 5, 5, 4] should get 1000 points', () => {
            const dice = [5, 5, 4, 5, 5, 4];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(1000);
        });

        it('[5, 5, 5, 5, 5, 4] should get 2000 points', () => {
            const dice = [5, 5, 5, 5, 5, 4];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(2000);
        });

        it('[5, 5, 5, 5, 5, 5] should get 4000 points', () => {
            const dice = [5, 5, 5, 5, 5, 5];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(4000);
        });

        it('[6, 6, 1, 2, 1, 6] should get 600 points', () => {
            const dice = [6, 6, 1, 2, 1, 6];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(600);
        });

        it('[6, 6, 1, 2, 6, 6] should get 1200 points', () => {
            const dice = [6, 6, 1, 2, 6, 6];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(1200);
        });

        it('[6, 6, 6, 2, 6, 6] should get 2400 points', () => {
            const dice = [6, 6, 6, 2, 6, 6];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(2400);
        });

        it('[6, 6, 6, 6, 6, 6] should get 4800 points', () => {
            const dice = [6, 6, 6, 6, 6, 6];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(4800);
        });

        it('[1, 2, 3, 4, 5, 6] should get 0 points', () => {
            const dice = [1, 2, 3, 4, 5, 6];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(0);
        });

        it('[1, 1, 3, 4, 5, 6] should get 0 points', () => {
            const dice = [1, 1, 3, 4, 5, 6];
            const result = scoreService.getRepeatedPrimitives(dice);

            expect(result).to.equal(0);
        });
    });

    describe('getFullHouse:', () => {
        it('[1, 1, 1, 2, 2, 2] should get 1250 points', () => {
            const dice = [1, 1, 1, 2, 2, 2];
            const result = scoreService.getFullHouse(dice);

            expect(result).to.equal(1250);
        });

        it('[1, 1, 1, 2, 2, 3] should get 1250 points', () => {
            const dice = [1, 1, 1, 2, 2, 3];
            const result = scoreService.getFullHouse(dice);

            expect(result).to.equal(1250);
        });

        it('[1, 1, 1, 1, 2, 2] should get 1250 points', () => {
            const dice = [1, 1, 1, 1, 2, 2];
            const result = scoreService.getFullHouse(dice);

            expect(result).to.equal(1250);
        });

        it('[1, 1, 2, 2, 2, 2] should get 450 points', () => {
            const dice = [1, 1, 2, 2, 2, 2];
            const result = scoreService.getFullHouse(dice);

            expect(result).to.equal(450);
        });

        it('[1, 1, 2, 2, 3, 3] should get 0 points', () => {
            const dice = [1, 1, 2, 2, 3, 3];
            const result = scoreService.getFullHouse(dice);

            expect(result).to.equal(0);
        });
    });

    describe('getLuckyRoll', () => {
        it('[2, 2, 3, 4, 4, 6] should get 500 points', () => {
            const dice = [2, 2, 3, 4, 4, 6];
            const result = scoreService.getLuckyRoll(dice);

            expect(result).to.equal(500);
        });

        it('[2, 3, 4, 4, 6] should get 0 points', () => {
            const dice = [2, 3, 4, 4, 6];
            const result = scoreService.getLuckyRoll(dice);

            expect(result).to.equal(0);
        });

        it('[1, 2, 3, 4, 4, 6] should get 0 points', () => {
            const dice = [1, 2, 3, 4, 4, 6];
            const result = scoreService.getLuckyRoll(dice);

            expect(result).to.equal(0);
        });
    });
});

// [1, 1, 1, 5] should get 1050
//
