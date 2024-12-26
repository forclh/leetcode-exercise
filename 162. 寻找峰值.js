/**
 * 寻找数组中的峰值元素
 * 峰值元素是指其值大于左右相邻值的元素
 * 此函数通过二分查找法在O(logn)的时间复杂度内找到一个峰值元素的索引
 * @param {number[]} nums 一个整数数组
 * @return {number} 返回找到的峰值元素的索引
 */
var findPeakElement = function (nums) {
  // 初始化数组长度减1，用于后续判断边界条件
  let n = nums.length - 1;
  // 初始化查找区间的起始和结束索引
  let start = 0;
  let end = n;
  // 使用二分查找法寻找峰值
  while (start <= end) {
    // 计算中间索引
    let mid = Math.floor((start + end) / 2);
    // 如果中间元素小于其右侧元素，则峰值在右侧
    if (mid + 1 <= n && nums[mid] < nums[mid + 1]) {
      start = mid + 1;
    }
    // 如果中间元素小于其左侧元素，则峰值在左侧
    else if (mid - 1 >= 0 && nums[mid] < nums[mid - 1]) {
      end = mid - 1;
    }
    // 如果中间元素大于其左右侧元素，则中间元素为峰值
    else {
      return mid;
    }
  }
  // 如果没有找到峰值，返回-1
  return -1;
};
