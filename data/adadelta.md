# Adadelta

Adadelta is an optimization algorithm used in machine learning for gradient-based optimization of functions. It is an extension of the popular Adagrad algorithm and was introduced in 2012 by Matthew Zeiler.

Adadelta is a robust optimization algorithm that automatically adapts the learning rate during training. Unlike Adagrad, which accumulates all past squared gradients, Adadelta only uses a fixed-sized window of the past gradients to update the learning rate. This allows Adadelta to cope with non-stationary data and noisy gradients.

## Algorithm

The Adadelta algorithm uses the following update rule:

$$\Delta x_t = -\frac{RMS[\Delta x]_{t-1}}{RMS[g]_t}g_t$$
$$x_{t+1} = x_t + \Delta x_t$$
$$RMS[\Delta x]_t = \sqrt{E[\Delta x^2]_t + \epsilon}$$
$$RMS[g]_t = \sqrt{E[g^2]_t + \epsilon}$$
$$E[\Delta x^2]_t = \rho E[\Delta x^2]_{t-1} + (1-\rho)\Delta x_t^2$$
$$E[g^2]_t = \rho E[g^2]_{t-1} + (1-\rho)g_t^2$$

where $g_t$ is the gradient at time step $t$, $x_t$ is the current value of the parameters, $\Delta x_t$ is the update to the parameters at time step $t$, $RMS[\Delta x]_t$ is the root mean square (RMS) of the parameter updates, $RMS[g]_t$ is the RMS of the gradient, $E[\Delta x^2]_t$ and $E[g^2]_t$ are exponentially decaying averages of the squares of the parameter updates and the gradients, respectively, and $\rho$ is a decay rate.

## Advantages

Adadelta has several advantages over other optimization algorithms. 

First, it does not require the setting of a global learning rate. Instead, it dynamically adjusts the learning rate for each parameter based on the local gradient statistics. This makes Adadelta more robust to different learning rate schedules and initializations.

Second, Adadelta is resistant to the problem of vanishing and exploding gradients. By using the RMS of the past gradients to normalize the current gradient, Adadelta can control the rate of updates and prevent the parameters from diverging.

Finally, Adadelta is computationally efficient. It only requires the storage of a fixed-sized window of past gradients and parameter updates, which can be efficiently implemented in practice.

## Disadvantages

Despite its advantages, Adadelta has some limitations. 

First, Adadelta may converge slowly for some problems. This is because it relies on a window of past gradients to estimate the learning rate, which may not be accurate for some problems.

Second, Adadelta can be sensitive to the choice of hyperparameters, such as the size of the window and the decay rate. These hyperparameters can affect the convergence speed and the quality of the final solution.

## Conclusion

Adadelta is a powerful optimization algorithm that can adaptively adjust the learning rate during training. It is robust to different learning rate schedules and can prevent the problem of vanishing and exploding gradients. However, it may converge slowly and can be sensitive to the choice of hyperparameters. Adadelta is a popular choice in deep learning frameworks, such as TensorFlow and PyTorch, and is often used in conjunction with other optimization algorithms, such as Adam and RMSprop.
