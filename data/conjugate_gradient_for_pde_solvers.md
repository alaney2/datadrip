# Conjugate Gradient For PDE Solvers

Conjugate gradient (CG) is an iterative method for solving linear systems, which is widely used in various scientific and engineering applications. In particular, it is an efficient method for solving large-scale linear systems arising from partial differential equations (PDEs).

## Introduction

PDEs arise in many scientific and engineering problems, such as fluid dynamics, electromagnetics, and structural mechanics. Typically, PDEs are solved numerically by discretizing the domain into a mesh and approximating the solution on the mesh nodes. This leads to a large-scale linear system, which needs to be solved efficiently and accurately. 

CG is a popular method for solving such linear systems, especially when the matrix is symmetric and positive-definite. It belongs to the class of Krylov subspace methods, which construct a sequence of approximate solutions by iteratively minimizing the residual over a fixed subspace of the original linear system. 

## Algorithm

The CG algorithm can be stated as follows:

1. Choose an initial guess $x_0$ and set $r_0 = b - Ax_0$, where $A$ is the matrix and $b$ is the right-hand side vector.
2. Set $p_0 = r_0$ and $k=0$.
3. Repeat until convergence:
   * Compute $\alpha_k = \frac{r_k^Tr_k}{p_k^TAp_k}$.
   * Update $x_{k+1} = x_k + \alpha_kp_k$ and $r_{k+1} = r_k - \alpha_kAp_k$.
   * Compute $\beta_k = \frac{r_{k+1}^Tr_{k+1}}{r_k^Tr_k}$.
   * Update $p_{k+1} = r_{k+1} + \beta_kp_k$.
   * Increment $k$.

Here, $x_k$ is the $k$-th approximation to the solution, $r_k$ is the $k$-th residual, and $p_k$ is the $k$-th search direction. The algorithm stops when a certain convergence criterion is met, such as the norm of the residual being below a certain threshold.

## Properties

CG has several properties that make it attractive for PDE solvers:

* Convergence rate: CG is guaranteed to converge in at most $n$ iterations for an $n\times n$ matrix, assuming exact arithmetic. Moreover, under certain conditions on the matrix, the convergence rate can be much faster than the classical Jacobi or Gauss-Seidel methods.
* Memory efficiency: CG only requires storing a few vectors of size $n$, which makes it suitable for large-scale problems.
* Symmetric positive-definite matrices: CG is specifically designed for symmetric positive-definite matrices, which are common in PDE solvers.

## Extensions and variations

There are several extensions and variations of CG that have been developed over the years, such as:

* Preconditioned CG: CG can be combined with a preconditioner, which is a matrix approximation that improves the conditioning of the original matrix and speeds up convergence.
* Nonlinear CG: CG can be extended to nonlinear systems by replacing the matrix-vector product with a nonlinear operator evaluation.
* CG for nonsymmetric matrices: Various modifications of CG have been proposed for nonsymmetric matrices, such as the BiCG and QMR methods.

## Conclusion

CG is a powerful and efficient method for solving linear systems arising from PDEs. Its convergence rate and memory efficiency make it a popular choice for large-scale problems, especially when the matrix is symmetric and positive-definite. However, it requires careful implementation and tuning, especially when combined with preconditioning or used for nonsymmetric matrices.
