/**
 * @param {number[]} height
 https://leetcode.com/problems/container-with-most-water/
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let area = 0;
  let right = height.length - 1;
    while(left < right) {
        const midArea = Math.min(height[left], height[right]) * (right - left);
        if (midArea > area) {
            area = midArea;            
        }
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    return area;
};
