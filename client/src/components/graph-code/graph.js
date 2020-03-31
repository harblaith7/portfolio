



class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(node){
        this.adjacencyList[node] = []
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = [...this.adjacencyList[vertex1], vertex2],
        this.adjacencyList[vertex2] = [...this.adjacencyList[vertex2], vertex1]
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
    }
}


class PriorityQueue {
    constructor(){
        this.values = []
    }

    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort()
    }

    dequeue(){
        return this.values.shift()
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}



class WeightedGraph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(node){
        this.adjacencyList[node] = []
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1] = [...this.adjacencyList[vertex1], {node: vertex2, weight}],
        this.adjacencyList[vertex2] = [...this.adjacencyList[vertex2], {node: vertex1, weight}]
    }

    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {}
        const previous = {}
        let smallest;
        let path = []

        // Build up initial state 
        for (let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        // As long as there is something to visit
        while(nodes.values.length){
            
            smallest = nodes.dequeue().val;
            console.log('The next smallest is ', smallest)
            if(smallest === finish){
                // WE ARE DONE 
                // BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    console.log(nextNode, neighbor)
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbor = nextNode.node
                    if(candidate < distances[nextNeighbor]){
                        // Updating new smallest distance to neighbour
                        distances[nextNeighbor] = candidate
                        // updating previous 
                        previous[nextNeighbor] = smallest
                        // enqueue 
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }

        console.log(path.concat(smallest).reverse())

    }

}




var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.Dijkstra('A', "E")