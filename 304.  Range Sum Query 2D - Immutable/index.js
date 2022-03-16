// 二维数组转置
// nums=[[1,2,3],[4,5,6],[7,8,9]] => [[1,4,7],[2,5,8],[3,6,9]]
function MatrixArray() {
  MatrixArray.prototype.transpose = function (nums) {
    for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < i; j++) {
        //j < i是只需要交换一次就好，如果要用j<nums[i].length的话会交换两次，数组等于没有转置
        if (i !== j) {
          var temp = nums[i][j];
          nums[i][j] = nums[j][i];
          nums[j][i] = temp;
        }
      }
    }
    return nums;
  };
  // preSum方法创建一个新二维数组来存储原二维数组的前缀和
  MatrixArray.prototype.preSum = function (nums) {
    var preSumArray = new Array(nums.length + 1)
      .fill(0)
      .map(() => new Array(nums[0].length).fill(0));
    //这里用小于等于是因为要存储的数比nums.length多一位
    for (var i = 1; i <= nums.length; i++) {
      for (var j = 1; j <= nums[0].length; j++) {
        //这里用nums[0].length而不用nums[i].length是因为后者会return undefined
        // 这里的nums[i-1][j-1]和preSumArray的下标是不一样的，nums[i-1][j-1]位置等于preSumArray[i][j]
        preSumArray[i][j] =
          preSumArray[i][j - 1] +
          preSumArray[i - 1][j] -
          preSumArray[i - 1][j - 1] +
          nums[i - 1][j - 1];
      }
    }
    return preSumArray;
  };
  //rangSum方法来得出左上角 (row1, col1) 、右下角 (row2, col2)所描述的子矩阵的元素总和。 leetcode 304
  MatrixArray.prototype.rangSum = function (nums, row1, col1, row2, col2) {
    var preSumArray = this.preSum(nums);
    return (
      preSumArray[row2 + 1][col2 + 1] -
      preSumArray[row2 + 1][col1] -
      preSumArray[row1][col2 + 1] -
      preSumArray[row1][col1]
    );
  };
}
