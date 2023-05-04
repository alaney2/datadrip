# Graph Theory

Graph theory is a branch of mathematics that studies the properties of graphs, which are mathematical structures used to model pairwise relations between objects. A graph consists of a set of vertices (also called nodes) and a set of edges (also called links or arcs) that connect pairs of vertices. Graph theory has many applications in computer science, operations research, social sciences, and other fields.

## Basic Concepts

### Graphs

A graph is a pair $G = (V, E)$, where $V$ is a set of vertices and $E$ is a set of edges. An edge is an unordered pair of vertices. A graph is said to be undirected if its edges are unordered pairs, and directed if its edges are ordered pairs. A graph is said to be simple if it has no loops (edges that connect a vertex to itself) and no multiple edges (two or more edges that connect the same pair of vertices).

### Paths and Cycles

A path in a graph is a sequence of vertices connected by edges. A cycle is a path that starts and ends at the same vertex. A graph is said to be connected if there is a path between any two vertices. A graph is said to be acyclic if it has no cycles.

### Degrees and Adjacency

The degree of a vertex in a graph is the number of edges incident to it. The degree sequence of a graph is the sequence of degrees of its vertices. The adjacency matrix of a graph is a square matrix that represents its edges. The entry $a_{ij}$ is 1 if there is an edge from vertex $i$ to vertex $j$, and 0 otherwise.

## Advanced Concepts

### Trees and Forests

A tree is a connected acyclic graph. A forest is a disjoint union of trees. A spanning tree of a connected graph is a subgraph that is a tree and contains all the vertices of the graph.

### Planar Graphs

A planar graph is a graph that can be drawn on a plane without any edges crossing. The Euler's formula states that for any connected planar graph, $V - E + F = 2$, where $V$ is the number of vertices, $E$ is the number of edges, and $F$ is the number of faces (regions bounded by edges).

### Graph Coloring

A vertex coloring of a graph is an assignment of colors to its vertices such that no two adjacent vertices have the same color. The chromatic number of a graph is the minimum number of colors needed for a vertex coloring. The chromatic polynomial of a graph is a polynomial that counts the number of vertex colorings of the graph.

### Graph Algorithms

Many important algorithms in computer science are based on graph theory, such as Dijkstra's algorithm for finding shortest paths in a graph, the Ford-Fulkerson algorithm for computing maximum flows in a network, and the PageRank algorithm for ranking web pages based on their links.

## Applications

Graph theory has many applications in various fields, such as:

- Computer networks: Graphs are used to model the topology of computer networks and to design routing protocols.
- Social networks: Graphs are used to model social networks and to analyze their properties, such as centrality and clustering.
- Operations research: Graphs are used to model transportation networks, supply chains, and scheduling problems.
- Chemistry: Graphs are used to model molecules and to study their properties, such as symmetry and stability.

## Further Readings

- Network Flow
- Random Walks on Graphs
- Spectral Graph Theory
