// Binary Tree Level Order Traversal

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
 * @return {number[][]}
 */
 var levelOrder = function(rootmain) {
    var returnLevel = (root) =>{
        
        var height = (root)=>{
              if(root == null ){return 0};
                 var leftRoot = height(root.left);
                 var rightRoot = height(root.right);

                 if(leftRoot>rightRoot){
                     return leftRoot + 1;
                 } else{
                     return rightRoot + 1;
                 }
        }
        let h = height(root);

   let tempArry =[];
        var printCurrentLevel = (root , level) =>{
        if (root == null)
            return;
        if (level == 1)
            tempArry.push(root.val);
        else if (level > 1) {
            printCurrentLevel(root.left, level - 1); // 
            printCurrentLevel(root.right, level - 1);
        }

        return tempArry;
    }

    var i;
    let result = []
    for (i = 1; i <= h; i++){
        tempArry = [];
    result.push(printCurrentLevel(root, i))

    }
        return result;
    };
    return returnLevel(rootmain);

};