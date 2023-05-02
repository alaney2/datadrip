# Quadratic Programming

Quadratic programming is a mathematical optimization problem that involves maximizing or minimizing a quadratic function subjected to linear constraints. It is a special case of nonlinear programming, and it has several applications in various fields, including finance, engineering, and computer science.

## Formulation

Quadratic programming can be formulated as follows:

$$\begin{aligned}
\min_{x} \quad & \frac{1}{2} x^T Q x + c^T x \\
\text{s.t.} \quad & A x \leq b \\
& E x = d \\
\end{aligned}$$

where $Q$ is a positive semidefinite matrix, $c$ is a vector, $A$ is a matrix, $b$ is a vector, $E$ is a matrix, and $d$ is a vector. The objective function is a quadratic function, and the constraints are linear.

## Solution Methods

There are several methods for solving quadratic programming problems, including:

- **Active Set Method**: This method solves the problem by iteratively adding and removing constraints until the optimal solution is found. It is particularly efficient for problems with a small number of constraints.

- **Interior Point Method**: This method solves the problem by transforming it into a sequence of unconstrained problems and solving them using a Newton-like method. It is particularly efficient for problems with a large number of constraints.

- **Sequential Quadratic Programming**: This method solves the problem by iteratively solving a sequence of subproblems that approximate the original problem. It is particularly efficient for problems with nonlinear constraints.

## Applications

Quadratic programming has several applications in various fields, including:

- **Portfolio Optimization**: In finance, quadratic programming is used to optimize the allocation of assets in a portfolio. The objective function represents the expected return, and the constraints represent the risk.

- **Control Theory**: In engineering, quadratic programming is used to design optimal controllers for dynamical systems. The objective function represents the performance, and the constraints represent the limitations.

- **Machine Learning**: In computer science, quadratic programming is used to train support vector machines, which are powerful classifiers that can handle complex data. The objective function represents the margin, and the constraints represent the separation.

## Further Readings

- [Convex Optimization](https://web.stanford.edu/~boyd/cvxbook/): A comprehensive textbook on convex optimization, which includes a chapter on quadratic programming.

- [Interior Point Methods](https://doi.org/10.1137/1.9781611970791): A classic book on interior point methods, which provides a detailed analysis of their theoretical and practical aspects.

- [Nonlinear Programming](https://doi.org/10.1007/978-3-662-12616-5): A classic book on nonlinear programming, which covers a wide range of topics, including quadratic programming.
