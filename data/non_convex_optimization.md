# Non Convex Optimization

Non-convex optimization refers to the optimization of non-convex functions. A function is non-convex if it contains regions where the function is not "bowl-shaped" or "convex." This type of function can lead to multiple local minima, making optimization difficult. In contrast, a convex function is one where the line segment between any two points on the function lies above the function, making it easy to find the global minimum.

Non-convex optimization has many applications in machine learning, such as in deep learning, where neural networks are used to model complex functions. Non-convex optimization algorithms are used to optimize the parameters of the neural network, such as the weights and biases, to minimize the loss function. 

## Gradient Descent

Gradient descent is a widely-used optimization algorithm that is commonly used in non-convex optimization. It works by iteratively updating the parameters of the function in the direction of the negative gradient of the function, until a minimum is reached. However, gradient descent can become stuck in local minima, making it difficult to find the global minimum.

## Convex Optimization

Convex optimization deals with the optimization of convex functions. Convex functions have only one minimum point, making it easy to find the global minimum. Convex optimization algorithms are commonly used in machine learning, such as in support vector machines and linear regression.

## Stochastic Gradient Descent

Stochastic gradient descent is a variant of gradient descent that introduces randomness into the algorithm. Instead of computing the gradient of the entire dataset, stochastic gradient descent computes the gradient of each data point separately. This can help prevent the algorithm from getting stuck in local minima.

## ADAM Optimization Algorithm

ADAM is a widely-used optimization algorithm for non-convex optimization. It is a variant of stochastic gradient descent that uses adaptive learning rates and momentum to accelerate convergence. ADAM has been shown to be effective in deep learning applications.

## Quasi-Newton Methods

Quasi-Newton methods are a class of optimization algorithms that use an approximation of the Hessian matrix to estimate the curvature of the function. This can help prevent the algorithm from getting stuck in local minima.

## Broyden-Fletcher-Goldfarb-Shanno Algorithm

The Broyden-Fletcher-Goldfarb-Shanno (BFGS) algorithm is a quasi-Newton method that uses an approximation of the Hessian matrix to estimate the curvature of the function. BFGS is commonly used in machine learning applications, such as in logistic regression and neural networks.

Non-convex optimization is an important field in machine learning, as it allows us to optimize complex functions that are not convex. By using algorithms such as gradient descent, stochastic gradient descent, ADAM, and quasi-Newton methods, we can optimize these functions and find the global optimum.
