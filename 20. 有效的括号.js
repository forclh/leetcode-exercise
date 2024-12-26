/**
 * 检查字符串中的括号是否有效。字符串中的括号必须以正确的顺序关闭。
 * 例如，"()"、"()[]{}"都是有效的，但"(]"和"([)]"无效。
 *
 * @param {string} s 待检查的字符串，包含括号字符
 * @return {boolean} 如果字符串中的括号有效，则返回true；否则返回false
 */
var isValid = function (s) {
  // 括号映射，用于定义右括号对应的左括号
  let bracketMap = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  // 初始化栈，用于临时存储左括号
  let stack = [];
  for (const str of s) {
    if (bracketMap[str]) {
      // 当前字符是右括号
      // 如果栈为空或栈顶元素不是当前右括号对应的左括号，则字符串无效
      if (stack.length === 0 || stack.pop() !== bracketMap[str]) {
        return false;
      }
    } else {
      // 当前字符是左括号，将其压入栈中
      stack.push(str);
    }
  }
  // 如果栈为空，则说明所有括号都正确匹配，字符串有效
  return stack.length === 0;
};
