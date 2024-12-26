/**
 * 二分法
 * @param {number[]} nums 数组，包含需要分割的整数
 * @param {number} k 分割的段数
 * @return {number} 分割后子数组和的最大值的最小可能值
 */
var splitArray = function (nums, k) {
  /**
   * 辅助函数，用于判断给定的最大子数组和是否可行
   * @param {number} ans 假设的最大子数组和
   * @return {boolean} 如果按此最大子数组和分割，分割后的子数组数是否不超过k
   */
  function help(ans) {
    let total = 0; // 当前子数组的和
    let count = 1; // 当前分割出的子数组数
    for (const num of nums) {
      if (total + num > ans) {
        // 如果当前子数组和加上下一个数超过了ans，则开始一个新的子数组
        total = num;
        count += 1;
      } else {
        // 否则，继续累加当前子数组和
        total += num;
      }
    }
    // 如果分割出的子数组数不超过k，则说明当前的ans是可行的
    return count <= k;
  }

  // 初始化二分查找的边界
  let start = Math.max(...nums); // 数组中最大数，因为至少有一个子数组和会是这个值
  let end = nums.reduce((a, b) => a + b, 0); // 数组所有元素之和，即最极端情况下的子数组和

  // 使用二分查找确定最小的最大子数组和
  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // 取中间值作为当前假设的最大子数组和
    // 如果start和end相等，说明找到了答案
    if (start === end) {
      return start;
    } else if (help(mid)) {
      // 如果当前假设的最大子数组和可行，则尝试更小的值
      end = mid;
    } else {
      // 否则，尝试更大的值
      start = mid + 1;
    }
  }
  // 理论上不应该到达这里，因为总能找到一个答案
  return -1;
};

let nums = [7, 2, 5, 10, 8];
let k = 2;
console.log(splitArray(nums, k));
