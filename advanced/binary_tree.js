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