(function () {
  /**
   * 暴力法
   * @param {number[]} height
   * @return {number}
   */
  var maxArea = function (height) {
    let res = 0;
    for (let i = 0; i < height.length; i++) {
      for (j = i + 1; j < height.length; j++) {
        res = Math.max(res, Math.min(height[i], height[j]) * (j - i));
      }
    }
    return res;
  };
})();

(function () {
  /**
   * 双指针法
   * @param {number[]} height
   * @return {number}
   */
  var maxArea = function (height) {
    let res = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
      if (height[left] <= height[right]) {
        res = Math.max(res, height[left] * (right - left));
        left++;
      } else {
        res = Math.max(res, height[right] * (right - left));
        right--;
      }
    }
    return res;
  };
})();
