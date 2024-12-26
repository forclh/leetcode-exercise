/**
 * 计算最长递增子序列的长度
 * @param {number[]} nums 输入的数字序列
 * @return {number} 最长递增子序列的长度
 */
var lengthOfLIS = function (nums) {
  /**
   * 使用二分查找帮助函数来找到数字在递增子序列中的插入位置
   * @param {number[]} nums 当前已知的递增子序列
   * @param {number} target 待插入的数字
   * @return {number} 数字在递增子序列中的插入位置
   */
  function help(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else right = mid - 1;
    }
    return left;
  }

  // 存储当前最长递增子序列的末端元素
  let ends = [];
  for (const num of nums) {
    // 找到num在ends数组中的插入位置
    let pos = help(ends, num);
    if (pos === ends.length) {
      // 如果插入位置等于ends的长度，说明num大于ends中的所有元素，直接添加到ends末尾
      ends.push(num);
    } else {
      // 否则替换ends中对应位置的元素为num
      ends[pos] = num;
    }
  }

  // 返回ends数组的长度，即为最长递增子序列的长度
  return ends.length;
};
