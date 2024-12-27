/**
 * 双指针
 * 将数组中的所有0移动到数组的末尾，同时保持非0元素的相对顺序
 * @param {number[]} nums 输入的数组
 * @return {void} 不返回任何值，原地修改输入数组
 */
var moveZeroes = function (nums) {
  // 初始化一个指针j，用于记录下一个非零元素应该放的位置
  let j = 0;
  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 当前元素非0时
    if (nums[i] !== 0) {
      // 数组只有一个元素的情况
      if (nums[i] !== nums[j]) {
        // 重新设置将当前非零元素的位置
        nums[j] = nums[i];
        nums[i] = 0;
      }
      // 更新最后一个非0元素的位置
      j++;
    }
  }
};
