# Euclidean Distance

Euclidean distance is a measure of the straight-line distance between two points in Euclidean space. It is a widely used distance metric in machine learning and data science for tasks such as clustering, classification, and similarity measurement. The concept of Euclidean distance is based on the Pythagorean theorem and is named after the ancient Greek mathematician Euclid.

## Definition

Given two points in Euclidean space, the Euclidean distance between them is defined as the length of the shortest path connecting the two points. In a two-dimensional space, the Euclidean distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ can be calculated using the following formula:


$$

d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}

$$


In a three-dimensional space, the Euclidean distance between two points $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$ can be calculated using the following formula:


$$

d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}

$$


In general, for an $n$-dimensional space, the Euclidean distance between two points $\mathbf{p} = (p_1, p_2, \dots, p_n)$ and $\mathbf{q} = (q_1, q_2, \dots, q_n)$ can be calculated using the following formula:


$$

d(\mathbf{p}, \mathbf{q}) = \sqrt{\sum_{i=1}^n (q_i - p_i)^2}

$$


## Properties

Euclidean distance has several important properties that make it a useful distance metric:

1. **Non-negativity**: The Euclidean distance between any two points is always non-negative. This is because the square of any real number is non-negative, and the square root of a non-negative number is also non-negative.

2. **Identity of indiscernibles**: The Euclidean distance between two points is zero if and only if the two points are identical. This follows from the fact that the square root of zero is zero, and the square root of a positive number is positive.

3. **Symmetry**: The Euclidean distance between two points is symmetric, meaning that the distance from point A to point B is the same as the distance from point B to point A. This follows from the commutative property of addition and the fact that the square of a difference is the same as the square of the negation of the difference.

4. **Triangle inequality**: The Euclidean distance between two points is always less than or equal to the sum of the Euclidean distances between those points and a third point. This property is a direct consequence of the Pythagorean theorem and is a fundamental property of any distance metric.

## Applications

Euclidean distance is widely used in machine learning and data science for various tasks, including:

1. **Clustering**: In clustering algorithms such as K-means and hierarchical clustering, Euclidean distance is often used to measure the similarity between data points. Data points that are closer together in Euclidean space are considered more similar and are grouped together.

2. **Classification**: In classification algorithms such as K-nearest neighbors (KNN) and support vector machines (SVM), Euclidean distance is used to measure the similarity between data points and their corresponding class labels. Data points that are closer together in Euclidean space are considered more likely to belong to the same class.

3. **Dimensionality reduction**: In dimensionality reduction techniques such as principal component analysis (PCA) and t-distributed stochastic neighbor embedding (t-SNE), Euclidean distance is used to preserve the pairwise distances between data points in the reduced-dimensional space.

4. **Image processing**: In image processing tasks such as image segmentation and object recognition, Euclidean distance is used to measure the similarity between pixel values or feature vectors.

5. **Recommendation systems**: In recommendation systems, Euclidean distance is used to measure the similarity between user preferences or item features, allowing the system to recommend items that are similar to those that a user has liked in the past.

## Limitations

While Euclidean distance is a widely used and intuitive distance metric, it has some limitations:

1. **Sensitivity to scale**: Euclidean distance is sensitive to the scale of the input features. If the features have different scales or units, the distance metric may be dominated by the features with larger scales. To mitigate this issue, it is common to normalize or standardize the input features before calculating Euclidean distances.

2. **Invariance to rotation and translation**: Euclidean distance is not invariant to rotation and translation, meaning that the distance between two points may change if the coordinate system is rotated or translated. This can be an issue in some applications where the relative orientation or position of the data points is important.

3. **Inapplicability to non-Euclidean spaces**: Euclidean distance is only applicable to Euclidean spaces, and may not be suitable for measuring distances in non-Euclidean spaces such as graphs, networks, or other complex structures.

In cases where Euclidean distance is not suitable, other distance metrics such as Manhattan distance, Minkowski distance, or cosine similarity may be more appropriate.
