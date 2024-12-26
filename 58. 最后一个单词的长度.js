(function () {
  /**
   * 计算字符串中最后一个单词的长度
   * @param {string} s 输入的字符串
   * @return {number} 返回最后一个单词的长度
   */
  var lengthOfLastWord = function (s) {
    // 将字符串按空格分割成单词数组
    let arr = s.split(" ");
    // 返回最后一个单词的长度
    return arr[arr.length - 1].length;
  };

  const s = "Hello World";

  // console.log(lengthOfLastWord(s));
})();

(function () {
  /**
   * 计算字符串中最后一个单词的长度
   * @param {string} s 输入的字符串
   * @return {number} 返回最后一个单词的长度
   */
  var lengthOfLastWord = function (s) {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== " ") {
        count++;
      } else {
        if (count !== 0) {
          break;
        }
      }
    }
    return count;
  };

  const s = "Hello World   ";
  const s1 = "a";

  console.log(lengthOfLastWord(s));
})();

(function () {
  /**
   * 计算字符串中最后一个单词的长度
   * @param {string} s 输入的字符串
   * @return {number} 返回最后一个单词的长度
   */
  var lengthOfLastWord = function (s) {
    let count = 0;
    let i = s.length - 1;

    // 从末尾开始，首先跳过所有的空格
    while (i >= 0 && s[i] === " ") {
      i--;
    }

    // 继续向左遍历，计算最后一个单词的长度
    while (i >= 0 && s[i] !== " ") {
      count++;
      i--;
    }

    return count;
  };
})();
