# Manhattan Distance

Manhattan distance, also known as city block distance, is a measure used in machine learning to compute the distance between two points in a grid-based system. It is named after the grid layout of the Manhattan city, where the blocks are laid out in a grid, and the distance between two points is the sum of the absolute differences of their coordinates.

## Definition

Given two points in a plane with coordinates $(x_1, y_1)$ and $(x_2, y_2)$, the Manhattan distance between these points is defined as:


$$

d = |x_1 - x_2| + |y_1 - y_2|

$$


This formula can be generalized to an n-dimensional space as:


$$

d = \sum_{i=1}^{n} |x_i - y_i|

$$


where $x_i$ and $y_i$ are the coordinates of the two points in the i-th dimension.

## Application in Machine Learning

In machine learning, Manhattan distance is often used as a distance metric in various algorithms such as K-Nearest Neighbors (KNN), clustering algorithms like K-Means, and in recommendation systems to find similar items or users.

One of the main advantages of Manhattan distance over other distance metrics like Euclidean distance is that it is more robust to outliers. This is because it does not square the differences like in the Euclidean distance, which can amplify the effect of outliers.

## Comparison with Other Distance Metrics

Manhattan distance and Euclidean distance are both special cases of Minkowski distance. When the parameter $p$ in the Minkowski distance formula is set to 1, it becomes the Manhattan distance, and when it is set to 2, it becomes the Euclidean distance.

Another difference between Manhattan and Euclidean distance is that Manhattan distance is a better choice when dealing with high dimensional data. This is because in high dimensional spaces, most pairs of points are far apart, and the Manhattan distance can better capture this.

In conclusion, the choice of distance metric in machine learning algorithms depends on the nature of the data and the specific requirements of the problem at hand. Manhattan distance, with its unique properties, can be a useful tool in the machine learning toolkit.
