(function () {
  /**
   * @param {string} pattern
   * @param {string} s
   * @return {boolean}
   */
  var wordPattern = function (pattern, s) {
    const sList = s.split(" ");
    if (sList.length !== pattern.length) return false;
    const s2pMap = new Map();
    const p2sMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
      if (p2sMap.has(pattern[i]) && p2sMap.get(pattern[i]) !== sList[i]) {
        return false;
      } else if (s2pMap.has(sList[i]) && s2pMap.get(sList[i]) !== pattern[i]) {
        return false;
      } else {
        p2sMap.set(pattern[i], sList[i]);
        s2pMap.set(sList[i], pattern[i]);
      }
    }

    return true;
  };

  // const pattern = "abba";
  // const s = "dog dog dog dog";

  // console.log(wordPattern(pattern, s));
})();

(function () {
  /**
   * 判断字符串 s 中的单词是否能与模式字符串 pattern 中的字符形成一一对应的关系。
   *
   * @param {string} pattern - 模式字符串，其中每个字符代表一个单词模式。
   * @param {string} s - 输入字符串，由多个单词组成，单词之间以空格分隔。
   * @return {boolean} - 如果 s 中的单词能够与 pattern 中的字符形成一一对应的关系，则返回 true；否则返回 false。
   */
  var wordPattern = function (pattern, s) {
    // 将输入字符串 s 按空格分割成单词数组
    const sList = s.split(" ");

    // 如果单词数组的长度与模式字符串的长度不同，直接返回 false
    if (sList.length !== pattern.length) return false;

    // 创建两个映射表，分别存储从模式字符到单词的映射和从单词到模式字符的映射
    const s2pMap = new Map();
    const p2sMap = new Map();

    // 遍历模式字符串中的每个字符及其对应的单词
    for (let i = 0; i < pattern.length; i++) {
      const pStr = pattern[i];
      const sStr = sList[i];

      // 如果当前模式字符没有在 p2sMap 中出现过，则将其与当前单词建立映射关系
      if (!p2sMap.has(pStr)) {
        p2sMap.set(pStr, sStr);
      }
      // 如果当前模式字符已经存在映射关系，但映射的单词与当前单词不同，则返回 false
      else if (p2sMap.get(pStr) !== sStr) {
        return false;
      }

      // 如果当前单词没有在 s2pMap 中出现过，则将其与当前模式字符建立映射关系
      if (!s2pMap.has(sStr)) {
        s2pMap.set(sStr, pStr);
      }
      // 如果当前单词已经存在映射关系，但映射的模式字符与当前模式字符不同，则返回 false
      else if (s2pMap.get(sStr) !== pStr) {
        return false;
      }
    }

    // 如果所有检查都通过，则返回 true
    return true;
  };

  const pattern = "abba";
  const s = "dog dog dog dog";

  console.log(wordPattern(pattern, s));
})();
