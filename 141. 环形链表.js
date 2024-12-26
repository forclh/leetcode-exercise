/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

(function () {
  /**
   * 哈希表
   * @param {ListNode} head
   * @return {boolean}
   */
  var hasCycle = function (head) {
    let set = new Set(); // 存放遍历过的节点
    while (head) {
      if (set.has(head)) return true; // 如果有相同节点则表示存在环
      set.add(head);
      head = head.next;
    }
    return false;
  };
})();

(function () {
  /**
   * 双指针(快慢指针)
   * @param {ListNode} head
   * @return {boolean}
   */
  var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) {
        return true;
      }
    }
    return false;
  };
})();
