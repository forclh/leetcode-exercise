/**
 * @param {number[]} nums - 已排序的整数数组
 * @param {number} target - 需要在数组中查找的目标值
 * @return {number} - 目标值在数组中的索引，如果未找到则返回 -1
 */
var search = function (nums, target) {
  // 初始化起始索引
  let start = 0;
  // 初始化结束索引
  let end = nums.length - 1;

  // 当起始索引小于等于结束索引时，继续循环
  while (start <= end) {
    // 计算中间索引
    let mid = Math.floor((start + end) / 2);

    // 如果中间元素小于目标值，说明目标值在右半部分，调整起始索引
    if (nums[mid] < target) {
      start = mid + 1;
    }
    // 如果中间元素大于目标值，说明目标值在左半部分，调整结束索引
    else if (nums[mid] > target) {
      end = mid - 1;
    }
    // 如果中间元素等于目标值，返回中间索引
    else {
      return mid;
    }
  }

  // 如果循环结束仍未找到目标值，返回 -1
  return -1;
};
