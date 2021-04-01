function bfs(grid) {
    const visitedNodesInOrder = [];
    var queue= [];
    // const startNode= grid.getStartNode();
 
    grid.setStartNodeDistance(0);
//    const unvisitedNodes = grid.grid.flat();
  
    queue.push(grid.getStartNode());
    while (!queue.isempty()) {
        // sortNodesByDistance(unvisitedNodes);
        const closestNode = queue.shift();
        if (closestNode.isWall === true) continue;
        if (closestNode.distance === Infinity) return visitedNodesInOrder, grid.drawGrid();
        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);
        if (closestNode.isFinish == true) return visitedNodesInOrder, grid.drawGrid();
        grid.grid[closestNode.column][closestNode.row].getNeighbours();
        const unvisitedNeighbours = closestNode.neighbours;
        // const unvisitedNeighbours = queue.front();
        // queue.shift();
        for (const neighbour of unvisitedNeighbours) {
            if (neighbour.isVisited == true) {
               continue
            } else {
                neighbour.distance = closestNode.distance + 1;
                neighbour.previousNode = closestNode;
                queue.push(neighbour);
            }
        }
  
    }
  }
  