const { findMissingNumber } = require('./find')

test('[5, 0, 1, 3, 2] missing 4', () => {
    expect(findMissingNumber([5, 0, 1, 3, 2])).toBe(4)
})

test('[7, 9, 10, 11, 12] missing 8', () => {
    expect(findMissingNumber([7, 9, 10, 11, 12])).toBe(8)
})

test('[-10, -15, -11, -12, -14] missing -13', () => {
    expect(findMissingNumber([-10, -15, -11, -12, -14])).toBe(-13)
})

test('[1, 2, 3, 4, 5] missing null', () => {
    expect(findMissingNumber([1, 2, 3, 4, 5])).toBe(null)
})

test('[4] missing null', () => {
    expect(findMissingNumber([4])).toBe(null)
})

test('[-4, -3, -2, 0, 1] missing -1', () => {
    expect(findMissingNumber([-4, -3, -2, 0, 1])).toBe(-1)
})

test('[1, 1, 2, 3, 3, 5, 5] missing 4', () => {
    expect(findMissingNumber([1, 1, 2, 3, 3, 5, 5])).toBe(4)
})

test('[1000, 1001, 1003, 1004, 1005] missing 1002', () => {
    expect(findMissingNumber([1000, 1001, 1003, 1004, 1005])).toBe(1002)
})

test('[3, 1, 4, 2, 6, 5] missing null ', () => {
    expect(findMissingNumber([3, 1, 4, 2, 6, 5])).toBe(null )
})
