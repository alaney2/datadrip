# Determinants

In linear algebra, a determinant is a scalar value that can be computed from a square matrix. It describes several properties of the matrix, such as its invertibility, linear independence of its columns or rows, and the scaling factor of the linear transformation it represents. Determinants have many applications in mathematics, physics, engineering, and computer science, such as computing the area or volume of a shape, solving systems of linear equations, finding eigenvalues and eigenvectors, or analyzing symmetries and transformations.

## Definition

The determinant of a square matrix A of size n is denoted as det(A), det A, or |A|, and is defined recursively as follows:

- For n = 1, det(A) = a11, where a11 is the only element of A.
- For n > 1, det(A) = sum((-1)^(i+j) * aij * det(Aij)), for i = 1 to n, where Aij is the matrix obtained by deleting row i and column j from A. In other words, the determinant of A is the sum of the products of the elements of any row or column of A with their corresponding cofactors, which are the determinants of the submatrices Aij multiplied by (-1)^(i+j).

For example, the determinant of a 2x2 matrix A = [a11 a12; a21 a22] is det(A) = a11a22 - a12a21, and the determinant of a 3x3 matrix A = [a11 a12 a13; a21 a22 a23; a31 a32 a33] is:

det(A) = a11(a22a33 - a23a32) - a12(a21a33 - a23a31) + a13(a21a32 - a22a31)

Alternatively, the determinant of a matrix can also be computed using its LU factorization, which decomposes A into a lower triangular matrix L, an upper triangular matrix U, and a permutation matrix P, such that A = PLU. Then, det(A) = det(P) * det(L) * det(U) = (-1)^s * prod(diag(U)), where s is the number of row swaps performed during the LU factorization, and prod(diag(U)) is the product of the diagonal elements of U.

## Properties

Determinants have several notable properties, such as:

- det(A) = det(A^T), where A^T is the transpose of A.
- det(cA) = c^n * det(A), where c is a scalar and n is the size of A.
- det(AB) = det(A) * det(B), where A and B are square matrices of the same size.
- det(A^-1) = 1/det(A), if A is invertible.
- det(A) = 0, if A is singular or not invertible.
- det(A) = prod(lambda_i), where lambda_i are the eigenvalues of A.

These properties can be used to simplify the computation or manipulation of determinants and matrices, and to derive other important results in linear algebra, such as the Cayley-Hamilton theorem, the characteristic polynomial, or the trace of a matrix.

## Applications

Determinants have many practical applications in various fields, such as:

- Geometry: the determinant of a 2x2 matrix A = [a b; c d] represents the area of the parallelogram formed by the vectors [a,c] and [b,d], and the determinant of a 3x3 matrix A = [a b c; d e f; g h i] represents the volume of the parallelepiped formed by the vectors [a,d,g], [b,e,h], and [c,f,i].
- Systems of linear equations: a system of n linear equations with n variables Ax = b has a unique solution if and only if det(A) != 0, and the solution can be obtained by x = A^-1b.
- Eigenvalues and eigenvectors: the determinant of a matrix A - lambda*I, where I is the identity matrix and lambda is a scalar, represents the characteristic polynomial of A, whose roots are the eigenvalues of A. Moreover, the eigenvectors of A can be found by solving the equation (A - lambda*I)x = 0, whose non-zero solutions correspond to the eigenvectors.
- Matrix decomposition: the determinant of a matrix A can be used to compute its LU factorization, its QR factorization, or its singular value decomposition, which are useful for solving linear systems, minimizing least squares problems, or compressing data.

Determinants are a fundamental concept in linear algebra and provide a powerful tool for understanding and solving many mathematical problems. They are closely related to other concepts such as matrices, eigenvalues and eigenvectors, matrix decomposition, and linear transformations, and have numerous applications in various fields of science and engineering.
