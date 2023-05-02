# Non-negative Matrix Factorization

Non-negative Matrix Factorization (NMF) is a technique used in linear algebra, unsupervised machine learning, and signal processing to factorize a non-negative matrix into two non-negative matrices with a lower rank. It is a popular method used for data mining, image processing, text mining, and recommender systems.

## Background

NMF was first introduced by Lee and Seung in 1999 as a method to decompose a non-negative matrix into two non-negative matrices with a lower rank. The goal is to find a low-dimensional representation of the data that captures the most important features of the original data. NMF has been used in a variety of applications, including text mining, image processing, and audio processing.

## Formulation

Given a non-negative matrix X of size m x n, the goal of NMF is to find two non-negative matrices W and H such that X = WH. The rank of the resulting matrices W and H is typically much smaller than the rank of the original matrix X. The objective function for NMF can be formulated as:

$$\min_{W,H} ||X - WH||^2_F$$

where $||\cdot||_F$ is the Frobenius norm. The non-negativity constraints on W and H are imposed to ensure that the resulting factors are non-negative.

## Algorithms

There are several algorithms used to solve the NMF problem, including the multiplicative update algorithm, alternating least squares algorithm, and gradient descent algorithm. The multiplicative update algorithm is a popular method used to solve NMF due to its simplicity and efficiency. The algorithm iteratively updates the matrices W and H until convergence using the following update rules:

$$H_{ij} \leftarrow H_{ij} \frac{(W^TX)_{ij}}{(W^TWH)_{ij}}$$

and

$$W_{ij} \leftarrow W_{ij} \frac{(XH^T)_{ij}}{(WHH^T)_{ij}}$$

where $i = 1,2,...,m$ and $j=1,2,...,n$.

## Applications

NMF has been used in a variety of applications, including:

- Image processing: NMF can be used to extract features from images and reduce the dimensionality of image data.
- Text mining: NMF can be used to cluster and classify text data, and identify topics in large collections of documents.
- Recommender systems: NMF can be used to identify patterns in user-item matrices and make recommendations based on these patterns.
- Signal processing: NMF can be used to separate sources from a mixed signal and recover the original sources.

## Conclusion

Non-negative Matrix Factorization is a powerful tool for data analysis and signal processing. It is a popular method used for data mining, image processing, text mining, and recommender systems. NMF has many applications and has been shown to be effective in a variety of settings.
