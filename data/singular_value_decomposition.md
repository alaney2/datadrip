# Singular Value Decomposition

**Singular Value Decomposition (SVD)** is a fundamental matrix decomposition technique used in various fields such as signal processing, computer vision, machine learning, and more. It is a factorization of a real or complex matrix into three matrices, which helps in reducing the dimensionality of a matrix, identifying the most important features, and removing noise from the data.

## Overview

SVD is a generalization of the eigenvalue decomposition (EVD) and can be applied to any matrix, not just square ones. Given an $m \times n$ matrix $A$, SVD decomposes it into the product of three matrices:

$$
A = U\Sigma V^*
$$

where $U$ is an $m \times m$ unitary matrix, $\Sigma$ is an $m \times n$ diagonal matrix with non-negative real numbers on the diagonal, and $V^*$ is the conjugate transpose of an $n \times n$ unitary matrix $V$. The diagonal elements of $\Sigma$ are called **singular values**, and the columns of $U$ and $V$ are called the **left singular vectors** and **right singular vectors**, respectively.

## Calculation

SVD can be calculated using various algorithms, such as the Golub-Kahan-Reinsch algorithm, the Jacobi algorithm, or the Lanczos algorithm. The most common algorithm used is the **singular value decomposition by bidiagonalization and Golub-Kahan-Reinsch algorithm**, which is fast and numerically stable.

## Applications

SVD has many applications in machine learning and data analysis, including:

- **Dimensionality reduction**: The singular values in $\Sigma$ indicate the importance of the corresponding left and right singular vectors. By selecting the top $k$ singular values, we can reduce the dimensionality of the data without losing much information.

- **Principal Component Analysis (PCA)**: PCA is a technique used to identify the most important features in a dataset. It involves performing SVD on the data matrix and selecting the top principal components, which correspond to the most significant singular values.

- **Matrix factorization**: SVD can be used for matrix factorization, which involves representing a matrix in terms of simpler and more interpretable matrices. For example, collaborative filtering in recommendation systems can be achieved by factorizing a user-item matrix into the product of user and item matrices.

- **Image compression**: Since SVD can be used to reduce the dimensionality of an image matrix, it is often used in image compression techniques. By selecting the top singular values, we can represent the image using fewer components and thus compress it.

## Further Readings

- **Principal Component Analysis**: A technique used to identify the most important features in a dataset by performing SVD on the data matrix and selecting the top principal components. ([Wikipedia](https://en.wikipedia.org/wiki/Principal_component_analysis))

- **Matrix Factorization Techniques**: A set of techniques used to represent a matrix in terms of simpler and more interpretable matrices. SVD is one such technique. ([Medium blog post](https://towardsdatascience.com/understanding-matrix-factorization-for-recommendation-part-2-cf0bee8b41ec))

- **Singular Value Thresholding**: A technique used to remove noise from a matrix by thresholding the singular values. ([Stanford University lecture notes](https://web.stanford.edu/class/ee392o/lectures/SVT.pdf))
