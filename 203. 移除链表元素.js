/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 删除链表中等于给定值 val 的所有节点
 */
var removeElements = function (head, val) {
  // 创建一个虚拟头节点，指向链表的头节点
  let dummyHead = new ListNode(0, head);
  let current = dummyHead;
  // 遍历链表
  while (current.next !== null) {
    // 如果当前节点的下一个节点的值等于给定值，则删除下一个节点
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      // 否则，移动到下一个节点
      current = current.next;
    }
  }
  // 返回新的链表头节点
  return dummyHead.next;
};
