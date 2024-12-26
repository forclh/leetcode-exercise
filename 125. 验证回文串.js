(function () {
  /**
   * 判断给定字符串是否为回文串
   * 忽略非字母和数字字符，并且不区分大小写
   * @param {string} s 输入的字符串
   * @return {boolean} 如果是回文串返回true，否则返回false
   */
  var isPalindrome = function (s) {
    // 移除非字母和数字的字符，并将字符串转换为小写
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = s.length - 1;
    // 使用双指针技术从两端向中间遍历字符串
    while (left < right) {
      // 如果左右指针指向的字符不相等，则不是回文串
      if (s[left] !== s[right]) {
        return false;
      } else {
        // 左指针右移，右指针左移，继续比较下一对字符
        left++;
        right--;
      }
    }
    // 当左指针不再小于右指针时，说明已经比较完所有字符，字符串是回文串
    return true;
  };

  const s = "A man, a plan, a canal: Panama";
  console.log(isPalindrome(s));
})();
