# Nesterov Accelerated Gradient

Nesterov accelerated gradient (NAG) is an optimization algorithm used in machine learning for finding the minimum of an objective function. It is an extension of the gradient descent algorithm with added momentum to speed up convergence. NAG is named after Yurii Nesterov, who introduced it in 1983.

## Algorithm

Nesterov accelerated gradient computes the gradient of the objective function at the current position while incorporating the momentum term from the previous iteration. The algorithm first computes the gradient of the objective function at the current position, then applies the momentum term to the gradient, and finally updates the position using the momentum-augmented gradient. The update rule for NAG is given by:

$$v_t = \gamma v_{t-1} + \eta \nabla f(x_{t-1} - \gamma v_{t-1})$$
$$x_t = x_{t-1} - v_t$$

where $x_t$ is the parameter vector at iteration $t$, $\nabla f(x_{t-1} - \gamma v_{t-1})$ is the gradient of the objective function at the position $x_{t-1} - \gamma v_{t-1}$, $\gamma$ is the momentum parameter, $\eta$ is the learning rate, and $v_t$ is the velocity vector at iteration $t$.

The momentum term accelerates the search for the minimum by taking into account the direction of the previous velocity vector. The gradient is evaluated at the position that the momentum would take us to if we were to continue in the same direction. This anticipatory step helps NAG to achieve faster convergence than gradient descent.

## Advantages

Nesterov accelerated gradient has several advantages over gradient descent and other optimization algorithms. One of its primary benefits is its ability to handle high curvature and small eigenvalue problems. It is also less susceptible to oscillations around the minimum and can converge more quickly than other algorithms.

Moreover, NAG has better theoretical convergence guarantees than other optimization algorithms. Specifically, it has a convergence rate of $O(1/t^2)$ for strongly convex functions and $O(1/t)$ for non-strongly convex functions, which is faster than the convergence rate of gradient descent.

## Disadvantages

Despite its advantages, Nesterov accelerated gradient has a few drawbacks. One of its primary disadvantages is its sensitivity to the choice of hyperparameters, such as the learning rate and momentum parameter. Choosing the right hyperparameters can be challenging, and poorly chosen values can lead to slow convergence or oscillations.

Additionally, NAG can suffer from the problem of overshooting, where the algorithm passes the minimum and then oscillates around it. This issue can be alleviated by using a smaller momentum parameter or by applying a line search to determine the optimal step size.

## Conclusion

Nesterov accelerated gradient is a powerful optimization algorithm that can speed up convergence and achieve better results than gradient descent and other optimization algorithms. Its ability to handle high curvature and small eigenvalue problems, along with its theoretical convergence guarantees, make it a popular choice in machine learning and deep learning applications. However, its sensitivity to hyperparameters and the problem of overshooting can be challenging to overcome, and careful tuning is required to achieve optimal performance.
