/**
 * 哈希表：找出数组中最长的连续序列的长度。
 * @param {number[]} nums - 整数数组
 * @return {number} - 最长连续序列的长度
 */
var longestConsecutive = function (nums) {
  // 初始化最长连续序列的长度为 0
  let longestSeq = 0;

  // 使用Set来记录所有元素，Set的查找时间是O(1)
  const set = new Set(nums);

  // 遍历数组中的每个元素
  for (const num of set) {
    // 如果当前元素的前一个元素存在于集合中，跳过当前元素
    // 因为当前元素不是某个连续序列的起点
    if (set.has(num - 1)) {
      continue;
    }

    // 初始化当前连续序列的下一个元素为 num + 1
    let y = num + 1;

    // 检查集合中是否存在当前连续序列的下一个元素
    while (set.has(y)) {
      y += 1;
    }

    // 更新最长连续序列的长度
    longestSeq = Math.max(longestSeq, y - num);
  }

  // 返回最长连续序列的长度
  return longestSeq;
};

console.log(longestConsecutive([4, 100, 200, 1, 3, 2])); // 输出：4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 输出：9
