(function () {
  /**
   * 双指针法
   * 比较两个字符串是否相等，考虑 '#' 代表退格键
   * @param {string} s 第一个字符串
   * @param {string} t 第二个字符串
   * @return {boolean} 如果处理退格后两个字符串相等，则返回true，否则返回false
   */
  var backspaceCompare = function (s, t) {
    // 初始化两个指针分别指向两个字符串的末尾
    let i = s.length - 1;
    let j = t.length - 1;
    // 初始化两个变量用于记录当前字符串中的退格次数
    let skipS = 0;
    let skipT = 0;

    // 当任一字符串还未遍历完时，继续循环
    while (i >= 0 || j >= 0) {
      // 处理字符串s中的退格字符
      while (i >= 0) {
        if (s[i] === "#") {
          skipS++;
          i--;
        } else {
          if (skipS !== 0) {
            skipS--;
            i--;
          } else {
            break;
          }
        }
      }

      // 处理字符串t中的退格字符
      while (j >= 0) {
        if (t[j] === "#") {
          skipT++;
          j--;
        } else {
          if (skipT !== 0) {
            skipT--;
            j--;
          } else {
            break;
          }
        }
      }

      // 如果处理完退格后的字符不相等，则返回false
      if (s[i] !== t[j]) {
        return false;
      } else {
        // 如果当前字符相等，指针向前移动
        i--;
        j--;
      }
    }
    // 如果所有字符都匹配成功，则返回true
    return true;
  };
})();

(function () {
  /**
   * 栈
   * 比较两个字符串是否相等，考虑 '#' 代表退格键
   * @param {string} s 第一个字符串
   * @param {string} t 第二个字符串
   * @return {boolean} 如果处理退格后两个字符串相等，则返回true，否则返回false
   */
  var backspaceCompare = function (s, t) {
    // 辅助函数，用于构建最终的字符串
    function bulid(s) {
      let stack = [];
      for (const i of s) {
        if (i === "#") {
          stack.pop();
        } else {
          stack.push(i);
        }
      }
      return stack.join("");
    }

    // 比较两个字符串处理后的结果是否相同
    return bulid(s) === bulid(t);
  };
})();
