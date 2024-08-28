class Graph{
    constructor(){
        this.adjacencyList = {};
        
    }

    addVertice(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v]=[];
            return true;
        }else{
            return false;
        }
    }

    addEdge(v1,v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
            return true;
        }
        return "Can't create a edge. Both vertices or one of these vertices are not exits!";
    }

    removeEdge(v1,v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            this.adjacencyList[v1]=this.adjacencyList[v1].filter( v=> v!==v2);
            this.adjacencyList[v2]=this.adjacencyList[v2].filter(v=>v!==v1);
        }
        return "Can't remove the edge. Both vertices or one of these vertices are not exits!";
    }

    removeVertice(v){
        if(this.adjacencyList[v]){
            while(this.adjacencyList[v].length){
                let temp=this.adjacencyList[v].pop();
                console.log("temp"+temp);
                this.removeEdge(v, temp);
            }

            delete this.adjacencyList[v];
            return this;
        }

    
    }


}

let myGraph = new Graph();

myGraph.addVertice(1);
myGraph.addVertice(2);
myGraph.addVertice(3);
myGraph.addVertice(4);

console.log(myGraph.addEdge(2,4));

console.log(myGraph.removeVertice(2));

console.log(myGraph);




