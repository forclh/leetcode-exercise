(function () {
  /**
   * 哈希表法
   * @param {number[]} nums
   * @return {number}
   */
  var majorityElement = function (nums) {
    // 创建一个Map来记录每个数字出现的次数
    const countMap = new Map();
    // 计算多数元素至少出现的次数
    const majorityCount = Math.ceil(nums.length / 2);
    // 遍历数组中的每个数字
    for (const num of nums) {
      // 如果当前数字不在Map中，则添加到Map中并初始化计数为0
      if (!countMap.get(num)) {
        countMap.set(num, 0);
      }
      // 增加当前数字的计数
      countMap.set(num, countMap.get(num) + 1);

      // 如果当前数字的计数达到或超过多数元素的标准计数，则返回该数字
      if (countMap.get(num) >= majorityCount) {
        return num;
      }
    }
  };

  // console.log(majorityElement([3, 2, 3]));
})();

(function () {
  /**
   * 投票法
   * @param {number[]} nums
   * @return {number}
   */
  var majorityElement = function (nums) {
    let count = 0; // 票数
    let candidate = null; // 候选者
    for (const item of nums) {
      if (count === 0) {
        // 如果计数器为0，则将当前元素设为候选者
        candidate = item;
      }
      // 如果当前元素等于候选者，计数器加1，如果当前元素不等于候选者，计数器减1。
      count += item === candidate ? 1 : -1;
    }
    return candidate;
  };

  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
})();
