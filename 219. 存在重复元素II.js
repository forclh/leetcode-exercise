(function () {
  /**
   * 使用哈希表来判断数组中是否存在两个不同的索引 i 和 j，
   * 满足 nums[i] == nums[j] 且 abs(i - j) <= k。
   * @param {number[]} nums - 整数数组
   * @param {number} k - 最大索引差值
   * @return {boolean} - 如果存在满足条件的索引对，返回 true；否则返回 false
   */
  var containsNearbyDuplicate = function (nums, k) {
    // 创建一个哈希表来存储每个元素及其对应的最新索引
    const hashMap = new Map();

    // 遍历数组中的每个元素
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      // 如果当前元素已经在哈希表中存在，并且当前索引与哈希表中存储的索引之差小于等于 k
      if (hashMap.has(num) && i - hashMap.get(num) <= k) {
        // 返回 true
        return true;
      }

      // 将当前元素及其索引存入哈希表
      hashMap.set(num, i);
    }

    // 如果遍历结束后没有找到满足条件的索引对，返回 false
    return false;
  };
})();

(function () {
  /**
   * 使用滑动窗口法来判断数组中是否存在两个不同的索引 i 和 j，
   * 满足 nums[i] == nums[j] 且 abs(i - j) <= k。
   * @param {number[]} nums - 整数数组
   * @param {number} k - 最大索引差值
   * @return {boolean} - 如果存在满足条件的索引对，返回 true；否则返回 false
   */
  var containsNearbyDuplicate = function (nums, k) {
    // 创建一个集合来存储当前窗口内的元素
    const set = new Set();
    // 遍历数组中的每个元素
    for (let i = 0; i < nums.length; i++) {
      // 如果当前索引大于 k，移除窗口外的第一个元素（保持窗口大小）
      if (i > k) {
        set.delete(nums[i - k - 1]);
      }
      // 如果当前元素已经在集合中存在，说明找到了满足条件的索引对
      if (set.has(nums[i])) {
        return true;
      }
      // 将当前元素添加到集合中
      set.add(nums[i]);
    }
    // 如果遍历结束后没有找到满足条件的索引对，返回 false
    return false;
  };
})();
