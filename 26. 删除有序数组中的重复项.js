/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let left = 1;
  let right = 1;
  while (right < n) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  return left;
};
