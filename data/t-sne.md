# T-SNE

T-distributed Stochastic Neighbor Embedding (t-SNE) is a machine learning algorithm for visualization developed by Laurens van der Maaten and Geoffrey Hinton. It is a nonlinear dimensionality reduction technique well-suited for embedding high-dimensional data for visualization in a low-dimensional space of two or three dimensions. Specifically, it models each high-dimensional object by a two- or three-dimensional point in such a way that similar objects are modeled by nearby points and dissimilar objects are modeled by distant points with high probability.

## Overview

The t-SNE algorithm comprises two main stages. First, t-SNE constructs a probability distribution over pairs of high-dimensional objects in such a way that similar objects have a high probability of being picked, while dissimilar points have an extremely small probability of being picked. Second, t-SNE defines a similar probability distribution over the points in the low-dimensional map, and it minimizes the Kullback–Leibler divergence (KL divergence) between the two distributions with respect to the locations of the points in the map.

## Algorithm

The t-SNE algorithm starts by calculating the probability of similarity of points in high-dimensional space and calculating the probability of similarity of points in the corresponding low-dimensional space. The similarity of points is determined based on the Gaussian distribution in high-dimensional space and by the Student’s t-distribution in low-dimensional space.

The cost function C is then defined as the sum of the Kullback-Leibler divergence of the distribution in high-dimensional space with the distribution in low-dimensional space, over all points. The aim is to minimize this cost function. This is done by using the gradient descent method.

The t-SNE algorithm can be summarized as follows:

1. Compute pairwise affinities $p_{j|i}$ with perplexity Perp in the high-dimensional space.
2. Set the initial solution in the low-dimensional space randomly (e.g., from a Normal distribution with mean 0 and variance 0.0001).
3. Compute pairwise affinities $q_{j|i}$ in the low-dimensional space.
4. Compute the gradient of the Kullback-Leibler divergence of $P$ from $Q$.
5. Update the solution in the low-dimensional space (e.g., using the gradient descent method).
6. Repeat steps 3-5 until convergence.

## Advantages and Disadvantages

The main advantage of t-SNE is the ability to preserve local structure, meaning that instances that are close to one another in the high-dimensional dataset will be close to each other in the reduced space. This makes t-SNE particularly good at creating a single map that reveals structure at many different scales.

However, t-SNE has a few disadvantages. It is known to be computationally expensive and can take several hours on million-sample datasets where PCA would finish in seconds or minutes. Furthermore, it has a few hyperparameters to tune, and it is not always clear what settings will yield a good embedding. Finally, it is a stochastic algorithm, meaning that different runs with the same hyperparameters can yield different results.
