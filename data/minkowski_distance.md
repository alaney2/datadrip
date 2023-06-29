# Minkowski Distance

The Minkowski distance is a metric in a normed vector space which can be considered as a generalization of both the Euclidean distance and the Manhattan distance. It is named after the German mathematician Hermann Minkowski.

## Definition

Given two vectors $\vec{p} = (p_1, p_2, ..., p_n)$ and $\vec{q} = (q_1, q_2, ..., q_n)$ in a real or complex vector space, the Minkowski distance of order $r$ between $\vec{p}$ and $\vec{q}$ is defined as:


$$

D(\vec{p}, \vec{q}) = \left( \sum_{i=1}^{n} |p_i - q_i|^r \right)^{1/r}

$$


where $r \geq 1$ is a real number. The absolute value $|p_i - q_i|$ denotes the absolute difference between the corresponding elements of the vectors, and the exponent $r$ and the root $1/r$ are both applied element-wise.

## Special Cases

The Minkowski distance includes the Euclidean distance and the Manhattan distance as special cases. 

- When $r = 2$, the Minkowski distance is equivalent to the Euclidean distance:


$$

D(\vec{p}, \vec{q}) = \sqrt{\sum_{i=1}^{n} (p_i - q_i)^2}

$$


- When $r = 1$, the Minkowski distance is equivalent to the Manhattan distance:


$$

D(\vec{p}, \vec{q}) = \sum_{i=1}^{n} |p_i - q_i|

$$


## Applications in Machine Learning

The Minkowski distance is widely used in machine learning, particularly in tasks that involve measuring the distance between data points or vectors. Some of the common applications include:

- **Clustering algorithms**: Algorithms like K-Means and Hierarchical Clustering use the Minkowski distance to measure the similarity between different data points.

- **Nearest Neighbors algorithms**: In K-Nearest Neighbors (KNN) and its variants, the Minkowski distance is used to find the most similar instances in the training set for a new instance.

- **Dimensionality reduction**: Techniques like Multi-Dimensional Scaling (MDS) use the Minkowski distance to preserve the distances between high-dimensional data points when projecting them to a lower-dimensional space.

In general, the choice of the parameter $r$ in the Minkowski distance can have a significant impact on these algorithms, and it is often determined empirically or through cross-validation.
