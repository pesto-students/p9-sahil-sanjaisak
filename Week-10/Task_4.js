// Find if Path Exists in Graph

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
 var validPath = function(n, edges, source, destination) {
    
    let convertToAdjestencyList = (edges)=>{
        let adjestencyList = {};
        edges.forEach((edge)=>{
            if(!adjestencyList[edge[0]]){
                  adjestencyList[edge[0]] = []
            }
            if(!adjestencyList[edge[1]]){
                  adjestencyList[edge[1]] = []
            }
              adjestencyList[edge[0]].push(edge[1]);
              adjestencyList[edge[1]].push(edge[0]);
        })
        return adjestencyList;
    }
    
    
    let bfs = (tree, firstEdge, edgeToBeFound)=>{
        let queue = [];
        let verifyCalled = new Set();
        verifyCalled.add(firstEdge)
        queue.push(firstEdge);
        while(queue.length){
            let currentNode = queue.shift();
            console.log(currentNode, queue);
            if(currentNode === edgeToBeFound){
                return true
            }
    
            for(let i=0 ; i< tree[currentNode].length ;i++){
                let connectedNode = tree[currentNode][i];
                if(!verifyCalled.has(connectedNode)){
                    verifyCalled.add(connectedNode);
                    queue.push(connectedNode)
                }
            }
        }
        return false
    }
    
       edges = convertToAdjestencyList(edges);

}