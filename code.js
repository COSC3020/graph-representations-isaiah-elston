function convertToAdjList(adjMatrix) {
  if (adjMatrix.length === 0) {
    return [];
  }

  let nodeCount = adjMatrix.length;

  let adjList = [];

  for (let index = 0; index < nodeCount; index++) {
    adjList[index] = [];
  }

  for (let list = 0; list < nodeCount; list++) {
    for (let element = 0; element < nodeCount; element++) {
      if (adjMatrix[list][element] === 1) {
        adjList[list].push(element);
      }
    }
  }

  return adjList;
}