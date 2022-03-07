// 集合的封装
function Set() {
  // 属性
  this.items = {};
  // add往集合里面添加一个元素
  Set.prototype.add = function (value) {
    // 判断当前集合是否已经有元素value
    if (this.has(value)) {
      return false;
    } else {
      this.items[value] = value;
      return true;
    }
  };
  // has方法判断集合里面是否有value这个元素
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
  };
}
