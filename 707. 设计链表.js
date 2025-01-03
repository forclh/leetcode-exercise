class LinkNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * 单链表 储存头尾节点 和 节点数量
 */
var MyLinkedList = function () {
  this._size = 0;
  this._tail = null;
  this._head = null;
};

/**
 *  获取链表中第 index 个节点的值。如果索引无效，则返回 -1。
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this._size) return null;
  // 创建虚拟头节点
  let cur = new LinkNode(0, this._head);
  // 0 -> head
  while (index-- >= 0) {
    cur = cur.next;
  }
  return cur;
};
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this._size) return -1;
  // 获取当前节点
  return this.getNode(index).val;
};

/**
 * 在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new LinkNode(val, this._head);
  this._head = node;
  this._size++;
  if (!this._tail) {
    this._tail = node;
  }
};

/**
 * 将值为 val 的节点追加到链表的最后一个元素。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new LinkNode(val, null);
  this._size++;
  if (this._tail) {
    this._tail.next = node;
    this._tail = node;
    return;
  }
  this._tail = node;
  this._head = node;
};

/**
 * 在链表中的第 index 个节点之前添加值为 val 的节点。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size) return;
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this._size) {
    this.addAtTail(val);
    return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);
  node.next = new LinkNode(val, node.next);
  this._size++;
};

/**
 * 删除链表中第 index 个节点，如果索引有效。
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this._size) return;
  if (index === 0) {
    this._head = this._head.next;
    // 如果删除的这个节点同时是尾节点，要处理尾节点
    if (index === this._size - 1) {
      this._tail = this._head;
    }
    this._size--;
    return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);
  node.next = node.next.next;
  // 处理尾节点
  if (index === this._size - 1) {
    this._tail = node;
  }
  this._size--;
};

// MyLinkedList.prototype.out = function() {
//     let cur = this._head;
//     const res = [];
//     while(cur) {
//         res.push(cur.val);
//         cur = cur.next;
//     }
// };
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
