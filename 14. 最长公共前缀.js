(function () {
  /**
   * @param {string[]} strs
   * @return {string}
   */
  var longestCommonPrefix = function (strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while (!strs[i].startsWith(prefix)) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix === "") {
          return "";
        }
      }
    }
    return prefix;
  };

  strs = ["flower", "flow", "flight"];
  console.log(longestCommonPrefix(strs));
})();

(function () {
  /**
   * 查找字符串数组中的最长公共前缀。
   *
   * @param {string[]} strs - 字符串数组，不能为空。
   * @return {string} - 返回所有字符串的最长公共前缀。如果没有公共前缀，则返回空字符串。
   */
  var longestCommonPrefix = function (strs) {
    // 将前缀初始化为数组中的第一个字符串
    let prefix = strs[0];
    // 遍历字符串数组，从第二个字符串开始
    for (let i = 1; i < strs.length; i++) {
      let j = 0;
      // 比较当前前缀与当前字符串的字符，直到发现不同的字符或到达其中一个字符串的末尾
      for (; j < prefix.length && j < strs[i].length; j++) {
        if (prefix[j] !== strs[i][j]) {
          break;
        }
      }
      // 更新前缀为当前匹配的部分
      prefix = prefix.substring(0, j);
      // 如果前缀为空，表示没有公共前缀，直接返回空字符串
      if (prefix === "") {
        return "";
      }
    }
    // 返回最终的最长公共前缀
    return prefix;
  };

  strs = ["flower", "flow", "flight"];
  console.log(longestCommonPrefix(strs));
})();
