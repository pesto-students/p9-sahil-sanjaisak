// All Paths From Source to Target

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
    const result = [];
    
    let dfs = function(node, path){
        if (node === graph.length-1) result.push(path)
        
        for (let neighbour of graph[node]){
            dfs (neighbour, path.concat([neighbour]));
        }
    }
    dfs(0, [0])
    return result;
};