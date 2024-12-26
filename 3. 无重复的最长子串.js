(function () {
  /**
   * 暴力法
   * @param {string} s 输入字符串
   * @return {number} 返回无重复字符的最长子串长度
   */
  var lengthOfLongestSubstring = function (s) {
    let result = 0; // 初始化最长子串长度为0
    // 遍历字符串中的每个字符作为子串的起始位置
    for (let i = 0; i < s.length; i++) {
      let strSet = new Set(); // 使用Set记录当前子串中的不重复字符
      strSet.add(s[i]); // 将当前字符添加到Set中
      // 从当前字符的下一个位置开始遍历，直到遇到重复字符或到达字符串末尾
      for (let j = i + 1; j < s.length; j++) {
        if (strSet.has(s[j])) {
          // 如果当前字符已存在于Set中，说明遇到了重复字符
          break; // 结束内层循环
        }
        strSet.add(s[j]); // 否则将当前字符添加到Set中
      }
      // 更新最长子串的长度
      result = Math.max(result, strSet.size);
    }
    return result; // 返回最终结果
  };

  // const s = "abcabcbb";
  // console.log(lengthOfLongestSubstring(s));
})();

(function () {
  /**
   * 双指针(滑动窗口法)
   * @param {string} s 输入字符串
   * @return {number} 返回无重复字符的最长子串长度
   */
  var lengthOfLongestSubstring = function (s) {
    let left = 0; // 左指针
    let right = 0; // 右指针
    let result = 0; // 记录最长子串的长度
    let map = new Map(); // 存储字符及其最新出现的位置

    // 当右指针未超出字符串长度且左指针加上当前结果长度未超出字符串长度时继续循环
    while (right < s.length && left + result < s.length) {
      // 如果当前字符已存在于map中，更新左指针位置为该字符上次出现位置的下一个位置或当前左指针位置的最大值
      if (map.has(s[right])) {
        left = Math.max(map.get(s[right]) + 1, left);
      }
      // 更新当前字符的最新位置
      map.set(s[right], right);
      // 更新最长子串长度
      result = Math.max(result, right - left + 1);
      // 右指针向右移动
      right++;
    }
    // 返回最终结果
    return result;
  };

  const s = "tmmzuxt";
  console.log(lengthOfLongestSubstring(s));
})();
