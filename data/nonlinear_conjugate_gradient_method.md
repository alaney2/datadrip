# Nonlinear Conjugate Gradient Method

The Nonlinear Conjugate Gradient (NCG) Method is an optimization algorithm used to find the minimum of a nonlinear function. It is an extension of the Conjugate Gradient Method (CG) used for linear functions.

## Background

The NCG method is used to solve optimization problems of the form:

$$\min_{x\in\mathbb{R}^n} f(x)$$

where $f:\mathbb{R}^n\rightarrow\mathbb{R}$ is a nonlinear function. The objective is to find the minimum of $f(x)$.

## Algorithm

The NCG algorithm is an iterative method that uses the gradient and a search direction to find the minimum. At each iteration, the algorithm computes the search direction as a linear combination of the negative gradient and the previous search direction. The step size is then determined by a line search algorithm.

The NCG algorithm can be summarized as follows:

1. Choose an initial point $x_0$ and set $k=0$.
2. Compute the gradient $g_k=\nabla f(x_k)$.
3. If $g_k=0$, stop. $x_k$ is the solution.
4. If $k=0$, set the search direction $d_k=-g_k$.
5. Otherwise, compute the conjugate direction $d_k=-g_k+\beta_kd_{k-1}$, where $\beta_k$ is a scalar determined by the Polak-Ribiere formula or the Fletcher-Reeves formula.
6. Determine the step size $\alpha_k$ by a line search algorithm.
7. Update the approximation $x_{k+1}=x_k+\alpha_kd_k$.
8. Set $k=k+1$ and go to step 2.

## Advantages and Limitations

The NCG method has several advantages over other optimization algorithms:

- It is well-suited for large-scale optimization problems.
- It does not require the computation of the Hessian matrix, which can be computationally expensive for high-dimensional problems.

However, the NCG method also has some limitations:

- It may converge slowly for ill-conditioned problems.
- It can be sensitive to the choice of the conjugate direction formula.

## Further Readings

- BFGS Method
- L-BFGS Method
- Quasi-Newton Methods
