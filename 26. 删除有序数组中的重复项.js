/**
 * 双指针
 * @param {number[]} nums 一个包含可能重复元素的排序数组。
 * @return {number} 移除重复项后数组的新长度。
 */
var removeDuplicates = function (nums) {
  // 获取数组的长度
  const n = nums.length;
  // 如果数组为空，直接返回0
  if (n === 0) {
    return 0;
  }
  // 初始化左指针为1，因为第一个元素默认为非重复项
  let left = 1;
  // 初始化右指针为1，遍历数组以查找非重复项
  let right = 1;
  // 当右指针未遍历完整个数组时，继续循环
  while (right < n) {
    // 如果右指针指向的当前元素与前一个元素不同，则为新唯一元素
    if (nums[right] !== nums[right - 1]) {
      // 将当前唯一元素复制到左指针的位置
      nums[left] = nums[right];
      // 将左指针向右移动一位，准备接收下一个唯一元素
      left++;
    }
    // 将右指针向右移动一位，继续遍历数组
    right++;
  }
  // 返回唯一元素的数量，即新数组的长度
  return left;
};
