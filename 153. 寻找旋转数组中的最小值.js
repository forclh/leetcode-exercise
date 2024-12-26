/**
 * @param {number[]} nums - 一个旋转排序数组
 * @return {number} - 数组中的最小值
 */
var findMin = function (nums) {
  // 初始化起始索引为0
  let start = 0;
  // 初始化结束索引为数组最后一个元素的索引
  let end = nums.length - 1;

  // 当起始索引小于结束索引时，继续循环
  while (start <= end) {
    // 如果起始索引等于结束索引，说明数组中只有一个元素，直接返回该元素
    if (start === end) {
      return nums[start];
    }
    // 计算中间索引
    let mid = Math.floor((start + end) / 2);

    // 如果中间元素小于结束元素，说明最小值在左半部分或就是中间元素
    if (nums[mid] < nums[end]) {
      end = mid;
    }
    // 如果中间元素大于结束元素，说明最小值在右半部分
    else if (nums[mid] > nums[end]) {
      start = mid + 1;
    }
  }
};
