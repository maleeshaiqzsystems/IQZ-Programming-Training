//Inorder traversal

class Node{
    constructor(value){
        this.data=value;
        this.right=null;
        this.left=null;
    }

}

function printInOrder(root){
    if(root==null){
        return;
    }
    printInOrder(root.left);

    console.log(root.data);

    printInOrder(root.right);
    
}

root=new Node(1);
root.left=new Node(2);
root.right=new Node(3);
root.left.left=new Node(4);
root.left.right=new Node(5);
printInOrder(root);