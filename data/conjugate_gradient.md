# Conjugate Gradient

The Conjugate Gradient (CG) algorithm is an iterative method for solving systems of linear equations. It is commonly used in optimization problems and is especially useful when dealing with large, sparse matrices. The CG algorithm is a type of iterative solver that aims to minimize the residual error between the approximate solution and the actual solution. 

## Algorithm

The CG algorithm is a method of finding the minimum of a quadratic function. Given a symmetric positive-definite matrix A and a vector b, the goal is to find the vector x that satisfies:

$$Ax = b$$

The CG algorithm starts by initializing the solution vector x to zero, and the residual vector r to the right-hand side of the equation:

$$r_0 = b - Ax_0$$

The CG algorithm then iteratively computes a sequence of conjugate directions d_k, and updates the solution vector x_k as follows:

$$x_{k+1} = x_k + \alpha_k d_k$$

where $\alpha_k$ is the step size, or the amount to move along the conjugate direction. The conjugate direction is chosen such that it is orthogonal to all previous conjugate directions. 

## Advantages

One of the main advantages of the CG algorithm is that it only requires matrix-vector multiplications, which makes it very efficient for large, sparse matrices. It is also guaranteed to converge in n steps, where n is the size of the matrix, if the matrix is positive-definite. 

## Further Readings

- Stochastic Gradient Descent
- Quasi-Newton Methods
- Nonlinear Conjugate Gradient
- Preconditioned Conjugate Gradient
