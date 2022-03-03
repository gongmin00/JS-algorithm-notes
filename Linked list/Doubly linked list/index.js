// 双向链表封装， head 是第一个节点，tail 是最后一个节点
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
    // 当链表为空时，head和tail等于新节点
    if ((this.length = 0)) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  };
  // 2. toString方法把链表转为字符串
  DoublyLinkedList.prototype.toString = function () {};
  // 2.1 forwardString方法
  DoublyLinkedList.prototype.forwardString = function () {};
  // 2.2 backwardString方法
  DoublyLinkedList.prototype.backwardString = function () {};
}
var test = new DoublyLinkedList();
test.append("Min00");
test.append("Min01");
test.append("Min02");
