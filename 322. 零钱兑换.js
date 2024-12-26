(function () {
  /**
   * 动态规划(自底向上)
   * @param {number[]} coins - 可用硬币面额数组
   * @param {number} amount - 目标金额
   * @return {number} - 组成目标金额所需的最少硬币数，如果无法组成则返回-1
   */
  var coinChange = function (coins, amount) {
    // dp[i]表示组成金额i所需要的最少硬币数
    const dp = new Array(amount + 1).fill(amount + 1); // 初始化dp数组，大小为amount+1，初始值设为amount+1（一个不可能的最大值）
    dp[0] = 0; // 组成金额0所需的硬币数为0
    for (let i = 1; i <= amount; i++) {
      // 遍历从1到amount的所有金额
      for (const coin of coins) {
        // 遍历每一种硬币
        if (i - coin >= 0) {
          // 如果当前金额i大于等于硬币面额coin
          dp[i] = Math.min(dp[i], dp[i - coin] + 1); // 更新dp[i]为使用当前硬币后的最小值
        }
      }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount]; // 如果dp[amount]未被更新，说明无法组成该金额，返回-1；否则返回dp[amount]
  };
})();
