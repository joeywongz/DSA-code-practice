// 1. 两数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
};

// hashMap解法
var twoSum = function (nums, target) {
  const hashMap = {}
  for (let i = 0; i < nums.length; i++) {
      const key = target - nums[i]
      if ((val = hashMap[key]) !== undefined) {
          return [val, i]
      }
      hashMap[nums[i]] = i
  }
};
var twoSum = function (nums, target) {
  const hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
      const key = target - nums[i]
      if ((val = hashMap.get(key)) !== undefined) {
          return [val, i]
      }
      hashMap.set(nums[i], i)
  }
};
