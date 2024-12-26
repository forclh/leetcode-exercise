(function () {
  /**
   * AK手写版
   * @param {string} ransomNote
   * @param {string} magazine
   * @return {boolean}
   */
  var canConstruct = function (ransomNote, magazine) {
    const strMap = {};
    for (const s of magazine) {
      if (!strMap[s]) {
        strMap[s] = 1;
      } else {
        strMap[s]++;
      }
    }
    for (const s of ransomNote) {
      if (!strMap[s]) {
        return false;
      } else {
        strMap[s]--;
        if (strMap[s] < 0) {
          return false;
        }
      }
    }
    return true;
  };

  const ransomNote = "aa";
  const magazine = "aab";
  console.log(canConstruct(ransomNote, magazine));
})();

(function () {
  /**
   * 判断是否可以使用杂志上的字符构造赎金信
   *
   * @param {string} ransomNote 赎金信字符串
   * @param {string} magazine 杂志字符串
   * @return {boolean} 如果可以构造返回true，否则返回false
   */
  var canConstruct = function (ransomNote, magazine) {
    // 创建一个对象用于统计杂志上每个字符出现的次数
    const strMap = {};

    // 遍历杂志字符串，统计每个字符的出现次数
    for (const s of magazine) {
      strMap[s] = (strMap[s] || 0) + 1;
    }

    // 遍历赎金信字符串，检查每个字符是否可以在杂志上找到
    for (const s of ransomNote) {
      // 如果杂志上没有该字符或者字符已经用完，则无法构造赎金信
      if (!strMap[s] || strMap[s] <= 0) {
        return false;
      }
      // 找到字符后，减少相应字符的库存
      strMap[s]--;
    }

    // 如果所有字符都可以在杂志上找到，并且足够使用，返回true
    return true;
  };

  const ransomNote = "aa";
  const magazine = "aab";
  console.log(canConstruct(ransomNote, magazine));
})();
