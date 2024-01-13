console.log("Binary Search Tree")
class Node{
    constructor(data,left=null,right=null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class BST{
    constructor(){
        this.root =null
    }

 add(data){
   const node= this.root;

   if(!node){
    this.root=new Node(data)
    return ;
   }
    else
    {
    let current = node;
    while (current){
        if(data < current.data){
            if(!current.left){
                current.left= new Node(data);
                return;
            }
            current=current.left;
        }else{
            if(!current.right){
                current.right = new Node(data)
                return;
            }
            current=current.right;
        }
        }
    }
   }
   findMin(){
    let minNode=this.root;
    while(minNode.left!==null){
        minNode=minNode.left
    }
    return minNode.data
   }

   findMax(){
    let maxNode=this.root
    if (!maxNode) return null
    while (maxNode.right !== null){
        maxNode = maxNode.right
    }
    return maxNode.data
   }

   find(data){
    let current = this.root;
    while(current){
        if(data === current.data){
            return current.data
        }
        else if(data<current.data){
            current=current.left
        }
        else{
            current=current.right
        }
    }
    throw new Error('No data found')
   }
   isPresent(data){
    let current=this.root
    while (current.data !==data){
        if(data<current.data){
            current=current.left
        }else{
            current=current.right
        }
        if(!current) return false
    }
    return true
   }

   remove(data){
    const removeNode = function(node, data){
        if (node === null) return null
        if(data === node.data){
            //node has no children
            if (node.left ==null && node.right ==null){
                return null
            }
            //node has no left child
            if(node.left==null){
                return node.right
            }
            //node has no right child
            if (node.right==null){
                return node.left
            }
            //node has two children
            var temp = node.right
            while(temp.left !==null){
                temp = temp.left
            }
            node.data = temp.data
            node.right =removeNode(node.right ,temp.data)
            return node;
        }else if(data <node.data){
            node.left=removeNode(node.left ,data)
            return node
        }else{
            node.right=removeNode(node.right,data)
            return node
        }
        }
        return removeNode(this.root,data)
    }

    //Binary Search Tree: Traversal & Height

findMinHeight(node = this.root) {
    if (node == null) {
        return -1;
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
        return left + 1;
    } else {
        return right + 1;
    };
}

findMaxHeight(node = this.root) {
    if (node == null) {
        return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
        return left + 1;
    } else {
        return right + 1;
    };
}
isBalanced(){
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
}

inOrderTraversal(){
    if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traverseInOrder(node) {       
          node.left && traverseInOrder(node.left);
          result.push(node.data);
          node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
      };
}

preOrderTraversal(){
    if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traversePreOrder(node) {
          result.push(node.data);
          node.left && traversePreOrder(node.left);
          node.right && traversePreOrder(node.right);
        };
        traversePreOrder(this.root);
        return result;
      };
}

postOrderTraversal(){
    if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traversePostOrder(node) {
          node.left && traversePostOrder(node.left);
          node.right && traversePostOrder(node.right);
          result.push(node.data);
        };
        traversePostOrder(this.root);
        return result;
      }
}

levelOrderTraversal(){
    let result = [];
    let Q = []; 
    if (this.root != null) {
        Q.push(this.root);
        while(Q.length > 0) {
            let node = Q.shift();
            result.push(node.data);
            if (node.left != null) {
                Q.push(node.left);
            };
            if (node.right != null) {
                Q.push(node.right);
            };
        };
        return result;
    } else {
        return null;
    };
}
//
}

 
 // Usage example:
 let myBST = new BST();

 myBST.add(50);
 myBST.add(30);
 myBST.add(70);
 myBST.add(20);
 myBST.add(40);
 myBST.add(60);
 myBST.add(80);

 console.log("Is 40 present in the BST?", myBST.isPresent(40)); // Output: true
 console.log("Is 90 present in the BST?", myBST.isPresent(90)); // Output: false

 console.log("Minimum value in the BST:", myBST.findMin()); // Output: 20
 console.log("Maximum value in the BST:", myBST.findMax()); // Output: 80

 console.log("Removing 70 from the BST");
 myBST.remove(70);
 console.log("Is 70 present in the BST?", myBST.isPresent(70)); // Output: false


 console.log("Binary Search Tree: Traversal & Height")
console.log("In-Order Traversal:", myBST.inOrderTraversal()); // Output: [20, 30, 40, 50, 60, 80]

console.log("Pre-Order Traversal:", myBST.preOrderTraversal()); // Output: [50, 30, 20, 40, 60, 80]

console.log("Post-Order Traversal:", myBST.postOrderTraversal()); // Output: [20, 40, 30, 80, 60, 50]

console.log("Level-Order Traversal:", myBST.levelOrderTraversal()); // Output: [50, 30, 60, 20, 40, 80]

console.log("Min Height of the BST:", myBST.findMinHeight()); // Output: 2
console.log("Max Height of the BST:", myBST.findMaxHeight()); // Output: 2

console.log("Is the BST balanced?", myBST.isBalanced()); // Output: true