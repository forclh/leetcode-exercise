/**
 * 找出数组中能组成的最大数
 * @param {number[]} nums - 输入的整数数组
 * @returns {string} - 返回能组成的最大数的字符串表示
 */
function largestNumber(nums) {
  // 将所有数字转换为字符串，以便进行拼接比较
  let numStrs = nums.map(String);

  // 使用自定义的比较函数对数组进行排序
  numStrs.sort((a, b) => {
    // 比较拼接后的结果来决定顺序
    return b + a - (a + b);
  });

  // 将排序后的数组元素拼接成一个字符串
  let largestNum = numStrs.join("");

  // 处理全为0的情况
  return largestNum.startsWith("0") ? "0" : largestNum;
}
