const { findMissingNumber } = require('./find')

test('[5,0,1,3,2] missing 4', () => {
    expect(findMissingNumber([5, 0, 1, 3, 2])).toBe(4)
})


test('[7,9,10,11,12] missing 8', () => {
    expect(findMissingNumber([7, 9, 10, 11, 12])).toBe(8)
})