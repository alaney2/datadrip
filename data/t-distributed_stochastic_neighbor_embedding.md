# T-Distributed Stochastic Neighbor Embedding

T-Distributed Stochastic Neighbor Embedding (t-SNE) is a machine learning algorithm for visualization developed by Laurens van der Maaten and Geoffrey Hinton. It is a nonlinear dimensionality reduction technique well-suited for embedding high-dimensional data for visualization in a low-dimensional space of two or three dimensions. Specifically, it models each high-dimensional object by a two- or three-dimensional point in such a way that similar objects are modeled by nearby points and dissimilar objects are modeled by distant points with high probability.

## Overview

The t-SNE algorithm comprises two main stages. First, t-SNE constructs a probability distribution over pairs of high-dimensional objects in such a way that similar objects have a high probability of being picked, while dissimilar points have an extremely small probability of being picked. Second, t-SNE defines a similar probability distribution over the points in the low-dimensional map, and it minimizes the Kullback–Leibler divergence (KL divergence) between the two distributions with respect to the locations of the points in the map.

## Algorithm

The t-SNE algorithm starts by calculating the probability of similarity of points in high-dimensional space and calculating the probability of similarity of points in the corresponding low-dimensional space. The similarity of points is determined based on the Gaussian distribution in the high-dimensional space and by the Student's t-distribution in the low-dimensional space.

The cost function that t-SNE minimizes is the Kullback-Leibler divergence of the joint probabilities in the high-dimensional space and the low-dimensional space. The t-SNE algorithm minimizes this divergence using gradient descent.

## Applications

t-SNE has been used in a variety of applications including:

- Visualizing high-dimensional datasets in genomics, neuroscience, and image processing.
- Analyzing speech, music, and social networks.
- Natural language processing for visualizing word embeddings.

## Limitations

While t-SNE is a powerful tool for visualizing high-dimensional data, it has a few limitations. It is known to be computationally intensive and can take a long time to run on large datasets. Also, the interpretation of the distance between clusters and cluster sizes in the t-SNE plot can be misleading as t-SNE preserves the local structure of the data at the expense of the global structure. 

## Conclusion

Despite its limitations, t-SNE is a widely used tool for visualizing high-dimensional data. Its ability to preserve the local structure of the data makes it a valuable tool for exploratory data analysis.
