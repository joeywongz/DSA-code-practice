// 合并两个有效数组


// 先合并再排序
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums2.forEach((i, index) => {
      nums1[m + index] = i
  })
  nums1.sort((a, b) => a - b)
};

// 方案二： 移动指针，将nums1和nums2从后面开始比较，大的放在后面