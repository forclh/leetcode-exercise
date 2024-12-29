/**
 * 滑动窗口法
 * @param {number} target 目标和
 * @param {number[]} nums 输入的整数数组
 * @return {number} 返回子数组的最小长度，如果不存在则返回0
 */
var minSubArrayLen = function (target, nums) {
  // 初始化窗口的起始位置
  let start = 0;
  // 初始化结果为无穷大，用于记录最小子数组长度
  let result = Infinity;
  // 初始化窗口内元素的和
  let sum = 0;
  // 遍历数组，使用滑动窗口法
  for (let end = 0; end < nums.length; end++) {
    // 将当前元素的值加到窗口内元素的和上
    sum += nums[end];
    // 当窗口内元素的和大于等于目标值时，尝试缩小窗口
    while (sum >= target) {
      // 更新最小子数组长度
      result = Math.min(result, end - start + 1);
      // 缩小窗口，将窗口起始位置的元素值从和中减去
      sum -= nums[start];
      // 窗口起始位置向前移动一位
      start++;
    }
  }
  // 如果result未被更新，说明没有找到符合条件的子数组，返回0；否则返回result
  return result === Infinity ? 0 : result;
};
