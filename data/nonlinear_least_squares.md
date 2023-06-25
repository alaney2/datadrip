# Nonlinear Least Squares

Nonlinear least squares is a mathematical optimization technique used to fit a model to data when the relationship between the variables is nonlinear. It is an extension of the linear least squares method, which is used to fit a linear model to data. Nonlinear least squares is widely used in various fields, including engineering, physics, and finance, to model complex relationships between variables and estimate model parameters.

## Problem Formulation

Given a set of data points $(x_i, y_i)$, where $i = 1, 2, \dots, n$, the goal of nonlinear least squares is to find the parameters $\boldsymbol{\theta}$ of a nonlinear model $f(x_i, \boldsymbol{\theta})$ that minimize the sum of the squared residuals:


$$

\min_{\boldsymbol{\theta}} \sum_{i=1}^n \left(y_i - f(x_i, \boldsymbol{\theta})\right)^2

$$


The residuals are the differences between the observed values $y_i$ and the predicted values $f(x_i, \boldsymbol{\theta})$. The objective function, also known as the cost function or loss function, is a measure of the discrepancy between the data and the model.

## Solution Methods

There are several methods to solve nonlinear least squares problems, including iterative methods and direct methods. Iterative methods, such as the Gauss-Newton algorithm and the Levenberg-Marquardt algorithm, are widely used due to their efficiency and robustness. Direct methods, such as the trust-region method and the line-search method, are also used in some cases.

### Gauss-Newton Algorithm

The Gauss-Newton algorithm is an iterative method that is based on linearizing the nonlinear model at each iteration. It starts with an initial guess for the parameters $\boldsymbol{\theta}$ and iteratively updates the parameters using the following formula:


$$

\boldsymbol{\theta}_{k+1} = \boldsymbol{\theta}_k - \left(J_k^T J_k\right)^{-1} J_k^T \boldsymbol{r}_k

$$


where $J_k$ is the Jacobian matrix of the residuals $\boldsymbol{r}_k$ with respect to the parameters $\boldsymbol{\theta}$, evaluated at the current parameter estimate $\boldsymbol{\theta}_k$. The Jacobian matrix is a matrix of partial derivatives that represents the sensitivity of the residuals to changes in the parameters.

The Gauss-Newton algorithm converges quadratically when the initial guess is close to the true solution. However, it may not converge or converge slowly when the initial guess is far from the true solution or when the problem is ill-conditioned.

### Levenberg-Marquardt Algorithm

The Levenberg-Marquardt algorithm is an extension of the Gauss-Newton algorithm that incorporates a damping factor to improve the convergence properties. It is a hybrid method that combines the Gauss-Newton algorithm and the gradient descent method. The update formula for the Levenberg-Marquardt algorithm is:


$$

\boldsymbol{\theta}_{k+1} = \boldsymbol{\theta}_k - \left(J_k^T J_k + \lambda_k I\right)^{-1} J_k^T \boldsymbol{r}_k

$$


where $\lambda_k$ is the damping factor and $I$ is the identity matrix. The damping factor is adjusted at each iteration based on the progress of the optimization. When the damping factor is small, the algorithm behaves like the Gauss-Newton algorithm, and when the damping factor is large, the algorithm behaves like the gradient descent method.

The Levenberg-Marquardt algorithm is more robust than the Gauss-Newton algorithm and is less sensitive to the initial guess and the conditioning of the problem. However, it requires more computational effort due to the additional parameter tuning.

### Trust-Region Methods

Trust-region methods are a class of direct methods that solve nonlinear least squares problems by constructing a local quadratic model of the objective function and defining a trust region within which the model is considered accurate. The trust region is updated at each iteration based on the agreement between the model and the objective function.

Trust-region methods can be more robust and efficient than the Gauss-Newton algorithm and the Levenberg-Marquardt algorithm, especially for large-scale problems and problems with noisy data. However, they require more computational effort and may not be suitable for small-scale problems or problems with a simple structure.

### Line-Search Methods

Line-search methods are another class of direct methods that solve nonlinear least squares problems by searching for the optimal step size along a descent direction at each iteration. The descent direction can be computed using various techniques, such as the gradient, the Newton direction, or the conjugate gradient direction.

Line-search methods can be more flexible and efficient than trust-region methods, especially for problems with a simple structure or a small number of parameters. However, they may not be as robust as trust-region methods and may require more iterations to converge.

## Applications

Nonlinear least squares is used in various fields to model complex relationships between variables and estimate model parameters. Some common applications include:

- Curve fitting: Fitting a nonlinear curve to data points to describe the relationship between variables.
- Parameter estimation: Estimating the parameters of a nonlinear model from observed data.
- System identification: Identifying the parameters of a dynamic system from input-output data.
- Image registration: Aligning two or more images by estimating the transformation parameters.
- Computer vision: Estimating the parameters of a camera model from observed image features.

## Limitations and Challenges

Nonlinear least squares problems can be challenging to solve due to several factors, such as the nonlinearity of the model, the presence of multiple local minima, the sensitivity to the initial guess, and the ill-conditioning of the problem. Some limitations and challenges of nonlinear least squares include:

- Convergence: The convergence of iterative methods, such as the Gauss-Newton algorithm and the Levenberg-Marquardt algorithm, depends on the initial guess and the conditioning of the problem. The algorithms may not converge or converge slowly when the initial guess is far from the true solution or when the problem is ill-conditioned.
- Local minima: Nonlinear least squares problems may have multiple local minima, which can cause the optimization algorithms to get stuck in a suboptimal solution. Global optimization techniques, such as simulated annealing and genetic algorithms, can be used to overcome this issue.
- Computational complexity: The solution methods for nonlinear least squares problems, such as the Gauss-Newton algorithm, the Levenberg-Marquardt algorithm, and the trust-region methods, require the computation of the Jacobian matrix and the inversion of large matrices, which can be computationally expensive for large-scale problems.
- Noise and outliers: The presence of noise and outliers in the data can affect the accuracy and robustness of the parameter estimates. Robust estimation techniques, such as the least absolute deviations method and the Huber loss function, can be used to mitigate the impact of noise and outliers.
