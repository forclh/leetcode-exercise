var findLHS = function (nums) {
  const cnt = new Map(); // 创建一个 Map 用于存储每个数字出现的次数
  let res = 0; // 初始化结果变量
  for (const num of nums) {
    cnt.set(num, (cnt.get(num) || 0) + 1); // 统计每个数字出现的次数
  }
  for (const key of cnt.keys()) {
    if (cnt.has(key + 1)) {
      // 检查 Map 中是否存在比当前数字大 1 的数字
      res = Math.max(res, cnt.get(key) + cnt.get(key + 1)); // 更新结果为当前和谐子序列的最大长度
    }
  }
  return res; // 返回最长和谐子序列的长度
};

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums)); // 5
