/**
 * 二分查找
 * 此函数旨在寻找一个数的平方根的最近整数，采用二分查找的方式提高效率
 * @param {number} x 需要计算平方根的数
 * @return {number} 返回输入数的平方根的整数部分
 */
var mySqrt = function (x) {
  let start = 0;
  let end = x;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // 当start和end相等或相邻时，表示已经找到最接近的整数(只剩两个数时可能存在死循环的情况)
    if (start === end || start + 1 === end) break;
    // 根据mid的平方与x的大小关系，调整搜索范围
    if (mid * mid <= x) {
      start = mid;
    } else {
      end = mid - 1;
    }
  }
  // 最后检查end的平方是否小于等于x，以确定最终结果
  if (end * end <= x) {
    return end;
  } else {
    return start;
  }
};
