//Queue 常见操作
//构造函数不能是箭头函数
function Queue() {
  this.items = [];
  // 在队列末尾插入数据
  Queue.prototype.enqueue = function (element) {
    this.items.push(element);
  };
  //删除队列第一位数据，并返回删除的数据
  Queue.prototype.dequeue = function () {
    return this.items.shift();
  };
  //查看第一个数据
  Queue.prototype.front = function () {
    return this.items[0];
  };
  //判断队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  //返回队列size
  Queue.prototype.size = function () {
    return this.items.length;
  };
  //将队列转换成字符
  Queue.prototype.toString = function () {
    let resultString = "";
    for (i = 0; i < this.items.length; i++) {
      resultString = resultString + this.items[i] + " ";
    }
    return resultString;
  };
}

var test = new Queue();

//击鼓传花问题, 约瑟夫环问题：剑指 Offer 62. 圆圈中最后剩下的数字。
//0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。
// 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。
var lastRemaining = function (n, m) {
  var originArray = [];
  for (i = 0; i < n; i++) {
    originArray.push(i);
  }
  while (originArray.length > 1) {
    for (j = 0; j < m - 1; j++) {
      originArray.push(originArray.shift());
    }
    originArray.shift();
  }
  if (originArray.length === 1) {
    return originArray[0];
  }
};
//js 解法会超时
