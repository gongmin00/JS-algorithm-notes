// 链表的封装
// 这个方法封装的时候head是第一个节点。 空链接length是0, position0是从head（第一个节点）开始

function LinkedList() {
  //内部节点类
  function Node(element) {
    this.element = element;
    this.next = null;
  }
  //属性
  this.head = null;
  this.length = 0;
  //方法
  //1. append方法在链表末尾追加一个节点
  LinkedList.prototype.append = function (element) {
    var newNode = new Node(element);
    //链表是空的时候把第一个数据赋值给this.head
    if (this.length === 0) {
      this.head = newNode;
    }
    //链表不为空的时候
    else {
      var currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
    this.length += 1;
  };
  //2. diaplayAll方法展示所有的链表数据
  LinkedList.prototype.displayAll = function () {
    var currNode = this.head;
    var elementList = "";
    while (currNode) {
      elementList += currNode.element + " ";
      currNode = currNode.next;
    }
    return elementList;
  };
  // 3. insert方法根据提供的postion:number在链表中间插入数据, 这里相当于把在position上原节点往后挪一个单位
  LinkedList.prototype.insert = function (position, element) {
    // 当position值小于0或者大于length时返回false，position可以等于length就相当于在链表末尾添加数据
    if (position < 0 || position > this.length) return false;
    var newNode = new Node(element);
    // 当直接在链表头插入数据时
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      //当在链表中间和末尾插入数据的时候
      var currNode = this.head;
      var prevNode = null;
      for (i = 0; i < position + 1; i++) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      newNode.next = currNode;
      prevNode.next = newNode;
    }
    this.length += 1;
    return true;
  };
  // 3. getElement方法，通过position参数拿到对应的链表值
  LinkedList.prototype.getElement = function (position) {
    var currNode = this.head;
    var i = 0;
    while (i++ < position) {
      currNode = currNode.next;
    }
    return currNode.element;
  };
  // 4. indexOf方法，通过输入element参数拿到对应的position值,如果没有这个element返回-1
  LinkedList.prototype.indexOf = function (element) {
    var currNode = this.head;
    var index = 0;
    // 当没有对应element的时候currNode会是null
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
  // 5. update方法，根据提供的position修改element内容
  LinkedList.prototype.update = function (position, element) {
    if (position < 0 || position >= this.length) {
      alert("no such element");
    }
    var currNode = this.head;
    var index = 0;
    while (index++ < position) {
      currNode = currNode.next;
    }
    currNode.element = element;
  };
  // 6. removeAt(position)方法 根据提供的position参数删除对应节点
  LinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) {
      alert("no such node");
      return null;
    }
    if (position === 0) {
      this.head = this.head.next;
    } else {
      var currNode = this.head;
      var prevNode = null;
      var index = 0;
      while (index++ < position) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      prevNode.next = currNode.next;
    }
    this.length -= 1;
  };
  // 7. remove(element)方法 根据提供的element参数删除对应节点
  LinkedList.prototype.remove = function (element) {
    // var index = 0;
    // var currNode = this.head;
    // var prevNode = null
    // while (currNode && currNode.element !== element) {
    //   prevNode = currNode
    //   currNode = currNode.next;
    //   index++;
    // }
    // if (index === this.length) {
    //   alert("no such element");
    // } else {
    //   prevNode.next=currNode.next
    // }
    var position = this.indexOf(element);
    return this.removeAt(position);
  };
}
var test = new LinkedList();
test.append("Min");
test.append("Min02");
test.append("Min03");
test.removeAt(3);
alert(test.displayAll());
