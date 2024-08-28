function shortestpath(graph, start, end) {
    let distance = {};
    let previous = {};
    let unvisited = new Set();
    const numVertices = graph.length; // Total number of vertices

    // Initialize distances and the unvisited set
    for (let i = 0; i < numVertices; i++) {
        distance[i] = i === start ? 0 : Infinity;
        unvisited.add(i);
    }

    while (unvisited.size) {
        // Find the closest vertex in unvisited set
        let closestVertice = null;
        for (let vertice of unvisited) {
            if (closestVertice === null || distance[vertice] < distance[closestVertice]) {
                closestVertice = vertice;
            }
        }

        if (distance[closestVertice] === Infinity) break;
        if (closestVertice === end) break;

        // Update distances to neighbors
        for (let neighbor = 0; neighbor < numVertices; neighbor++) {
            const edgeWeight = graph[closestVertice][neighbor];
            if (edgeWeight !== Infinity) { // Check if there's an edge
                let newDistance = distance[closestVertice] + edgeWeight;
                if (newDistance < distance[neighbor]) {
                    distance[neighbor] = newDistance;
                    previous[neighbor] = closestVertice;
                }
            }
        }

        unvisited.delete(closestVertice);
    }

    // Construct the shortest path
    let path = [];
    let node = end;
    while (node !== undefined) {
        path.push(node);
        node = previous[node];
    }

    return path.reverse();
}

// Example graph represented as an adjacency matrix
const graph = [
    [0, 4, Infinity, Infinity, Infinity, 2],
    [4, 0, 6, Infinity, Infinity, Infinity],
    [Infinity, 6, 0, 6, Infinity, Infinity],
    [Infinity, Infinity, 6, 0, 1, Infinity],
    [Infinity, Infinity, Infinity, 1, 0, 7],
    [2, Infinity, Infinity, Infinity, 7, 0]
];

console.log(shortestpath(graph, 2, 0));
// Output should be: [2, 1, 0]
