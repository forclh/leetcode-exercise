/**
 * 二分法
 * @param {Number} num 正整数
 * @returns 是否是完全平方数
 */
var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (mid * mid === num) {
      return true;
    } else if (mid * mid > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
