(function () {
  /**
   * 递归
   * @param {number[]} nums - 输入的房屋金额数组
   * @return {number} - 可以抢夺的最大金额
   */
  var rob = function (nums) {
    // 如果没有房屋，返回0
    if (nums.length <= 0) {
      return 0;
    }
    // 递归计算最大金额：要么不抢当前房屋，继续考虑下一个房屋；要么抢当前房屋，然后考虑隔一个房屋之后的房屋
    return Math.max(rob(nums.slice(1)), rob(nums.slice(2)) + nums[0]);
  };
})();

(function () {
  /**
   * 记忆化递归
   * @param {number[]} nums - 输入的房屋金额数组
   * @return {number} - 可以抢夺的最大金额
   */
  var rob = function (nums) {
    // 创建一个数组用于存储中间结果，初始化为-1表示未计算过
    const memo = new Array(nums.length).fill(-1);
    // 调用辅助函数从第0个房屋开始计算
    return helper(0, nums, memo);
  };

  /**
   * 辅助递归函数
   * @param {number} n - 当前房屋的索引
   * @param {number[]} nums - 输入的房屋金额数组
   * @param {number[]} memo - 存储中间结果的数组
   * @return {number} - 从第n个房屋开始可以抢夺的最大金额
   */
  var helper = function (n, nums, memo) {
    // 如果当前索引超出数组长度，返回0
    if (n >= nums.length) {
      return 0;
    }
    // 如果当前结果已经计算过，直接返回存储的结果
    if (memo[n] !== -1) {
      return memo[n];
    }

    // 计算当前房屋的最大金额：要么不抢当前房屋，继续考虑下一个房屋；要么抢当前房屋，然后考虑隔一个房屋之后的房屋
    memo[n] = Math.max(
      helper(n + 1, nums, memo),
      helper(n + 2, nums, memo) + nums[n]
    );
    // 返回计算结果并存储到memo数组中
    return memo[n];
  };
})();

(function () {
  /**
   * 动态规划
   * @param {number[]} nums - 输入的房屋金额数组
   * @return {number} - 可以抢夺的最大金额
   */
  var rob = function (nums) {
    // 如果没有房屋，返回0
    if (nums.length === 0) return 0;
    // 如果只有一个房屋，返回该房屋的金额
    if (nums.length === 1) return nums[0];

    // dp[i] 表示在第 0 到第 i 个房屋中能够抢劫的最大金钱
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0]; // 第一个房屋的最大金额就是其本身的金额
    dp[1] = Math.max(nums[0], nums[1]); // 前两个房屋中选择金额较大的一个

    // 从第三个房屋开始计算最大金额
    for (let i = 2; i < nums.length; i++) {
      // 计算当前房屋的最大金额：要么不抢当前房屋，取前一个房屋的最大金额；要么抢当前房屋，加上前两个房屋的最大金额
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    // 返回最后一个房屋的最大金额
    return dp[nums.length - 1];
  };
})();

(function () {
  /**
   * 动态规划(优化版)
   * @param {number[]} nums - 输入的房屋金额数组
   * @return {number} - 可以抢夺的最大金额
   */
  var rob = function (nums) {
    // 如果没有房屋，返回0
    if (nums.length === 0) return 0;
    // 如果只有一个房屋，返回该房屋的金额
    if (nums.length === 1) return nums[0];
    // 初始化第一个房屋的金额
    let first = nums[0];
    // 初始化前两个房屋中较大的金额
    let second = Math.max(nums[0], nums[1]);
    // 遍历剩余的房屋
    for (let i = 2; i < nums.length; i++) {
      // 临时存储当前的second值
      let temp = second;
      // 更新second为当前最大值，即要么不抢当前房屋，要么抢当前房屋加上之前不相邻房屋的最大值
      second = Math.max(second, first + nums[i]);
      // 更新first为上一个second值
      first = temp;
    }
    // 返回最终可以抢夺的最大金额
    return second;
  };

  const nums = [1, 2, 3, 1];
  console.log(rob(nums));
})();
