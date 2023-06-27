# The Moving Block Hessian Approximation for Large Scale Optimization

The Moving Block Hessian (MBH) approximation is a technique used in large scale optimization problems to approximate the Hessian matrix, which is a square matrix of second-order partial derivatives of a scalar-valued function. The Hessian matrix is used in various optimization algorithms, such as Newton's method and Quasi-Newton methods, to find the minimum or maximum of a function. However, computing and storing the Hessian matrix can be computationally expensive, especially for large scale problems. The MBH approximation addresses this issue by approximating the Hessian matrix using a block structure, which reduces the computational complexity and storage requirements.

## Background

In optimization problems, the objective is to find the minimum or maximum of a scalar-valued function $f(x)$, where $x$ is a vector of variables. The Hessian matrix $H(x)$ is a square matrix of second-order partial derivatives of $f(x)$ with respect to $x$, and is defined as:


$$

H(x) = \begin{bmatrix}
\frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\
\frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \cdots & \frac{\partial^2 f}{\partial x_2 \partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial^2 f}{\partial x_n \partial x_1} & \frac{\partial^2 f}{\partial x_n \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_n^2}
\end{bmatrix}

$$


The Hessian matrix is used in various optimization algorithms to find the minimum or maximum of a function. For example, in Newton's method, the search direction is determined by solving the linear system $H(x) d = -\nabla f(x)$, where $d$ is the search direction and $\nabla f(x)$ is the gradient of $f(x)$. However, computing and storing the Hessian matrix can be computationally expensive, especially for large scale problems.

## The Moving Block Hessian Approximation

The Moving Block Hessian (MBH) approximation is a technique used to approximate the Hessian matrix using a block structure. The main idea is to divide the Hessian matrix into smaller blocks and update only a subset of these blocks at each iteration. This reduces the computational complexity and storage requirements compared to computing and storing the full Hessian matrix.

The MBH approximation can be represented as:


$$

\tilde{H}(x) = \begin{bmatrix}
H_1(x) & 0 & \cdots & 0 \\
0 & H_2(x) & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & H_m(x)
\end{bmatrix}

$$


where $H_i(x)$ are smaller blocks of the Hessian matrix, and $m$ is the number of blocks. The size of each block can be chosen based on the problem structure or computational resources available.

At each iteration of the optimization algorithm, only a subset of the blocks $H_i(x)$ are updated. The selection of the blocks to update can be done using various strategies, such as cyclic selection, random selection, or based on the gradient information. The updated blocks are then used to compute the search direction, and the optimization algorithm proceeds as usual.

## Advantages and Disadvantages

The main advantage of the MBH approximation is the reduction in computational complexity and storage requirements compared to computing and storing the full Hessian matrix. This makes it suitable for large scale optimization problems where the full Hessian matrix is too expensive to compute or store.

However, the MBH approximation also has some disadvantages. The approximation may not be accurate, especially if the problem structure is not well-suited for a block structure. In addition, the choice of the block size and the selection strategy for updating the blocks can have a significant impact on the performance of the optimization algorithm. Therefore, it may require some problem-specific tuning to achieve good performance.

## Applications

The MBH approximation has been applied to various large scale optimization problems, such as machine learning, image processing, and control systems. It has been used in combination with various optimization algorithms, such as Quasi-Newton methods, conjugate gradient methods, and block coordinate descent methods.

In particular, the MBH approximation has been used in the Broyden-Fletcher-Goldfarb-Shanno (BFGS) algorithm, which is a popular Quasi-Newton method for solving unconstrained optimization problems. The MBH-BFGS algorithm combines the MBH approximation with the BFGS update formula, resulting in an efficient algorithm for large scale optimization problems.
