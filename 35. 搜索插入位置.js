/**
 * 在排序数组中查找目标值的插入位置。
 * 如果目标值存在于数组中，则返回其索引；
 * 如果目标值不存在于数组中，则返回它应该插入的位置。
 * 该函数使用二分查找算法，确保在 O(log n) 时间复杂度内完成查找。
 *
 * @param {number[]} nums - 排序数组（升序排列）
 * @param {number} target - 目标值
 * @return {number} - 目标值的插入位置（如果存在则为索引，否则为应插入的位置）
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length;

  // 使用二分查找法确定目标值的插入位置
  while (start < end) {
    const mid = Math.floor((start + end) / 2); // 计算中间位置

    // 如果中间值小于目标值，说明目标值应在右半部分
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      // 否则，目标值应在左半部分或就是当前中间值
      end = mid;
    }
  }

  return start; // 返回最终的插入位置
};
