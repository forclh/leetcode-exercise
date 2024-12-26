/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 方法一：
var removeElement = function (nums, val) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left++] = nums[right];
    }
  }
  return left;
};

// 方法三：
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right--];
    } else {
      left++;
    }
  }
  return left;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

console.log(removeElement(nums, val));
console.log(nums);
