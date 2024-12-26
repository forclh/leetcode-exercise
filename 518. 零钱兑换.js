/**
 * 动态规划
 * @param {number} amount - 目标金额
 * @param {number[]} coins - 可用硬币面额数组
 * @return {number} - 组成目标金额的不同组合数
 */
var change = function (amount, coins) {
  // dp[i] 表示组成金额 i 的组合数
  const dp = new Array(amount + 1).fill(0);
  // 初始化 dp[0] 为 1，因组成金额 0 的唯一方法是使用 0 个硬币
  dp[0] = 1;
  // 遍历每一种硬币
  for (const coin of coins) {
    // 更新 dp 数组，从当前硬币面额开始
    for (let i = coin; i <= amount; i++) {
      // 当前金额的组合数等于所有不使用当前硬币的组合数的和
      dp[i] += dp[i - coin];
    }
  }
  // 返回组成目标金额的组合数
  return dp[amount];
};
