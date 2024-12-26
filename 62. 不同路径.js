(function () {
  /**
   * 动态规划
   * @param {number} m
   * @param {number} n
   * @return {number}
   */
  var uniquePaths = function (m, n) {
    // 创建一个m行n列的dp数组，dp[i,j]表示到达（i,j）的路径数
    const dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }

    return dp[m - 1][n - 1];
  };
  // console.log(uniquePaths(7, 3));
})();

(function () {
  /**
   * 动态规划(空间优化)
   * @param {number} m
   * @param {number} n
   * @return {number}
   */
  var uniquePaths = function (m, n) {
    const dp = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[j] += dp[j - 1];
      }
    }
    return dp[n - 1];
  };
})();

(function () {
  /**
   * 记忆化递归
   * @param {number} m
   * @param {number} n
   * @return {number}
   */
  var uniquePaths = function (m, n) {
    const memo = new Map();
    return helper(m - 1, n - 1, memo);
  };

  const helper = (i, j, memo) => {
    // 将坐标转换为字符串形式作为键
    const key = `${i},${j}`;
    if (i === 0 || j === 0) return 1;
    if (memo.has(key)) return memo.get(key);
    const count = helper(i - 1, j, memo) + helper(i, j - 1, memo);
    memo.set(key, count);
    return count;
  };
  // helper函数在调用之前已经初始化了
  console.log(uniquePaths(7, 3));
})();
