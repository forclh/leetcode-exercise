/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let result = [];
  for (let i = 0; i + k <= nums.length; i++) {
    sub = nums.slice(i, i + k);
    result.push(Math.max(...sub));
  }
  return result;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

console.log(maxSlidingWindow(nums, k));
