# Bellman Ford Algorithm

The Bellman Ford Algorithm is a shortest path algorithm used to find the shortest path between two nodes in a weighted graph. It is named after its inventors, Richard Bellman and Lester Ford Jr.

## Algorithm

The Bellman Ford Algorithm works by iteratively relaxing all the edges in the graph. Relaxing an edge means updating the distance to the destination node if a shorter path is found. The algorithm repeats this process for a number of iterations equal to the number of nodes in the graph.

The algorithm starts by initializing the distance to the source node as 0 and the distance to all other nodes as infinity. Then, it iteratively relaxes all the edges in the graph. If the distance to a node is updated during an iteration, the algorithm continues to the next iteration. If no distance is updated during an iteration, the algorithm terminates.

## Time Complexity

The time complexity of the Bellman Ford Algorithm is O(V * E), where V is the number of nodes in the graph and E is the number of edges in the graph. This makes it less efficient than other shortest path algorithms, such as Dijkstra's Algorithm and the Floyd Warshall Algorithm.

## Applications

The Bellman Ford Algorithm is used in various applications, such as:

- Routing protocols in computer networks
- Finding negative cycles in a graph
- Solving optimization problems in economics and finance

## Example

Consider the following graph:

```
     2
1 ------- 2
|         |
|         | -1
|         |
3 ------- 4
     1
```

The shortest path from node 1 to node 4 is 1 -> 2 -> 4, with a total distance of 1 + 2 = 3.

Using the Bellman Ford Algorithm, the distance to node 1 is initialized as 0 and the distance to all other nodes is initialized as infinity. Then, the algorithm iteratively relaxes all the edges in the graph:

- Iteration 1: Update distance to node 2 to 2 and distance to node 3 to 1.
- Iteration 2: Update distance to node 4 to 3.
- Iteration 3: No updates, terminate.

The final distances are:

```
Node 1: 0
Node 2: 2
Node 3: 1
Node 4: 3
```

## Conclusion

The Bellman Ford Algorithm is a useful algorithm for finding the shortest path between two nodes in a weighted graph. Although it has a higher time complexity than other shortest path algorithms, it can handle graphs with negative edge weights and is useful in various applications.
