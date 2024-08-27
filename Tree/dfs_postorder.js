class Node{
    constructor(value){
        this.data=value;
        this.right=null;
        this.left=null
    }
}

function postOrder(root){
    if(root==null){
        return;
    }

    postOrder(root.left);
    postOrder(root.right);

    console.log(root.data);
}


        root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
 
        console.log("\nPostorder traversal of binary tree is<br/> ");
        postOrder(root);