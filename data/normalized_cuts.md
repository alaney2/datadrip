# Normalized Cuts

Normalized Cuts is a technique used in graph theory and image segmentation. It is a method for partitioning a graph into multiple sub-graphs, where the objective is to minimize the cut cost, i.e., the sum of the weights of the edges that are cut. The normalized cut criterion measures both the total dissimilarity between the different groups as well as the total similarity within the groups.

## Overview

The normalized cut method was introduced by Jianbo Shi and Jitendra Malik in their 2000 paper "Normalized Cuts and Image Segmentation". The method is based on a simple observation: when a graph is cut into two, the cut cost should not only depend on the dissimilarity between the two resulting sub-graphs, but also on the size of the sub-graphs. 

The normalized cut criterion is defined as follows:


$$
 NCut(A,B) = \frac{cut(A,B)}{assoc(A,V)} + \frac{cut(A,B)}{assoc(B,V)} 
$$


where $cut(A,B)$ is the sum of the weights of the edges that are cut, $assoc(A,V)$ is the total connection from nodes in A to all nodes in the graph, and $assoc(B,V)$ is the total connection from nodes in B to all nodes in the graph.

## Applications

Normalized cuts have been widely used in image segmentation, where the goal is to partition an image into multiple segments or regions. Each pixel in the image is treated as a node in the graph, and the weight of an edge between two nodes is typically based on the similarity between the corresponding pixels.

Normalized cuts can also be used in other areas of machine learning and data mining, such as clustering and semi-supervised learning. In these applications, the nodes in the graph represent data points, and the edges represent the similarity or distance between the data points.

## Algorithm

The problem of finding the optimal normalized cut is NP-hard. However, an approximate solution can be found by relaxing the problem to a continuous domain and solving the resulting eigenvalue problem. The basic steps of the algorithm are as follows:

1. Construct a similarity graph, where each node represents a data point, and each edge represents the similarity between two data points.
2. Compute the degree matrix and the Laplacian matrix of the graph.
3. Solve the generalized eigenvalue problem to find the eigenvector corresponding to the second smallest eigenvalue.
4. Use the sign of the components of the eigenvector to partition the nodes into two groups.
5. Recursively partition the groups until a stopping criterion is met.

## Limitations

While the normalized cut method has been successful in many applications, it has some limitations. First, the method assumes that the graph is fully connected, which may not be the case in some applications. Second, the method is sensitive to the choice of the weight function, which determines the similarity between the nodes. Finally, the method can be computationally expensive for large graphs, as it involves solving an eigenvalue problem.
