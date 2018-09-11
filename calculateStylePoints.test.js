const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('style', () => {
        it('should return correct sum for notes with big outliers', () => {
            const actual = calculateStylePoints([0,20,5,15,7]);
    
            const expected = 27;
    
            assert.equal(actual, expected);
        });

        it('should return correct sum for repeated scores', () => {
            const actual = calculateStylePoints([5,5,5,5,7]);
    
            const expected = 15;
    
            assert.equal(actual, expected);
        });

        it('should return correct sum for scores with fractions', () => {
            const actual = calculateStylePoints([5.5,6.5,7.5,8,6.5]);
    
            const expected = 20.5;
    
            assert.equal(actual, expected);
        });
    });
});