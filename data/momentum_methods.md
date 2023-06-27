# Momentum Methods

Momentum methods are a class of optimization algorithms used in machine learning and deep learning to improve the convergence of gradient-based optimization techniques, such as gradient descent and stochastic gradient descent. These methods incorporate a momentum term into the update rule, which helps the optimizer to overcome local minima and saddle points, and accelerates convergence to the global minimum.

## Overview

Gradient-based optimization algorithms, such as gradient descent and stochastic gradient descent, update the model parameters iteratively by following the negative gradient of the objective function. However, these methods can suffer from slow convergence, especially when the objective function has a high condition number or contains many local minima and saddle points.

Momentum methods address these issues by incorporating a momentum term into the update rule. The momentum term is a running average of the gradients, which helps the optimizer to overcome local minima and saddle points, and accelerates convergence to the global minimum. The momentum term can be thought of as a "velocity" that accumulates the gradients over time, allowing the optimizer to move faster in the direction of the global minimum.

## Classic Momentum

The classic momentum method, also known as Polyak's momentum, is an extension of the gradient descent algorithm that incorporates a momentum term. The update rule for the classic momentum method is given by:


$$

v_t = \beta v_{t-1} + (1 - \beta) \nabla f(\theta_{t-1})

$$



$$

\theta_t = \theta_{t-1} - \alpha v_t

$$


where $\theta_t$ is the model parameter at iteration $t$, $\nabla f(\theta_{t-1})$ is the gradient of the objective function with respect to the model parameters at iteration $t-1$, $\alpha$ is the learning rate, $\beta$ is the momentum coefficient, and $v_t$ is the momentum term at iteration $t$. The momentum coefficient $\beta$ is a hyperparameter that controls the amount of momentum and is typically set to a value close to 1, such as 0.9.

The classic momentum method can be easily extended to the stochastic gradient descent algorithm by replacing the gradient of the objective function with the stochastic gradient, which is computed using a mini-batch of training examples.

## Nesterov Accelerated Gradient

The Nesterov Accelerated Gradient (NAG) is an improvement of the classic momentum method that incorporates a lookahead step into the update rule. The lookahead step allows the optimizer to "peek" at the future gradient, which helps to correct the momentum term and improves the convergence of the algorithm. The update rule for the NAG method is given by:


$$

v_t = \beta v_{t-1} + (1 - \beta) \nabla f(\theta_{t-1} - \beta v_{t-1})

$$



$$

\theta_t = \theta_{t-1} - \alpha v_t

$$


The NAG method has been shown to converge faster than the classic momentum method, especially for ill-conditioned objective functions.

## Adaptive Momentum Methods

Adaptive momentum methods are a class of optimization algorithms that combine the momentum term with adaptive learning rates. These methods adjust the learning rate for each model parameter individually, based on the magnitude of the gradients. Some popular adaptive momentum methods include:

- RMSProp: The RMSProp (Root Mean Square Propagation) algorithm incorporates an exponentially decaying average of the squared gradients into the update rule, which helps to normalize the learning rate for each model parameter.
- AdaGrad: The AdaGrad (Adaptive Gradient) algorithm accumulates the squared gradients over time and adjusts the learning rate for each model parameter based on the accumulated gradients.
- Adam: The Adam (Adaptive Moment Estimation) algorithm combines the momentum term with an adaptive learning rate, similar to RMSProp and AdaGrad. Adam has been shown to converge faster and achieve better performance than other adaptive momentum methods in many deep learning tasks.

## Conclusion

Momentum methods are a powerful class of optimization algorithms that improve the convergence of gradient-based optimization techniques by incorporating a momentum term into the update rule. These methods help the optimizer to overcome local minima and saddle points, and accelerate convergence to the global minimum. Classic momentum, Nesterov Accelerated Gradient, and adaptive momentum methods, such as RMSProp, AdaGrad, and Adam, are widely used in machine learning and deep learning applications.
