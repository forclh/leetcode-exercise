/**
 * 二分法解决
 * 计算在规定时间内吃完所有香蕉的最小速度
 * @param {number[]} piles - 每堆香蕉的数量数组
 * @param {number} h - 规定的时间内
 * @return {number} - 返回最小的吃香蕉速度
 */
var minEatingSpeed = function (piles, h) {
  // 初始化最小速度为1
  let start = 1;
  // 初始化最大速度为所有堆中最大香蕉数
  let end = Math.max(...piles);
  // 二分搜索合适的速度
  while (start < end) {
    // 计算中间速度
    let mid = Math.floor((start + end) / 2);
    // 判断当前速度是否满足条件
    if (isSpeedOK(mid, piles, h)) {
      // 如果满足，尝试降低速度
      end = mid;
    } else {
      // 如果不满足，尝试提高速度
      start = mid + 1;
    }
  }
  // 返回最终的最小速度
  return start;
};

/**
 * 检查在给定时间内是否能以特定速度吃完所有香蕉
 * @param {number} k 每小时能吃的香蕉数
 * @param {Array<number>} piles 每堆香蕉的数量
 * @param {number} h 可用来吃香蕉的小时数
 * @returns {boolean} 如果能在规定时间内吃完所有香蕉，则返回true；否则返回false
 */
function isSpeedOK(k, piles, h) {
  // 初始化计数器，用于统计以当前速度吃完所有香蕉所需的小时数
  let count = 0;
  // 遍历每堆香蕉
  for (const pile of piles) {
    // 计算并累加每堆香蕉吃完所需的小时数
    // 使用Math.ceil确保即使不能整除也会计为一整个小时
    count += Math.ceil(pile / k);
  }
  // 判断以当前速度吃完所有香蕉所需的小时数是否小于等于可用的小时数
  // 如果是，则说明当前速度是可接受的
  return count <= h;
}
