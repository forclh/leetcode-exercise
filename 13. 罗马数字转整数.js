/**
 * 将罗马数字转换为整数
 *
 * @param {string} s - 输入的罗马数字字符串
 * @return {number} - 转换后的整数值
 */
var romanToInt = function (s) {
  // 罗马数字与对应整数值的映射表
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // 初始化总和为0
  let total = 0;
  // 初始化前一个数字为0
  let previous = 0;
  // 从字符串末尾开始遍历
  for (let i = s.length - 1; i >= 0; i--) {
    // 获取当前字符对应的整数值
    const current = romanMap[s[i]];
    // 如果当前值大于等于前一个值，加到总和中
    if (current >= previous) {
      total += current;
    } else {
      // 否则，从总和中减去当前值
      total -= current;
    }
    // 更新前一个值为当前值
    previous = current;
  }
  // 返回计算后的总和
  return total;
};
