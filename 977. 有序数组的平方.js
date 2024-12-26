/**
 * 双指针法
 * @param {number[]} nums 一个已经排序的数字数组，可以包含负数、零和正数
 * @return {number[]} 返回一个新的数组，包含原数组中每个元素的平方，并且新的数组也是排序的
 */
var sortedSquares = function (nums) {
  // 初始化数组长度
  let n = nums.length;
  // 初始化结果数组，长度与输入数组相同，初始值为0
  let result = new Array(n).fill(0);

  // 初始化左右指针和结果数组的填充位置
  let leftPointer = 0;
  let rightPointer = n - 1;
  let k = n - 1;
  // 当左指针不超过右指针时，循环执行
  while (leftPointer <= rightPointer) {
    // 计算左右指针指向元素的平方值
    let leftValue = nums[leftPointer] ** 2;
    let rightValue = nums[rightPointer] ** 2;
    // 比较左右值，将较大值从末尾开始填充到结果数组中
    if (leftValue > rightValue) {
      result[k--] = leftValue;
      leftPointer++;
    } else if (leftValue < rightValue) {
      result[k--] = rightValue;
      rightPointer--;
    } else {
      // 当左右值相等时，先将两个相同值都填充到结果数组中
      result[k--] = rightValue;
      result[k--] = leftValue;
      leftPointer++;
      rightPointer--;
    }
  }
  // 返回结果数组
  return result;
};
