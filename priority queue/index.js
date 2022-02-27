//封装优先队列，本质上是一个对象数组[{},{},{}]

function PriorityQueue() {
  //属性
  this.items = [];
  function PQElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  //方法
  //1. 按优先级插入数据
  PriorityQueue.prototype.enqueue = function (element, priority) {
    var queueElement = new PQElement(element, priority);
    //第一种情况，队列是空
    if (this.items.length === 0) {
      this.items.push(queueElement);
    } else {
      //第二种情况，按优先级插入队列
      var addLastItem = true;
      for (var i = 0; i < this.items.length; i++) {
        if (priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          addLastItem = false;
          break;
        }
      }
    }
    //第三种情况，新元素优先级最低，插入队列末尾
    if (addLastItem) {
      this.items.push(queueElement);
    }
  };
  //2. 删除队列第一位数据，并返回删除的数据
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift();
  };
  //3. 查看第一个数据
  PriorityQueue.prototype.front = function () {
    return this.items[0];
  };
  //4. 判断队列是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  //5. 返回队列size
  PriorityQueue.prototype.size = function () {
    return this.items.length;
  };
  //6. 将优先队列转换成字符
  PriorityQueue.prototype.toString = function () {
    let resultString = "";
    for (i = 0; i < this.items.length; i++) {
      resultString =
        resultString + this.items[i].element + this.items[i].priority + " ";
    }
    return resultString;
  };
}

var test = new PriorityQueue();
test.enqueue("Min", 100);
test.enqueue("Karen", 200);
test.enqueue("Mia", 50);
console.log(test.toString());
