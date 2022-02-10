/**
 * @param {number} n - a positive integer
 https://leetcode.com/problems/number-of-1-bits
 * @return {number}
 */
/**
 using bits approach is better
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n >0) {
        count += n & 1; // checking if the rightmost is 1 or not
        n >>>=1 // removing 1 from right most
    }
    return count;
};
var hammingWeight = function(n) {
    let left = 32;
    let right = 0;
    let power = 0;
    while(left > right) {
        const mid = ((left + right) / 2) | 0;
        if (2 ** mid === n)  {
            leftMost = mid;
            break;
        }
        if (2 ** mid > n) {
            left = mid - 1
        } else {
            right = mid + 1;
        }
        power = left;
    }
    let count = 0;
    let nq = n;
    while(power >= 0) {
        const q = (2 ** power);
         remainder = (nq/q) | 0;
         nq = nq % q;
        if (remainder) {
            count++;
        }
        power--;
        
    }
    return count;
};
