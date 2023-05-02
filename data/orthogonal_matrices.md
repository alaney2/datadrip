# Orthogonal Matrices

An **orthogonal matrix** is a square matrix whose columns and rows are orthonormal vectors. In other words, an orthogonal matrix $Q$ satisfies the following conditions:

1. $Q^TQ = QQ^T = I$, where $I$ is the identity matrix.
2. The dot product of any two distinct columns or rows of $Q$ is zero.
3. The norm of each column or row of $Q$ is 1.

Orthogonal matrices are important in many areas of mathematics and science, including linear algebra, physics, signal processing, and computer graphics. They have a number of useful properties that make them valuable tools in these fields.

## Properties

There are several important properties of orthogonal matrices:

1. They preserve distances: If $x$ and $y$ are two vectors, then $\|Qx-Qy\| = \|x-y\|$. This means that orthogonal matrices preserve the Euclidean distance between points.
2. They preserve angles: If $x$ and $y$ are two vectors, then $\cos\theta = \frac{x^Ty}{\|x\|\|y\|}$, where $\theta$ is the angle between $x$ and $y$. If $Q$ is an orthogonal matrix, then $\cos\theta = \frac{(Qx)^T(Qy)}{\|(Qx)\|\|(Qy)\|} = \frac{x^Ty}{\|x\|\|y\|}$, so $Q$ preserves the angle between vectors.
3. They are unitary: An orthogonal matrix is also unitary, which means that it preserves lengths and angles in the complex plane. Specifically, if $z$ and $w$ are two complex numbers, then $\|Qz\| = \|z\|$ and $\operatorname{arg}(Qz) = \operatorname{arg}(z)$, where $\operatorname{arg}(z)$ is the angle between the positive real axis and the line joining the origin to $z$.

## Applications

Orthogonal matrices have many applications in mathematics and science. Some of the most common applications include:

1. **Rotation**: Orthogonal matrices can be used to rotate vectors in two or three dimensions. For example, the matrix

$$
R = \begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}
$$

rotates a vector counterclockwise by an angle of $\theta$ in the plane. In three dimensions, rotation matrices are more complicated, but they can still be constructed using orthogonal matrices.
2. **Orthonormal bases**: Orthogonal matrices can be used to construct orthonormal bases for vector spaces. For example, the columns of an orthogonal matrix form an orthonormal basis for $\mathbb{R}^n$.
3. **Linear transformations**: Orthogonal matrices can be used to represent linear transformations that preserve distances and angles. For example, if $A$ is an $n\times n$ orthogonal matrix, then the linear transformation $T(x) = Ax$ preserves distances and angles.

## Further Readings

- QR decomposition
- Singular value decomposition
