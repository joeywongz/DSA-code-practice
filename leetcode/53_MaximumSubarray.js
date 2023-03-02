// 53.最大子序和

// 动态规划求解
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0]
  let sum = nums[0]
  for(let i = 1; i < nums.length; i++) {
      if(sum > 0){
          sum += nums[i]
      } else {
          sum = nums[i]
      }
      res = Math.max(res, sum)
  }
  return res
};