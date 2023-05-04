# Floyd Warshall Algorithm

The Floyd Warshall algorithm is a dynamic programming algorithm used to find the shortest path between all pairs of vertices in a weighted graph. It is named after Robert Floyd and Stephen Warshall, who independently published the algorithm in 1962 and 1962 respectively. 

## Algorithm

The algorithm works by considering all possible intermediate vertices between any two vertices and updating the shortest path accordingly. The algorithm maintains a distance matrix `D` where `D[i][j]` represents the shortest distance between vertices `i` and `j`. Initially, `D[i][j]` is set to the weight of the edge between vertices `i` and `j` if there is an edge, and infinity otherwise. 

The algorithm then considers all possible intermediate vertices `k` and updates `D[i][j]` as follows:

$$D[i][j] = \min(D[i][j], D[i][k] + D[k][j])$$

The above equation means that the shortest path between vertices `i` and `j` either goes directly from `i` to `j` or goes through an intermediate vertex `k`. The algorithm repeats this process for all possible intermediate vertices and updates the distance matrix accordingly. 

## Complexity

The Floyd Warshall algorithm has a time complexity of O(n^3) and a space complexity of O(n^2), where n is the number of vertices in the graph. This makes it less efficient than other shortest path algorithms such as Dijkstra's algorithm and the Bellman-Ford algorithm. However, the Floyd Warshall algorithm has the advantage of being able to handle negative edge weights and detect negative cycles in the graph. 

## Applications

The Floyd Warshall algorithm has various applications in computer science and engineering. It can be used to find the shortest path between all pairs of nodes in a network, such as in routing algorithms for computer networks. It can also be used in image processing to find the shortest path between two points in an image. Additionally, the algorithm can be used to solve problems in game theory, such as finding the optimal strategy for a two-player game. 

## Further Readings

- Dijkstra's Algorithm
- Bellman-Ford Algorithm
- Johnson's Algorithm
