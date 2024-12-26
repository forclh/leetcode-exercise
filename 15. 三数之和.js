/**
 * 寻找数组中所有不重复的三元组，这些三元组的和为零
 * @param {number[]} nums 输入的整数数组
 * @return {number[][]} 返回一个二维数组，包含所有符合条件的三元组
 */
var threeSum = function (nums) {
  // 对数组进行排序，以便后续使用双指针技术
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // 跳过重复的元素，避免重复的三元组出现
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    // 使用双指针技术寻找和为零的三元组
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      // 当三元组的和为零时
      if (sum === 0) {
        // 将找到的三元组添加到结果中
        res.push([nums[i], nums[left], nums[right]]);
        // 移动左指针，跳过重复的元素
        while (left < right && nums[left] === nums[left + 1]) left++;
        // 移动右指针，跳过重复的元素
        while (left < right && nums[right] === nums[right - 1]) right--;
        // 继续搜索其他可能的三元组
        left++;
        right--;
      } else if (sum < 0) {
        // 如果和小于零，移动左指针
        left++;
      } else {
        // 如果和大于零，移动右指针
        right--;
      }
    }
  }
  // 返回所有找到的三元组
  return res;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
