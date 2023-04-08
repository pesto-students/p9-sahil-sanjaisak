// Max Depth of binary tree

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
 * @return {number}
 */
 var maxDepth = function(root) {
    let result =  findDepth(root);
    return result
    };
    
    function findDepth(root){
        if(root == null){
            return 0
        }
        else{
            var leftMaxHeight = findDepth(root.left);
            var rightMaxHeight = findDepth(root.right);
            if(leftMaxHeight > rightMaxHeight){
                return leftMaxHeight +1;
            }else{
                return rightMaxHeight+ 1;
            }
        }
    }

    // Example 1: 
    
    // Input: root = [3,9,20,null,null,15,7]
    // Output: 3
    
    // Example 2:
    
    // Input: root = [1,null,2]
    // Output: 2