# Quasi-Newton Methods

Quasi-Newton methods are optimization algorithms that approximate the Hessian matrix, which is the second-order partial derivative of a function, in order to speed up the convergence of gradient descent. They are particularly useful when the Hessian matrix is too expensive or too difficult to compute.

## Overview

Quasi-Newton methods are a family of iterative algorithms that use an approximation of the Hessian matrix to update the search direction at each iteration. The Hessian matrix is an important mathematical concept in optimization because it describes the curvature of the function at a particular point. However, computing the Hessian matrix is often computationally expensive and may be numerically unstable. Quasi-Newton methods provide a way to approximate the Hessian matrix without computing it directly.

The most popular quasi-Newton method is the Broyden–Fletcher–Goldfarb–Shanno (BFGS) algorithm, which was introduced in 1970. The BFGS algorithm and its limited-memory variant (L-BFGS) are widely used in machine learning and deep learning because they are efficient, robust, and do not require the computation of the exact Hessian matrix. Other quasi-Newton methods include the nonlinear conjugate gradient method, the truncated Newton method, and the Bayesian quasi-Newton method.

## Algorithm

The BFGS algorithm is an iterative method that updates an approximation of the inverse Hessian matrix, denoted by $B_k$, at each iteration $k$. The search direction is given by $p_k=-B_k\nabla f(x_k)$, where $\nabla f(x_k)$ is the gradient of the function at the current point $x_k$. The update of the inverse Hessian matrix is given by the BFGS formula:

$$B_{k+1} = B_k + \frac{\Delta x_k\Delta x_k^T}{\Delta x_k^T\Delta g_k} - \frac{B_k\Delta g_k\Delta g_k^TB_k}{\Delta g_k^TB_k\Delta g_k},$$

where $\Delta x_k = x_{k+1}-x_k$ and $\Delta g_k = \nabla f(x_{k+1})-\nabla f(x_k)$ are the changes in the variables and the gradients, respectively.

The L-BFGS algorithm is a memory-efficient variant of the BFGS algorithm that stores only a limited number of previous updates of the inverse Hessian matrix. This makes it suitable for large-scale optimization problems where the full Hessian matrix cannot be stored in memory.

## Advantages and Disadvantages

Quasi-Newton methods have several advantages over other optimization algorithms, such as gradient descent and Newton's method. They are generally faster and more robust than gradient descent, especially for high-dimensional problems, and they do not require the computation of the exact Hessian matrix, which can be computationally expensive or numerically unstable. Furthermore, quasi-Newton methods can be applied to non-smooth or non-convex functions, which are common in machine learning and deep learning.

However, quasi-Newton methods also have some disadvantages. They may not converge to a global minimum, especially if the function is non-convex or has multiple local minima. Moreover, the BFGS algorithm may become numerically unstable if the curvature of the function changes rapidly or if the approximation of the inverse Hessian matrix is not positive definite.

## Further Readings

- Broyden–Fletcher–Goldfarb–Shanno (BFGS) Method
- Limited-Memory BFGS (L-BFGS) Method
- Nonlinear Conjugate Gradient Method
- Truncated Newton Method
- Quasi-Newton Methods for Sparse Problems
- Trust-Region Methods
- Stochastic Quasi-Newton Methods
- Bayesian Quasi-Newton Methods
- Quasi-Newton Methods for Large-Scale Problems
