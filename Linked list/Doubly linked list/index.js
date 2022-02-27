// 双向链表封装
function DoublyLinkedList() {
  // 属性
  this.head = null;
  this.tail = null;
  this.length = 0;

  // 内部类节点
  function NewNode(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
  // 1. append方法在链表末尾加上一个数据
  DoublyLinkedList.prototype.append = function (element) {
    var newNode = new NewNode(element);
    if ((this.length = 0)) {
      this.head = newNode;
      this.tail = newNode;
    }
  };
}
