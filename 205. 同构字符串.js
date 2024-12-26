(function () {
  /**
   * AK手写版本1
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  var isIsomorphic = function (s, t) {
    const strMap = {};
    for (let i = 0; i < s.length; i++) {
      if (!strMap[s[i]]) {
        strMap[s[i]] = t[i];
      } else {
        if (strMap[s[i]] !== t[i]) {
          return false;
        }
      }
    }
    // 不同字符不能映射到同一个字符上
    if (Object.values(strMap).length !== new Set(t).size) {
      return false;
    }
    return true;
  };

  var s = "badc";
  var t = "baba";

  console.log(isIsomorphic(s, t));
})();

(function () {
  /**
   * 判断两个字符串 s 和 t 是否为同构字符串。
   * 同构字符串意味着可以通过替换 s 中的字符来得到 t，反之亦然。
   * 字符之间存在一对一的对应关系。
   *
   * @param {string} s 第一个字符串
   * @param {string} t 第二个字符串
   * @return {boolean} 如果 s 和 t 是同构字符串则返回 true，否则返回 false
   */
  var isIsomorphic = function (s, t) {
    // 存储从 s 的字符到 t 的字符的映射关系
    const sToT = new Map();
    // 存储从 t 的字符到 s 的字符的映射关系
    const tToS = new Map();

    // 遍历字符串 s 和 t 的字符
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];

      // 如果 s 的字符已经有一个映射关系，但这个映射关系不等于 t 的当前字符，则不是同构字符串
      if (sToT.has(charS) && sToT.get(charS) !== charT) {
        return false;
      } else if (tToS.has(charT) && tToS.get(charT) !== charS) {
        // 如果 t 的字符已经有一个映射关系，但这个映射关系不等于 s 的当前字符，则不是同构字符串
        return false;
      } else {
        // 如果没有映射关系，则创建 s 的字符到 t 的字符的映射关系
        sToT.set(charS, charT);
        // 如果没有映射关系，则创建 t 的字符到 s 的字符的映射关系
        tToS.set(charT, charS);
      }
    }

    // 如果所有字符都成功映射，则 s 和 t 是同构字符串
    return true;
  };

  var s = "badc";
  var t = "baba";
  console.log(isIsomorphic(s, t));
})();
