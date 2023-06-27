# Adadelta Optimizer

Adadelta is an adaptive learning rate optimization algorithm designed to address the shortcomings of traditional gradient descent and its variants, such as Adagrad and RMSprop. It was introduced by Matthew D. Zeiler in his 2012 paper, "ADADELTA: An Adaptive Learning Rate Method." The main motivation behind Adadelta is to overcome the problem of diminishing learning rates, which can occur in algorithms like Adagrad, where the learning rate decreases monotonically over time.

## Overview

Adadelta is an extension of the idea of adaptive gradient methods, which adjust the learning rate for each parameter individually based on the historical gradients. The key difference between Adadelta and other adaptive gradient methods is that it does not rely on a global learning rate. Instead, it adapts the learning rate for each parameter based on a window of recent gradients, making it more robust to the problem of diminishing learning rates.

The Adadelta algorithm maintains two state variables for each parameter: the sum of squared gradients ($E[g^2]_t$) and the sum of squared parameter updates ($E[\Delta x^2]_t$). Both state variables are initialized to zero and are updated at each iteration using an exponential moving average with a decay factor $\rho$. The update rule for the sum of squared gradients is:


$$

E[g^2]_t = \rho E[g^2]_{t-1} + (1 - \rho) g_t^2

$$


where $g_t$ is the gradient of the loss function with respect to the parameter at iteration $t$. The update rule for the sum of squared parameter updates is:


$$

E[\Delta x^2]_t = \rho E[\Delta x^2]_{t-1} + (1 - \rho) (\Delta x_t)^2

$$


where $\Delta x_t$ is the parameter update at iteration $t$. The parameter update is computed as:


$$

\Delta x_t = - \frac{\sqrt{E[\Delta x^2]_{t-1} + \epsilon}}{\sqrt{E[g^2]_t + \epsilon}} g_t

$$


where $\epsilon$ is a small constant added for numerical stability. The parameter is then updated as:


$$

x_{t+1} = x_t + \Delta x_t

$$


## Advantages

Adadelta has several advantages over traditional gradient descent and other adaptive gradient methods:

1. **No need for a global learning rate**: Adadelta does not require the user to set a global learning rate, as it adapts the learning rate for each parameter individually based on the recent gradients. This makes it easier to use and less sensitive to the choice of hyperparameters.

2. **Robustness to diminishing learning rates**: Adadelta addresses the problem of diminishing learning rates by considering a window of recent gradients rather than the entire history of gradients. This allows the learning rate to increase if the recent gradients are small, preventing the algorithm from getting stuck in regions of low gradient.

3. **Less sensitive to the choice of decay factor**: The decay factor $\rho$ in Adadelta controls the size of the window of recent gradients. In practice, Adadelta has been found to be less sensitive to the choice of $\rho$ compared to other adaptive gradient methods like RMSprop.

## Disadvantages

Despite its advantages, Adadelta also has some limitations:

1. **Higher memory requirements**: Adadelta maintains two state variables for each parameter, which can lead to higher memory requirements compared to other optimization algorithms.

2. **Slower convergence**: In some cases, Adadelta can converge slower than other adaptive gradient methods like Adam or RMSprop, especially in the initial stages of training.

## Conclusion

Adadelta is an adaptive learning rate optimization algorithm that addresses the shortcomings of traditional gradient descent and its variants. It is particularly useful in situations where the choice of a global learning rate is difficult or when the problem of diminishing learning rates is a concern. However, it may have higher memory requirements and slower convergence compared to other adaptive gradient methods.
