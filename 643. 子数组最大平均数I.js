/**
 * 滑动窗口法
 * @param {number[]} nums - 输入的数字数组
 * @param {number} k - 子数组的长度
 * @return {number} - 返回子数组的最大平均数
 */
var findMaxAverage = function (nums, k) {
  let start = 0; // 窗口起始索引
  let end = 0; // 窗口结束索引
  let result = -Infinity; // 保存最大平均数的结果
  let total = 0; // 当前窗口内的总和
  for (; end < nums.length; end++) {
    total += nums[end]; // 将当前元素加入总和
    if (end - start + 1 === k) {
      // 当子数组长度等于k时
      let avg = total / k; // 计算当前子数组的平均数
      result = Math.max(result, avg); // 更新最大平均数
      total -= nums[start]; // 从总和中减去子数组的第一个元素
      start++; // 子数组的起始索引右移一位
    }
  }
  return result; // 返回最大平均数
};
