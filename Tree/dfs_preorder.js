class Node{
    constructor(value){
        this.data=value;
        this.left=null;
        this.right=null;
    }

}

function preOrder(root){
    if(root){
        console.log(root.data+ " ");

        preOrder(root.left);

        preOrder(root.right);
    }
}


let root =  new Node(1)
root.left =  new Node(2)
root.right =  new Node(3)
root.left.left =  new Node(4)
root.left.right =  new Node(5)
console.log("Preorder traversal of binary tree is","</br>")
preOrder(root)