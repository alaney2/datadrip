# AMSGrad

AMSGrad is a variant of the stochastic gradient descent optimization algorithm that was introduced in 2018 by Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar. It attempts to address the problem of slow convergence and oscillations faced by other optimization algorithms such as AdaGrad and Adam.

## Background

Gradient descent is a popular optimization algorithm used in machine learning and specifically deep learning to update the weights of a neural network during training. It works by computing the gradient of the loss function with respect to the weights and adjusting them in the opposite direction of the gradient to minimize the loss.

Stochastic gradient descent (SGD) is a variation of gradient descent that computes the gradient of the loss function with respect to a subset of the training data at each iteration. This reduces the computational cost of computing the full gradient, but introduces noise in the gradient estimate.

Adam is another popular optimization algorithm that combines the advantages of both gradient descent and SGD. It uses adaptive learning rates for each weight and also incorporates momentum to improve convergence.

## The Problem with AdaGrad and Adam

AdaGrad is an optimization algorithm that adapts the learning rate for each weight based on the historical gradient information. While it works well for convex optimization problems, it can fail to converge for non-convex problems such as deep neural networks. This is because the learning rate decreases too quickly, causing the algorithm to converge to a suboptimal solution.

Adam, on the other hand, uses both momentum and adaptive learning rates to improve convergence. However, it has been observed to oscillate near the minimum instead of converging, especially when the learning rate is high.

## The Solution: AMSGrad

AMSGrad addresses the problems faced by AdaGrad and Adam by introducing a new set of update rules for the learning rate. Instead of using the cumulative sum of the squared gradients like AdaGrad, it uses the maximum of the historical squared gradients. This ensures that the learning rate does not decrease too quickly and the algorithm converges to a minimum.

The update rule for AMSGrad is as follows:

$$
g_{t} \leftarrow \nabla_{\theta} J(\theta_{t-1}) \\
v_{t} \leftarrow max(v_{t-1}, g_{t}^{2}) \\
\theta_{t} \leftarrow \theta_{t-1} - \frac{\alpha}{\sqrt{v_{t} + \epsilon}} g_{t}
$$

Here, $g_{t}$ is the gradient of the loss function with respect to the weights at time $t$, $v_{t}$ is the maximum of the historical squared gradients up to time $t$, $\theta_{t}$ is the updated weights at time $t$, $\alpha$ is the learning rate, and $\epsilon$ is a small constant to prevent division by zero.

## Conclusion

AMSGrad is a variant of the stochastic gradient descent optimization algorithm that addresses the problems faced by AdaGrad and Adam. It uses the maximum of the historical squared gradients to ensure that the learning rate does not decrease too quickly and the algorithm converges to a minimum. While it has shown promising results in some applications, it is not a silver bullet and may not always outperform other optimization algorithms.
