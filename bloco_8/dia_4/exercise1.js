
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    const arrayReduced = arrays.reduce(((arrayReduced, value) => arrayReduced.concat(value)), []);
    return arrayReduced;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
