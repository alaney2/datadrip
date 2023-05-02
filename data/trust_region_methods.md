# Trust Region Methods

**Trust Region Methods** is an optimization technique for minimizing a non-linear objective function $f(x)$, where $x$ is a vector of parameters. 

This method belongs to the family of second-order methods that utilize the Hessian matrix, which contains information about the curvature of the function, to approximate the local behavior of the function. It is a popular optimization technique widely used in machine learning, computer vision, and robotics. 

## Algorithm

The algorithm of Trust Region Methods has the following steps:

1. Initialize the parameters $x$ and the trust region radius $\Delta$.
2. Solve the subproblem of finding the step $\Delta x$ that minimizes the quadratic model around $x$ within the trust region:
$$
\min_{\Delta x} m(\Delta x) = f(x) + \nabla f(x)^T \Delta x + \frac{1}{2} \Delta x^T B \Delta x \\
\text{subject to } ||\Delta x|| \leq \Delta
$$
where $\nabla f(x)$ is the gradient of the function evaluated at $x$, $B$ is the approximation of the Hessian matrix, which satisfies the curvature condition $||\Delta x||^2 \leq \Delta^2 \Delta x^T B \Delta x$, and $||\cdot||$ denotes the Euclidean norm.
3. If $m(\Delta x) < f(x)$, then accept the step and update the parameters $x = x + \Delta x$, and update the trust region radius $\Delta = \Delta \times \alpha$, where $\alpha > 1$ is a constant that controls the size of the trust region. Otherwise, reject the step and reduce the trust region radius $\Delta = \Delta \times \beta$, where $\beta < 1$ is a constant that controls the size of the trust region.
4. Repeat steps 2-3 until convergence criteria are met.

## Advantages and Disadvantages

Trust Region Methods have several advantages over other optimization techniques such as Gradient Descent and Newton's Method. Firstly, it guarantees convergence to a stationary point, which is a critical property in many applications. Secondly, it has good performance on ill-conditioned problems, where other second-order methods such as Newton's Method may fail. Thirdly, it can handle non-linear constraints, which enables it to solve optimization problems with constraints.

However, Trust Region Methods also have some disadvantages. Firstly, it can be computationally expensive to solve the subproblem of finding the step within the trust region. Secondly, the performance is sensitive to the choice of the trust region radius and the approximation of the Hessian matrix. Lastly, it may converge slowly to the optimal solution.

## Further Readings

- Levenberg-Marquardt Algorithm
- Conjugate Gradient Method
