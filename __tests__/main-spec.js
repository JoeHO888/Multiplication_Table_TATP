const multiplyOverRangeOfTwoIntegers = require('../main');

it ('should produce a mulitplication table', () => {
	//given integers 2,4
	//when we call the function multiplyOverRangeOfTwoIntegers
	const text = '2*2=4\n' + '2*3=6  3*3=9\n' + '2*4=8  3*4=12  4*4=16';
	//then it should return a table  as below:
	//2*2=4
	//2*3=6 3*3=9
	//2*4=8 3*4=12 4*4=16
    expect(multiplyOverRangeOfTwoIntegers(2, 4)).toBe(text);
});