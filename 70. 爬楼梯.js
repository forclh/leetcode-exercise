(function () {
  /**
   * 动态规划解法
   * @param {number} n - 楼梯的阶数
   * @return {number} - 到达第 n 阶的方法总数
   */
  var climbStairs = function (n) {
    // 如果楼梯阶数小于2，直接返回阶数本身
    if (n < 2) {
      return n;
    }
    // 初始化动态规划数组，长度为 n+1，初始值为0
    const dp = new Array(n + 1).fill(0);
    // 第1阶只有1种方法
    dp[1] = 1;
    // 第2阶有2种方法
    dp[2] = 2;
    // 从第3阶开始，每一步的方法数等于前两步方法数之和
    for (let i = 3; i < dp.length; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    // 返回到达第 n 阶的方法总数
    return dp[n];
  };
})();

(function () {
  /**
   * 动态规划解法优化：只保留前两个值
   * @param {number} n - 楼梯的阶数
   * @return {number} - 到达第 n 阶的方法总数
   */
  var climbStairs = function (n) {
    // 如果楼梯阶数小于2，直接返回阶数本身
    if (n < 2) {
      return n;
    }
    // 初始化前两个值
    let a = 1; // 第1阶的方法数
    let b = 2; // 第2阶的方法数
    // 从第3阶开始计算，每一步的方法数等于前两步方法数之和
    for (let i = 3; i <= n; i++) {
      // 计算当前阶的方法数
      b = a + b;
      // 更新前一个值
      a = b - a;
    }
    // 返回到达第 n 阶的方法总数
    return b;
  };
})();
