# Momentum

In machine learning, **momentum** refers to a technique used to optimize the weights of a neural network during training. Momentum is an extension of the Gradient Descent algorithm and is based on the principle of adding a fraction of the previous weight update to the current update. The technique was first introduced by Boris T. Polyak in his paper "Some methods of speeding up the convergence of iteration methods".

## How Momentum Works

The Momentum algorithm updates the weights of a neural network in the following way:

$$v_t = \gamma v_{t-1} + \eta \nabla_w J(w_t)$$
$$w_{t+1} = w_t - v_t$$

where $v_t$ is the momentum vector at time step $t$, $\gamma$ is the momentum coefficient, $\eta$ is the learning rate, $\nabla_w J(w_t)$ is the gradient of the cost function with respect to the weights at time step $t$, and $w_t$ is the weight vector at time step $t$. The momentum coefficient $\gamma$ is typically set to a value between 0 and 1.

In the above equations, the gradient of the cost function is multiplied by the learning rate $\eta$ and added to the momentum vector. The momentum vector is then updated with a fraction $\gamma$ of its previous value. Finally, the new weight vector is obtained by subtracting the momentum vector from the previous weight vector.

Intuitively, the momentum term allows the optimizer to "remember" the direction it is moving in and continue in that direction, even if the gradient changes direction. This can help accelerate convergence and avoid getting stuck in local minima.

## Advantages and Disadvantages of Momentum

The main advantage of using momentum is that it can significantly speed up convergence, particularly in cases where the cost function has a lot of curvature. Additionally, momentum can help dampen oscillations in the weight updates caused by high-frequency components in the gradient.

However, momentum can also have some drawbacks. For example, if the momentum coefficient is set too high, the optimizer may overshoot the minimum and oscillate around it, leading to slower convergence. Additionally, the momentum term can sometimes cause the optimizer to get stuck in shallow local minima.

## Further Readings

- **Nesterov Accelerated Gradient**: Another optimization technique that improves upon momentum by taking into account the predicted future position of the weight vector.
- **Adam Optimizer**: A popular optimization algorithm that combines ideas from momentum and another algorithm called RMSProp.
- **Adagrad Optimizer**: An algorithm that adapts the learning rate on a per-parameter basis using a history of past gradients.
