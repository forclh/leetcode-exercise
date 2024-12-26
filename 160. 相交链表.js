//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 双指针法
 * @param {ListNode} headA - 第一个链表的头节点
 * @param {ListNode} headB - 第二个链表的头节点
 * @return {ListNode} - 返回第一个交点的节点，如果没有交点则返回 null
 */
var getIntersectionNode = function (headA, headB) {
  // 初始化两个指针 p1 和 p2 分别指向两个链表的头部
  let p1 = headA;
  let p2 = headB;

  // 循环直到 p1 和 p2 指向同一个节点（即找到交点）或都为 null（即没有交点）
  while (p1 !== p2) {
    // p1 如果到达链表尾部，则重置为 headB；否则移动到下一个节点
    p1 = p1 ? p1.next : headB;
    // p2 如果到达链表尾部，则重置为 headA；否则移动到下一个节点
    p2 = p2 ? p2.next : headA;
  }

  // 返回 p1（或 p2），如果找到交点则为交点节点，否则为 null
  return p1;
};

/**
 * 暴力法
 * @param {ListNode} headA 第一个链表的头节点
 * @param {ListNode} headB 第二个链表的头节点
 * @return {ListNode} 返回交点节点，如果没有交点则返回null
 */
var getIntersectionNode = function (headA, headB) {
  // 从第一个链表的头节点开始遍历
  let current = headA;
  // 遍历第一个链表的每个节点
  while (current !== null) {
    // 检查当前节点是否是两个链表的交点
    if (helper(current, headB)) {
      // 如果是交点，返回当前节点
      return current;
    } else {
      // 如果不是交点，移动到下一个节点
      current = current.next;
    }
  }
  // 如果没有找到交点，返回null
  return null;
};

/**
 * 判断给定的node是否存在于以head为起点的链表中
 * @param {Object} node - 需要查找的节点
 * @param {Object} head - 链表的头节点
 * @returns {boolean} - 如果node存在于链表中，则返回true，否则返回false
 */
function helper(node, head) {
  // 初始化当前节点为链表的头节点
  let current = head;

  // 遍历链表，直到找到匹配的节点或到达链表末尾
  while (current !== null) {
    // 如果当前节点与需要查找的节点匹配，返回true
    if (node === current) {
      return true;
    } else {
      // 移动到链表的下一个节点
      current = current.next;
    }
  }

  // 如果遍历完整个链表都没有找到匹配的节点，返回false
  return false;
}
