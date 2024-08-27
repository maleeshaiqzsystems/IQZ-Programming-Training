class Node{
     constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;

     }

}

function printLevelOrder(root){
    let h= height(root);

    for(var i=1;i<=h;i++){
        printCurrentLevel(root,i);
    }
}

function printCurrentLevel(root,level){
    if(root==null){
        return;
    }
    if(level==1){
        console.log(root.data+ " ");
    }else if(level>1){
        printCurrentLevel(root.left, level-1);
        printCurrentLevel(root.right, level-1);
    }
}


function height(root){
    if(root==null){
        return 0;
    }else{

    var leftHeight = height(root.left);
    var rightHeight = height(root.right);

    if(leftHeight>rightHeight){
        return (leftHeight+1);
    }else{
        return (rightHeight+1);
    }
}
}


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
printLevelOrder(root);