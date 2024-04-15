function convertToAdjList(adjMatrix) {
  if (adjMatrix.length <= 0) {
    return [];
  }

  let nodeCount = adjMatrix.length;

  let adjList = [];

  for (let list = 0; list < nodeCount; list++) {
    adjList[list] = [];
  }

  for (let list = 0; list < nodeCount; list++) {
    for (let element = 0; element < nodeCount; element++) {
      if (adjMatrix[list][element] == 1) {
        adjList[list].push(element);
      }
    }
  }

  return adjList;
}

// Bonus Exercise Code

function convertToAdjMatrix(adjList) {
  if (adjList.length == 0) {
    return [];
  }

  let nodeCount = adjList.length;

  let adjMatrix = [];
  for (let list = 0; list < nodeCount; list++) {
    adjMatrix[list] = [];
  }

  for (let list = 0; list < nodeCount; list++) {
    for (let element = 0; element < adjList[list].length; element++) {
      let nextElement = adjList[list][element];
      adjMatrix[list].push(nextElement);
    }
  }

  return adjMatrix;
}