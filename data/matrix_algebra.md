# Matrix Algebra

Matrix algebra is a branch of mathematics that deals with the study of matrices and their properties. It is widely used in various fields such as physics, engineering, computer science, and economics. In particular, matrix algebra plays a critical role in the development of machine learning algorithms, including deep learning.

## Matrices

Before discussing matrix algebra, one must first have a basic understanding of matrices. A matrix is a rectangular array of numbers, arranged in rows and columns. For example, the following is a 2x2 matrix:

$$
A = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$

Matrices can be added, subtracted, and multiplied, but these operations are subject to certain rules. For example, the matrices being added or subtracted must have the same dimensions, whereas the matrices being multiplied must satisfy certain requirements.

## Linear Algebra

Linear algebra is a prerequisite for matrix algebra, as it provides the foundation for studying matrices and their properties. It is concerned with the study of linear equations and their solutions, as well as the study of vector spaces and linear transformations.

## Matrix Operations

Matrix algebra involves various operations on matrices, including addition, subtraction, multiplication, and division. These operations follow certain rules, such as the distributive and associative properties.

Matrix addition and subtraction are straightforward, and involve adding or subtracting corresponding elements of two matrices of the same dimensions. For example, given matrices $A$ and $B$ of dimensions $m \times n$, their sum and difference are defined as:

$$
A + B = \begin{bmatrix}
a_{11} + b_{11} & a_{12} + b_{12} & \cdots & a_{1n} + b_{1n} \\
a_{21} + b_{21} & a_{22} + b_{22} & \cdots & a_{2n} + b_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} + b_{m1} & a_{m2} + b_{m2} & \cdots & a_{mn} + b_{mn}
\end{bmatrix}
$$

$$
A - B = \begin{bmatrix}
a_{11} - b_{11} & a_{12} - b_{12} & \cdots & a_{1n} - b_{1n} \\
a_{21} - b_{21} & a_{22} - b_{22} & \cdots & a_{2n} - b_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} - b_{m1} & a_{m2} - b_{m2} & \cdots & a_{mn} - b_{mn}
\end{bmatrix}
$$

Matrix multiplication, on the other hand, is more complex and subject to certain requirements. Given two matrices $A$ and $B$ of dimensions $m \times n$ and $n \times p$, respectively, their product $C$ is defined as:

$$
C = AB
$$

where $C$ is a matrix of dimensions $m \times p$, and each element $c_{ij}$ is obtained by taking the dot product of the $i$th row of $A$ and the $j$th column of $B$. This can be expressed as:

$$
c_{ij} = \sum_{k=1}^n a_{ik}b_{kj}
$$

It is important to note that matrix multiplication is not commutative, meaning that $AB \neq BA$ in general.

## Further Readings

- Eigenvalues and Eigenvectors
- Singular Value Decomposition
- Matrix Factorization
