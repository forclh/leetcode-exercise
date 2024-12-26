(function () {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const s2c = new Map();
    for (let i = 0; i < s.length; i++) {
      if (!s2c.has(s[i])) {
        s2c.set(s[i], 1);
      } else {
        s2c.set(s[i], s2c.get(s[i]) + 1);
      }
    }
    for (let i = 0; i < t.length; i++) {
      if (!s2c.get(t[i])) {
        return false;
      } else {
        let count = s2c.get(t[i]);
        count--;
        if (count < 0) {
          return false;
        }
        s2c.set(t[i], count);
      }
    }
    return true;
  };

  // const s = "anagram";
  // const t = "nagaram";
  // console.log(isAnagram(s, t));
})();
(function () {
  /**
   * 检查两个字符串是否为异位词。
   * 异位词是指两个字符串可以通过重新排列字符互相转换，即每个字符出现的次数相同。
   *
   * @param {string} s - 第一个字符串
   * @param {string} t - 第二个字符串
   * @return {boolean} - 如果两个字符串是异位词则返回true，否则返回false
   */
  var isAnagram = function (s, t) {
    // 如果两个字符串长度不同，直接返回false
    if (s.length !== t.length) return false;

    // 创建一个长度为26的数组，用于记录每个字母的出现次数
    const table = new Array(26).fill(0);

    // 遍历第一个字符串，统计每个字母的出现次数
    for (let i = 0; i < s.length; i++) {
      table[s.codePointAt(i) - "a".codePointAt(0)]++;
    }

    // 遍历第二个字符串，减少每个字母的出现次数
    for (let i = 0; i < t.length; i++) {
      const result = --table[t.codePointAt(i) - "a".codePointAt(0)];
      // 如果某个字母的出现次数小于0，说明两个字符串不是异位词
      if (result < 0) {
        return false;
      }
    }

    // 如果所有字母的出现次数都匹配，返回true
    return true;
  };

  const s = "rat";
  const t = "car";
  console.log(isAnagram(s, t));
})();
