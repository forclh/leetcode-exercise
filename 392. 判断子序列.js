/**
 * 判断字符串s是否为字符串t的子序列
 * 子序列指的是可以通过删除某些字符（也可以不删除）后，不改变字符的相对位置，得到的新字符串
 * @param {string} s - 需要判断的子序列
 * @param {string} t - 原始字符串
 * @return {boolean} - 如果s是t的子序列，返回true；否则返回false
 */
var isSubsequence = function (s, t) {
  // 初始化两个指针i和j，分别指向字符串t和s的当前字符
  let i = 0;
  let j = 0;

  // 遍历字符串t
  for (; i < t.length; i++) {
    // 如果s为空或者s中当前字符与t中当前字符相等，则移动s的指针j
    if (s[j] === t[i]) {
      j++;
    }
  }

  // 如果j等于s的长度，说明s中的每个字符都在t中按顺序出现了，即s是t的子序列
  if (j === s.length) {
    return true;
  }

  // 如果j不等于s的长度，说明s不是t的子序列
  return false;
};

const s = "abc";
const t = "ahbgdc";
console.log(isSubsequence(s, t));
