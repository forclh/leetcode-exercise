/**
 * 快慢指针
 * @param {number} n - 输入的数字
 * @return {boolean} - 返回一个布尔值，表示该数字是否为快乐数
 */
var isHappy = function (n) {
  // 计算一个数字的各个位上的平方和
  function sumOfSqure(n) {
    let sum = 0;
    while (n > 0) {
      let digit = n % 10; // 获取当前数字的最后一位
      sum += digit ** 2; // 将该位的平方加到总和中
      n = Math.floor(n / 10); // 去掉最后一位
    }
    return sum; // 返回平方和
  }

  let slow = n; // 慢指针初始化为输入数字
  let fast = n; // 快指针初始化为输入数字

  // 使用快慢指针法检测循环
  do {
    slow = sumOfSqure(slow); // 慢指针每次移动一步
    fast = sumOfSqure(fast); // 快指针每次移动两步
    fast = sumOfSqure(fast);
  } while (slow !== fast && fast !== 1); // 当快慢指针相遇或快指针到达1时退出循环

  return fast === 1; // 如果快指针最终指向1，则输入数字是快乐数
};

console.log(isHappy(19));
