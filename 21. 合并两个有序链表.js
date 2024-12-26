//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 合并两个有序链表
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * @param {ListNode} list1 第一个有序链表的头节点
 * @param {ListNode} list2 第二个有序链表的头节点
 * @return {ListNode} 合并后的有序链表的头节点
 */
var mergeTwoLists = function (list1, list2) {
  // 创建一个虚拟头节点，方便后续操作
  let prehead = new ListNode(-1);
  // 初始化一个指针，用于构建合并后的链表
  let prev = prehead;

  // 遍历两个链表，直到其中一个链表为空
  while (list1 !== null && list2 !== null) {
    // 比较两个链表当前节点的值，将较小的节点接到prev指针后
    if (list1.val <= list2.val) {
      prev.next = list1;
      // 移动list1指针到下一个节点
      list1 = list1.next;
    } else {
      prev.next = list2;
      // 移动list2指针到下一个节点
      list2 = list2.next;
    }
    // 移动prev指针到下一个节点，用于继续构建合并后的链表
    prev = prev.next;
  }

  // 将剩余的链表接到prev指针后
  prev.next = list1 === null ? list2 : list1;

  // 返回合并后的链表的头节点，即虚拟头节点的下一个节点
  return prehead.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(mergeTwoLists(list1, list2));
