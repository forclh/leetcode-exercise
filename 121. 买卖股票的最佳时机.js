(function () {
  /**
   * 计算最大利润
   *
   * 该函数接受一个代表股票每日价格的数组，并返回可能获得的最大利润
   * 它通过追踪最低价格和到目前为止的最大利润来工作，不断更新这两个值以找到最佳买卖时机
   *
   * @param {number[]} prices - 一个包含每日股票价格的数组
   * @return {number} - 返回可能获得的最大利润
   */
  var maxProfit = function (prices) {
    // 初始化最低价格为无穷大，表示尚未找到任何股票的最低价格
    let min_price = Infinity;
    // 初始化最大利润为0，表示尚未开始计算利润
    let max_profit = 0;

    // 遍历股票价格数组
    for (const price of prices) {
      // 如果当前价格低于已知的最低价格，则更新最低价格
      if (price < min_price) {
        min_price = price;
      } else {
        // 否则，计算当前价格与最低价格的差值，并更新最大利润
        max_profit = Math.max(max_profit, price - min_price);
      }
    }

    // 返回最大利润
    return max_profit;
  };
})();
