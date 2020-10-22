var X = Infinity
var exampleGraph = [
  [X , 7 , 9 , X , X , 14],
  [7 , X , 10, 15, X , X ],
  [9 , 10, X , 11, X , 2 ],
  [X , 15, 11, X , 6 , X ],
  [X , X , X , 6 , X , 9 ],
  [14, X , 2 , X , 9 , X ]
]
//The graph from https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm#/media/File:Dijkstra_Animation.gif

function dijkstra(graph, start, finish) {
  nodeDistances = []
  nodesVisited = []
  nodecount = graph.length
  for (let i = 0; i < nodecount; i++){
    nodeDistances.push(Infinity)
    nodesVisited.push(false)
  }

  currentNode = start
  nodeDistances[start] = 0
  nodesVisited[start] = true

  while(currentNode != finish && nodesVisited.some(visited => !visited)){
    currentUnvisitedMin = -1
    currentUnvisitedMinDist = Infinity
    nodesVisited[currentNode] = true
    for (let i = 0; i < nodecount; i++){
      distFromCurrentNode = nodeDistances[currentNode] + graph[currentNode][i]
      if (distFromCurrentNode < nodeDistances[i])
        nodeDistances[i] = distFromCurrentNode
      if(!nodesVisited[i] && nodeDistances[i] < currentUnvisitedMinDist){
        currentUnvisitedMin = i
        currentUnvisitedMinDist = nodeDistances[i]
      }
    }
    currentNode = currentUnvisitedMin

  }
  return nodeDistances[finish]
}

console.log(dijkstra(exampleGraph, 0, 3))