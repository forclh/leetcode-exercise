/**
 * 二分法
 * 在旋转排序数组中寻找目标值
 * @param {number[]} nums 旋转后的排序数组
 * @param {number} target 目标值
 * @return {number} 目标值的索引，如果不存在则返回-1
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // 找到目标值，返回索引
    if (nums[mid] === target) {
      return mid;
    }
    // 左半部分有序
    if (nums[start] <= nums[mid]) {
      // 目标值在左半部分
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        // 目标值在右半部分
        start = mid + 1;
      }
    } else {
      // 右半部分有序
      // 目标值在右半部分
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        // 目标值在左半部分
        end = mid - 1;
      }
    }
  }
  // 未找到目标值
  return -1;
};
