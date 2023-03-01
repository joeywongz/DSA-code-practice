// 112.路径总和
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  return !!dfs(root, 0, targetSum)
};

const dfs = (root, sum, targetSum)=> {
  if(root == null){
      return
  }
  sum += root.val
  if(root.left == null && root.right == null){
      // 叶子结点
      if(sum === targetSum){
          return true
      }
  }
  if(dfs(root.left,sum, targetSum)){
      return true
  }
  
  return dfs(root.right, sum, targetSum)
}