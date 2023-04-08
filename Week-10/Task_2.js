// Validate Binary Search Tree

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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    let check = true;
    let result = [];
   
    let inOrder = (root)=>{
        if(root == null) return;
        inOrder(root.left);
        if(result.length != 0 && !(result[result.length -1] < root.val)) check = false;
        result.push(root.val);
        inOrder(root.right);
       } 
    inOrder(root)
    return check
   }