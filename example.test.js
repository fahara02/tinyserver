const { test, expect } = require('@jest/globals');
const { addNumber } = require('./example');

test('addNumber protocol', () => {
    const input1 = 1;
    const input2 = 2;
    const actual = addNumber(input1, input2);
    const expected = 3;
    expect(actual).toEqual(expected);
});
