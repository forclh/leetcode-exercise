//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * 删除排序链表中的重复元素
 * 此函数通过遍历链表，当发现当前节点的值与下一个节点的值相同时，就跳过下一个节点，从而删除重复的节点
 * 这样做是因为链表已经排序，相同的元素必然连续出现
 * @param {ListNode} head - 链表的头节点
 * @return {ListNode} - 删除了重复元素后的链表的头节点
 */
var deleteDuplicates = function (head) {
  // 初始化当前节点为链表的头节点
  let current = head;
  // 遍历链表，直到当前节点或当前节点的下一个节点为空
  while (current !== null && current.next !== null) {
    // 如果当前节点的值与下一个节点的值相同
    if (current.val === current.next.val) {
      // 将当前节点的next指针指向下一个节点的next指针，从而跳过（删除）重复的节点
      current.next = current.next.next;
    } else {
      // 如果当前节点的值与下一个节点的值不同，移动到下一个节点继续检查
      current = current.next;
    }
  }
  // 返回删除了重复元素后的链表的头节点
  return head;
};

// [1,1,2,3,3]
let head = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
);

console.log(deleteDuplicates(head));
