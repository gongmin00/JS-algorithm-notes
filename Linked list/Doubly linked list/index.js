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
    if (this.length === 0) {
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
  DoublyLinkedList.prototype.toString = function () {
    return this.forwardString();
  };
  // 2.1 forwardString方法, 从头到尾遍历
  DoublyLinkedList.prototype.forwardString = function () {
    var currNode = this.head;
    var resultString = "";
    while (currNode) {
      resultString += currNode.element + " ";
      currNode = currNode.next;
    }
    return resultString;
  };
  // 2.2 backwardString方法，从尾到头遍历
  DoublyLinkedList.prototype.backwardString = function () {
    var currNode = this.tail;
    var resultString = "";
    while (currNode) {
      resultString += currNode.element + " ";
      currNode = currNode.prev;
    }
    return resultString;
  };
  // 3 insert方法
  DoublyLinkedList.prototype.insert = function (position, element) {
    // 越界判断
    if (position < 0 || position > this.length) return false;
    var newNode = new NewNode(element);
    // 链表是空的时候
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 插入head的时候
      if (position === 0) {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      // 插入tail位置的时候，相当于append
      else if (position === this.length) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      } else {
        // 插入中间位置
        var currNode = this.head;
        var index = 0;
        while (index++ < position) {
          currNode = currNode.next;
        }
        newNode.next = currNode;
        newNode.prev = currNode.prev;
        currNode.prev.next = newNode;
        currNode.prev = newNode;
      }
    }
  };
  // get方法 根据传入的postion拿到对应的element值
  DoublyLinkedList.prototype.get = function (position) {
    // 越界判断
    if (position < 0 || position >= this.length) return false;
    var mid = this.length / 2;
    // 判断position 大小来决定 从头或者从尾部开始遍历
    if (mid > position) {
      var i = 0;
      var currNode = this.head;
      while (i++ < position) {
        currNode = currNode.next;
      }
      return currNode.element;
    } else {
      var j = this.length - 1;
      var currRevNode = this.tail;
      while (j-- < position) {
        currRevNode = currRevNode.prev;
      }
      return currRevNode.element;
    }
  };
  // indexOf方法根据传入的element返回index,如果没有返回-1
  DoublyLinkedList.prototype.indexOf = function (element) {
    var currNode = this.head;
    var index = 0;
    while (currNode && currNode.element !== element) {
      currNode = currNode.next;
      index++;
    }
    // 当没有对应element的时候length会等于index
    if (index === this.length) {
      return -1;
    } else {
      return index;
    }
  };
  // update方法 根据传入的postion 和element更新对应的节点
  DoublyLinkedList.prototype.update = function (position, element) {
    // 越界判断
    if (position < 0 || position >= this.length) {
      alert("no such element");
    }
    var currNode = this.head;
    var i = 0;
    while (i++ < position) {
      currNode = currNode.next;
    }
    currNode.element = element;
  };
  // removeAt(position)方法，根据position 删除一个节点,并且返回删除节点内容

  DoublyLinkedList.prototype.removeAt = function (position) {
    // 越界判断
    if (position < 0 || position >= this.length || this.length === 0) {
      alert("no such element");
    }
    // 把currNode变量提升到removeAt这个方法全局
    var currNode = this.head;
    // 只有一个节点的情况
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // 删除第一个节点
      if (position === 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      }
      // 删除最后一个节点的情况
      else if (position === this.length - 1) {
        currNode = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        var index = 0;
        while (index++ < position) {
          currNode = currNode.next;
        }
        //这里只要管目标节点相邻的节点指向就可以，目标节点因为删除了所以它的指向并不重要
        currNode.next.prev = currNode.prev;
        currNode.prev.next = currNode.next;
      }
    }
    this.length -= 1;
    return currNode.element;
  };
  // remove 方法根据element删除节点
  DoublyLinkedList.prototype.remove = function (element) {
    var position = this.indexOf(element);
    return this.removeAt(position);
  };
}
var test = new DoublyLinkedList();
test.append("Min00");
test.append("Min01");
test.append("Min02");
test.insert(1, "karen");
test.get(2);
alert(test.forwardString());
