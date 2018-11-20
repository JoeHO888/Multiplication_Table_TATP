const multiplyOverRangeOfTwoIntegers = require('../main');
const text = '2*2=4\n' + '2*3=6  3*3=9\n' + '2*4=8  3*4=12  4*4=16';
it ('should produce a mulitplication table', () => {
    expect(multiplyOverRangeOfTwoIntegers(2, 4)).toBe(text);
});