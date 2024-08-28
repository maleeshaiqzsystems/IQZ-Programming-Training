//weighted unidirectional graph


class Graph{
    constructor(){
        this.adjacencyList={};
    }

    addVertice(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v]=[];
            return true;
        }
        return false;
    }

    addEdge(v1,v2,w){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            this.adjacencyList[v1].push({vertice:v2, weight:w});
        }
    }


    removeEdge(node1, node2) {
        if (this.adjacencyList[node1]) {
            this.adjacencyList[node1] = this.adjacencyList[node1].filter(edge => edge.vertice !== node2);
        }
    }

    removeVertice(v){
        if(this.adjacencyList[v]){
            
            for(let vertice in this.adjacencyList){
                this.removeEdge(vertice,v)
            }

            delete this.adjacencyList[v];
            return this;
        }
        

    
    }
    printGraph() {
        for (let node in this.adjacencyList) {
            let edges = this.adjacencyList[node].map(edge => `${edge.vertice} (weight: ${edge.weight})`);
            console.log(`${node} --> ${edges.join(', ')}`);
        }
    }
}

let myGraph = new Graph()

myGraph.addVertice("A");
myGraph.addVertice("B");
myGraph.addVertice("C");
myGraph.addEdge("A","B",3); // add a edge from A to B. weight is 3
myGraph.addEdge("A","C",3);
myGraph.removeVertice("B");
myGraph.printGraph();