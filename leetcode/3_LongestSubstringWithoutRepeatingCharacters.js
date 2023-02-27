// 无重复最长子串
// 方法：滑动窗口
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0
  if (s == '' || s == null) {
      return 0
  }

  let l = r = 0;
  while (r < s.length) {
      r++
      const duration = s.slice(l, r)
      const offset = s.slice(l, r).indexOf(s[r])
      maxLen = Math.max(maxLen, r - l)
      if (offset !== -1) {
          l += offset + 1
      }

  }
  maxLen = Math.max(maxLen, s.length - 1 - l + 1)
  return maxLen
};