(function () {
  /**
   * 使用API的暴力法
   * @param {string} haystack
   * @param {string} needle
   * @return {number}
   */
  var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack.substring(i, haystack.length).startsWith(needle)) {
        return i;
      }
    }
    return -1;
  };

  console.log(strStr("hello", "ll"));
})();

(function () {
  /**
   * 暴力法
   * @param {string} haystack
   * @param {string} needle
   * @return {number}
   */
  var strStr = function (haystack, needle) {
    const n = haystack.length;
    const m = needle.length;
    for (let i = 0; i + m <= n; i++) {
      let flag = true;
      for (let j = 0; j < m; j++) {
        if (haystack[i + j] !== needle[j]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return i;
      }
    }
    return -1;
  };
})();
