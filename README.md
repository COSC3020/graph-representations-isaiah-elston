# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the most important part. Add your answer to this markdown file.

### Answer

#### TL;DR

`convertToAdjList()` $\in \mathrm{\Theta}(\lvert V^{2} \rvert ) : V \text{ is the number of \textbf{vertices} in the graph}$

#### Reasoning

The only *non-constant* operations in the implementation are the three `for` loops within it. All of the `for` loops in the implementation iterate from $0$ to length of the input adjacency matrix `nodeCount`. In doing so, it is effectively parsing through every *vertex* in the graph. If we label the arbitrary number of vertices in the graph as $\lvert V \rvert$, then we can say that each `for` loop has a time complexity of $\mathrm{\Theta}(\lvert V \rvert)$. 

From there, we know that the first `for` loop is sequential to the latter two *nested* `for` loops. In mathematical notation, that would be $\mathrm{\Theta}(\lvert V \rvert + (\lvert V \rvert * \lvert V \rvert)) \equiv \mathrm{\Theta}(\lvert V^{2} \rvert + \lvert V \rvert )$. Since the highest order term is $\lvert V^{2} \rvert$, we know that the implementation has a time complexity of $\mathrm{\Theta}(\lvert V^{2} \rvert)$.


## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and analyze it as above.

### Answer

#### TL;DR

`convertToAdjMatrix()` $\in \mathrm{\Theta}(\lvert V^{2} \rvert ) : V \text{ is the number of \textbf{vertices} in the graph}$

#### Reasoning

`convertToAdjMatrix()` has four `for` loops within it that are the only *non-constant* factors of the code. The first set of nested `for` loops acts very similarly to the nested `for` loops in the `convertToAdjList()` function I analyzed above. Therefore, I can reasonably conclude that the time complexity of the first set of nested `for` loops is an element of $\mathrm{\Theta}(\lvert V^{2} \rvert)$ for the same reasons that I described before.

 The latter set of nested `for` loops is a bit different, however. The outer `for` loop iterates through each list, which is also $\lvert V \rvert$ times. The inner `for` loop iterates through each element of each list, which is actually iterating through every *edge* of the graph since each list represents a vertex and the elements of the list are the edges that the vertex is connected to. I will represent the arbitrary number of edges in the graph as $\lvert E \rvert$. Therefore, the time complexity of the latter set of nested `for` loops is an element of $\mathrm{\Theta}(\lvert V \rvert * \lvert E \rvert)$.

 To put it all together, after dropping any constant terms, the time complexity of the implementation is $\mathrm{\Theta}(\lvert V^{2} \rvert + \lvert V \rvert * \lvert E \rvert)$. Since the highest order term is $\lvert V^{2} \rvert$, I can conclude that the time complexity of the implementation is an element of $\mathrm{\Theta}(\lvert V^{2} \rvert)$.