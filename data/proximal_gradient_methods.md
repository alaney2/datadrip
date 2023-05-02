# Proximal Gradient Methods

Proximal gradient methods, also known as proximal algorithms, are optimization techniques used to solve non-smooth and convex or non-convex optimization problems. These methods have gained significant attention in recent years due to their ability to handle large-scale machine learning problems.

Proximal gradient methods are a combination of gradient descent and proximity operator. The gradient descent is used to update the algorithm's current estimate of the solution, and the proximity operator is used to project the solution onto a feasible set. The proximity operator plays a critical role in the algorithm, as it ensures that the solution remains within the feasible set.

## Basic Algorithm

The proximal gradient method is a two-step iterative process, consisting of a gradient descent step and a proximity operator step. The basic algorithm for a convex optimization problem is as follows:

1. Initialize the algorithm with an arbitrary starting point $x_0$.
2. For each iteration $k$, update the solution using the following two steps:
    - Perform a gradient descent step: $x_{k+1} = x_k - \alpha_k \nabla f(x_k)$
    - Perform a proximity operator step: $x_{k+1} = \text{prox}_{\alpha_k g}(x_{k+1})$, where $\text{prox}_{\alpha_k g}(x)$ is the proximity operator of the function $g$ at point $x$ with step size $\alpha_k$.
3. Repeat step 2 until convergence.

## Proximal Operator

The proximity operator of a function $g$ at point $x$ is defined as:

$$\text{prox}_{\alpha_k g}(x) = \text{argmin}_{z \in \mathbb{R}^n} \left\{g(z) + \frac{1}{2\alpha_k} \|z-x\|_2^2 \right\}$$

The proximity operator is used to project the solution onto a feasible set at each iteration. The function $g$ is a convex function that represents a constraint or a regularizer. The step size $\alpha_k$ is a positive scalar that controls the size of the update.

## Applications

Proximal gradient methods have been widely used in many machine learning applications, including:

- Sparse coding and compressed sensing
- Non-negative matrix factorization
- Support vector machines
- Logistic regression
- Lasso and ridge regression

## Further Readings

- "Proximal Algorithms in Machine Learning" by Neal Parikh and Stephen Boyd.
- "Proximal Optimization for Large-Scale Machine Learning" by Martin Jaggi.
- "Proximal Gradient Methods for Nonconvex Problems" by Amir Beck and Marc Teboulle.
