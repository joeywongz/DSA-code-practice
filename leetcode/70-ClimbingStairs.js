//递归
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let memo = []
  const caclWays = (n) => {
      if (n == 1) {
          return 1
      }
      if (n == 2) {
          return 2
      }
      if (!(memo[n] > 0)) {
          memo[n] = caclWays(n-1) + caclWays(n - 2)
      }
      return memo[n]
  }
  return caclWays(n)
};
// 动态规划
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let memo = []
  memo[0] = 1
  memo[1] = 1
  for (let i = 2; i < n + 1; i++) {
      memo[i] = memo[i - 1] + memo[i - 2]
  }
  return memo[n]
};