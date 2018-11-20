const multiplyOverRangeOfTwoIntegers = require('../main');

it ('should produce a mulitplication table', () => {
	//given integers 2,4
	//when we call the function multiplyOverRangeOfTwoIntegers
	const test1 = '2*2=4\n' + '2*3=6     3*3=9\n' + '2*4=8     3*4=12    4*4=16';
	//then it should return a table  as below:
	//2*2=4
	//2*3=6     3*3=9
	//2*4=8     3*4=12     4*4=16
    expect(multiplyOverRangeOfTwoIntegers(2, 4)).toBe(test1);
	
});

it ('should output null', () => {
	//given integers 0,1
	//when we call the function multiplyOverRangeOfTwoIntegers
	//then it should return null
	const test2 = null
	expect(multiplyOverRangeOfTwoIntegers(0, 1)).toBe(test2);
	
});

it ('should output null', () => {
	//given integers 1,1001
	//when we call the function multiplyOverRangeOfTwoIntegers
	//then it should return null
	const test3 = null
	expect(multiplyOverRangeOfTwoIntegers(1, 1001)).toBe(test3);
	
});

	
