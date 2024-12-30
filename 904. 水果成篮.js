/**
 * 滑动窗口法
 * @param {number[]} fruits 水果树的水果种类数组
 * @return {number} 返回最多可以收集的水果数量
 */
var totalFruit = function (fruits) {
  let result = 0; // 结果变量，记录最大长度
  let kind = new Map(); // 使用 Map 记录每种水果的数量
  let start = 0; // 滑动窗口的起始位置
  for (let end = 0; end < fruits.length; end++) {
    let currentKind = fruits[end]; // 当前水果种类
    if (!kind.has(currentKind)) {
      kind.set(currentKind, 1); // 如果 Map 中没有当前种类，添加并设置数量为 1
    } else {
      kind.set(currentKind, kind.get(currentKind) + 1); // 如果 Map 中已有当前种类，数量加 1
    }

    while (kind.size > 2) {
      // 当 Map 中的种类超过 2 时，调整窗口起始位置
      let num = kind.get(fruits[start]) - 1; // 获取起始位置水果的数量并减 1
      if (num === 0) {
        kind.delete(fruits[start]); // 如果数量为 0，删除该种类
      } else {
        kind.set(fruits[start], num); // 否则更新数量
      }
      start++; // 窗口起始位置右移
    }
    result = Math.max(result, end - start + 1); // 更新结果为当前窗口长度的最大值
  }
  return result; // 返回结果
};

const fruits = [1, 2, 3, 2, 2];
console.log(totalFruit(fruits)); // 4
