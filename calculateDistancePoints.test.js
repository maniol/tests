const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('hillsize', () => {
        it('should return correct base score for normal hillsize', () => {
            const actual = calculateDistancePoints(0,'normal',0);
    
            const expected = 60;
    
            assert.equal(actual, expected);
        });

        it('should return correct base score for big hillsize', () => {
            const actual = calculateDistancePoints(0,'big',0);
    
            const expected = 60;
    
            assert.equal(actual, expected);
        });

        it('should return correct base score for huge hillsize', () => {
            const actual = calculateDistancePoints(0,'huge',0);
            
            const expected = 120;
    
            assert.equal(actual, expected);
        });
    });

    describe('distance', () => {
        it('should work for a distance greater than kPoint', () => {
            const actual = calculateDistancePoints(111, 'normal', 98);

            const expected = 86;

            assert.equal(actual, expected);
        });

        it('should work for a distance smaller than kPoint', () => {
            const actual = calculateDistancePoints(95, 'normal', 98);

            const expected = 54;

            assert.equal(actual, expected);
        });
    });
});